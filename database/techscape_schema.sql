-- ================================================================
-- TechScape Workflow Automation Platform — PostgreSQL Schema
-- ================================================================
-- Already applied to Supabase project xhrrkwojitchaaghohvr.
-- Kept here as a reference for re-creating the platform on a new project.
-- All tables prefixed with `ts_` to keep separation from the
-- landing-page tables in schema.sql.
-- ================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

ALTER FUNCTION public.set_updated_at() SET search_path = public, pg_temp;

-- ──────────────────────────────────────────────────────────────────
-- 13 ts_* tables (see migration in Supabase for full DDL):
--   ts_businesses
--   ts_users                     business_id FK CASCADE
--   ts_workflows                 business_id FK CASCADE,  user_id  FK
--   ts_workflow_steps            workflow_id FK CASCADE
--   ts_communication_templates   business_id FK CASCADE
--   ts_workflow_executions       workflow_id FK CASCADE,  business_id FK CASCADE
--   ts_communication_logs        execution_id FK CASCADE, workflow_id FK CASCADE,
--                                step_id FK,             business_id FK CASCADE,
--                                template_id FK
--   ts_api_integrations          business_id FK CASCADE
--   ts_webhook_queue             business_id FK CASCADE,  integration_id FK
--   ts_business_contacts         business_id FK CASCADE,  UNIQUE(business_id,email)
--   ts_workflow_analytics        business_id FK CASCADE,  workflow_id FK CASCADE,
--                                UNIQUE(workflow_id, date)
--   ts_billing_records           business_id FK CASCADE
--   ts_audit_logs                business_id FK SET NULL, user_id FK SET NULL
--                                (audit trail must outlive subjects per SOC 2)
--
-- All 13 tables have RLS enabled. anon and authenticated roles have ALL
-- revoked — only the service-role key (used by FastAPI) can access them.
-- ==================================================================

-- Cascade hardening migration applied 2026-05-08:
--   ts_audit_logs.business_id     → ON DELETE SET NULL
--   ts_audit_logs.user_id         → ON DELETE SET NULL
--   ts_billing_records.business_id → ON DELETE CASCADE
ALTER TABLE public.ts_audit_logs
  DROP CONSTRAINT IF EXISTS ts_audit_logs_business_id_fkey,
  ADD  CONSTRAINT ts_audit_logs_business_id_fkey
       FOREIGN KEY (business_id) REFERENCES public.ts_businesses(id)
       ON DELETE SET NULL;

ALTER TABLE public.ts_audit_logs
  DROP CONSTRAINT IF EXISTS ts_audit_logs_user_id_fkey,
  ADD  CONSTRAINT ts_audit_logs_user_id_fkey
       FOREIGN KEY (user_id) REFERENCES public.ts_users(id)
       ON DELETE SET NULL;

ALTER TABLE public.ts_billing_records
  DROP CONSTRAINT IF EXISTS ts_billing_records_business_id_fkey,
  ADD  CONSTRAINT ts_billing_records_business_id_fkey
       FOREIGN KEY (business_id) REFERENCES public.ts_businesses(id)
       ON DELETE CASCADE;
