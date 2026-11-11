-- CRT pilot cohort applications (+ resume uploads).
-- Run once in the Supabase SQL editor.
--
-- * crt_applications  : private table (RLS on, no policies) - the public site cannot read it.
-- * submit_crt_application(): the only thing the public site can call. Validates and returns the reference.
-- * crt-resumes bucket: private. The public site may upload (PDF/DOC/DOCX, max 5 MB) but never read or list.

create sequence if not exists public.crt_application_seq;

create table if not exists public.crt_applications (
  id             uuid primary key default gen_random_uuid(),
  reference      text not null unique,
  full_name      text not null,
  email          text not null,
  mobile         text not null,
  city           text not null,
  college        text not null,
  qualification  text not null,
  year_of_study  text not null,
  learning_area  text,
  resume_path    text,          -- path inside the crt-resumes bucket
  resume_name    text,          -- original file name
  consent        boolean not null default false,
  status         text not null default 'new',
  created_at     timestamptz not null default now()
);

create unique index if not exists crt_applications_email_key
  on public.crt_applications (lower(email));

alter table public.crt_applications enable row level security;

-- ---------- Resume bucket ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'crt-resumes', 'crt-resumes', false, 5242880,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types,
      public = false;

drop policy if exists "crt resumes: public can upload" on storage.objects;
create policy "crt resumes: public can upload"
  on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'crt-resumes');

-- ---------- Submit function ----------
drop function if exists public.submit_crt_application(text,text,text,text,text,text,text,text,boolean);

create or replace function public.submit_crt_application(
  p_full_name     text,
  p_email         text,
  p_mobile        text,
  p_city          text,
  p_college       text,
  p_qualification text,
  p_year_of_study text,
  p_learning_area text,
  p_resume_path   text,
  p_resume_name   text,
  p_consent       boolean
) returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_ref text;
begin
  if coalesce(trim(p_full_name), '') = '' or length(p_full_name) > 120 then
    raise exception 'INVALID_NAME';
  end if;
  if p_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' or length(p_email) > 200 then
    raise exception 'INVALID_EMAIL';
  end if;
  -- mobile is stored as +<country code><digits>, e.g. +916303443476
  if p_mobile !~ '^\+[1-9][0-9]{7,14}$' then
    raise exception 'INVALID_MOBILE';
  end if;
  if coalesce(trim(p_city), '') = '' or coalesce(trim(p_college), '') = ''
     or coalesce(trim(p_qualification), '') = '' or coalesce(trim(p_year_of_study), '') = ''
     or coalesce(trim(p_learning_area), '') = '' then
    raise exception 'MISSING_FIELDS';
  end if;
  if p_consent is not true then
    raise exception 'CONSENT_REQUIRED';
  end if;
  if p_resume_path is null or p_resume_path !~ '^[0-9a-f-]{36}/[^/]{1,200}$' then
    raise exception 'INVALID_RESUME';
  end if;

  v_ref := 'CRT-' || to_char(now(), 'YYYY') || '-' || lpad(nextval('public.crt_application_seq')::text, 4, '0');

  insert into public.crt_applications
    (reference, full_name, email, mobile, city, college, qualification, year_of_study,
     learning_area, resume_path, resume_name, consent)
  values
    (v_ref, trim(p_full_name), trim(p_email), p_mobile, trim(p_city), trim(p_college),
     trim(p_qualification), trim(p_year_of_study), trim(p_learning_area),
     p_resume_path, left(p_resume_name, 200), true);

  return v_ref;
exception
  when unique_violation then
    raise exception 'ALREADY_APPLIED';
end;
$$;

revoke all on function public.submit_crt_application(text,text,text,text,text,text,text,text,text,text,boolean) from public;
grant execute on function public.submit_crt_application(text,text,text,text,text,text,text,text,text,text,boolean) to anon, authenticated;
