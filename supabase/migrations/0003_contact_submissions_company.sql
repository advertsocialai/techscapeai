-- ── Contact submissions: company name ───────────────────────────────────────
-- The /contact page form asks for a company name; the GetStarted form does
-- not, so the column is nullable.

alter table public.contact_submissions
  add column if not exists company_name text;
