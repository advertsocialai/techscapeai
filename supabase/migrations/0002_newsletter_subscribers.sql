create table if not exists public.newsletter_subscribers (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  email           text not null,
  source          text,
  ip_address      text,
  user_agent      text
);


create unique index if not exists uq_newsletter_subscribers_email
  on public.newsletter_subscribers (lower(email));

create index if not exists idx_newsletter_subscribers_created_at
  on public.newsletter_subscribers (created_at desc);

alter table public.newsletter_subscribers enable row level security;

