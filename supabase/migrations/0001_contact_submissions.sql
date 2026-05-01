-- ── Contact form submissions ────────────────────────────────────────────────
-- Stores every "Send Us a Message" submission from the public site.
-- Row-Level Security is enabled with NO policies, so anon/authenticated users
-- cannot read or write directly. The send-contact-email Edge Function uses
-- the service-role key (which bypasses RLS) to insert.

create table if not exists public.contact_submissions (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  full_name       text not null,
  email           text not null,
  phone           text,
  i_am            text,
  interested_in   text,
  message         text not null,
  ip_address      text,
  user_agent      text,
  email_sent_at   timestamptz
);

create index if not exists idx_contact_submissions_created_at
  on public.contact_submissions (created_at desc);

create index if not exists idx_contact_submissions_email
  on public.contact_submissions (email);

alter table public.contact_submissions enable row level security;
-- Intentionally NO policies — only service-role (used by the edge function)
-- can read/write. The browser anon key cannot touch this table.
