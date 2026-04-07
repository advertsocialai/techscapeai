-- ================================================================
-- TechScape AI — Supabase PostgreSQL Database Schema
-- ================================================================
-- Run this script in your Supabase SQL Editor.
-- Enable required extensions first.
-- ================================================================

-- ── Extensions ──────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector";    -- pgvector for RAG/embeddings

-- ================================================================
-- TABLE: contact_submissions
-- Stores all contact form submissions from the website.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name            TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
    email           TEXT NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
    company         TEXT,
    interest        TEXT CHECK (interest IN (
                        'Trend Discovery', 'Tool Analysis', 'Custom Reports',
                        'Enterprise Plan', 'API Integration', 'General Inquiry'
                    ) OR interest IS NULL),
    message         TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 5000),
    status          TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    ip_address      INET,
    user_agent      TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email     ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status    ON public.contact_submissions (status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created   ON public.contact_submissions (created_at DESC);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_contact_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ================================================================
-- TABLE: newsletter_subscribers
-- Tracks email newsletter subscriptions.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email           TEXT NOT NULL UNIQUE CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
    name            TEXT,
    subscribed      BOOLEAN NOT NULL DEFAULT TRUE,
    source          TEXT DEFAULT 'website',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email       ON public.newsletter_subscribers (email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed  ON public.newsletter_subscribers (subscribed);

CREATE TRIGGER trg_newsletter_updated_at
    BEFORE UPDATE ON public.newsletter_subscribers
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ================================================================
-- TABLE: users (extends Supabase Auth)
-- Stores additional profile data for authenticated users.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.users (
    id              UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
    email           TEXT NOT NULL,
    full_name       TEXT,
    company         TEXT,
    avatar_url      TEXT,
    plan            TEXT NOT NULL DEFAULT 'starter' CHECK (plan IN ('starter', 'pro', 'enterprise')),
    api_calls_used  INTEGER NOT NULL DEFAULT 0,
    api_calls_limit INTEGER NOT NULL DEFAULT 50,
    onboarded       BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON public.users (email);
CREATE INDEX IF NOT EXISTS idx_users_plan  ON public.users (plan);

CREATE TRIGGER trg_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create user profile on sign-up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ================================================================
-- TABLE: agents
-- Defines AI agent configurations.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.agents (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id         UUID NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
    name            TEXT NOT NULL,
    description     TEXT,
    domains         TEXT[] DEFAULT '{}',           -- e.g. ['AI/ML', 'Cloud', 'Web']
    config          JSONB DEFAULT '{}',            -- agent-specific settings
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_agents_user_id ON public.agents (user_id);
CREATE INDEX IF NOT EXISTS idx_agents_active  ON public.agents (is_active);

CREATE TRIGGER trg_agents_updated_at
    BEFORE UPDATE ON public.agents
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ================================================================
-- TABLE: agent_runs
-- Records of every agent execution.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.agent_runs (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agent_id        UUID NOT NULL REFERENCES public.agents (id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
    status          TEXT NOT NULL DEFAULT 'pending'
                        CHECK (status IN ('pending', 'running', 'completed', 'failed')),
    task_input      TEXT,
    result          JSONB,
    error_message   TEXT,
    tokens_used     INTEGER DEFAULT 0,
    duration_ms     INTEGER,
    started_at      TIMESTAMPTZ,
    completed_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_agent_runs_agent_id  ON public.agent_runs (agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_runs_user_id   ON public.agent_runs (user_id);
CREATE INDEX IF NOT EXISTS idx_agent_runs_status    ON public.agent_runs (status);
CREATE INDEX IF NOT EXISTS idx_agent_runs_created   ON public.agent_runs (created_at DESC);

-- ================================================================
-- TABLE: reports
-- Generated analysis reports.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.reports (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id         UUID NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
    agent_run_id    UUID REFERENCES public.agent_runs (id) ON DELETE SET NULL,
    title           TEXT NOT NULL,
    summary         TEXT,
    content         JSONB,
    format          TEXT DEFAULT 'json' CHECK (format IN ('json', 'pdf', 'csv')),
    file_url        TEXT,
    tags            TEXT[] DEFAULT '{}',
    is_public       BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reports_user_id   ON public.reports (user_id);
CREATE INDEX IF NOT EXISTS idx_reports_public    ON public.reports (is_public);
CREATE INDEX IF NOT EXISTS idx_reports_created   ON public.reports (created_at DESC);

CREATE TRIGGER trg_reports_updated_at
    BEFORE UPDATE ON public.reports
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ================================================================
-- TABLE: embeddings
-- pgvector embeddings for RAG / agent memory.
-- ================================================================
CREATE TABLE IF NOT EXISTS public.embeddings (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id         UUID REFERENCES public.users (id) ON DELETE CASCADE,
    agent_id        UUID REFERENCES public.agents (id) ON DELETE CASCADE,
    source_type     TEXT CHECK (source_type IN ('report', 'agent_run', 'document', 'trend')),
    source_id       UUID,
    content         TEXT NOT NULL,
    embedding       vector(1536),               -- OpenAI text-embedding-3-small dimensions
    metadata        JSONB DEFAULT '{}',
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- HNSW index for fast approximate nearest-neighbor search
CREATE INDEX IF NOT EXISTS idx_embeddings_vector
    ON public.embeddings
    USING hnsw (embedding vector_cosine_ops)
    WITH (m = 16, ef_construction = 64);

CREATE INDEX IF NOT EXISTS idx_embeddings_user_id   ON public.embeddings (user_id);
CREATE INDEX IF NOT EXISTS idx_embeddings_agent_id  ON public.embeddings (agent_id);

-- ================================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================================

-- Enable RLS on all user-data tables
ALTER TABLE public.users                    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents                   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agent_runs               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.embeddings               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers   ENABLE ROW LEVEL SECURITY;

-- ── users policies ──
CREATE POLICY "Users can view own profile"
    ON public.users FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON public.users FOR UPDATE
    USING (auth.uid() = id);

-- ── agents policies ──
CREATE POLICY "Users can manage own agents"
    ON public.agents FOR ALL
    USING (auth.uid() = user_id);

-- ── agent_runs policies ──
CREATE POLICY "Users can manage own agent runs"
    ON public.agent_runs FOR ALL
    USING (auth.uid() = user_id);

-- ── reports policies ──
CREATE POLICY "Users can manage own reports"
    ON public.reports FOR ALL
    USING (auth.uid() = user_id);

CREATE POLICY "Public reports are readable by everyone"
    ON public.reports FOR SELECT
    USING (is_public = TRUE);

-- ── embeddings policies ──
CREATE POLICY "Users can manage own embeddings"
    ON public.embeddings FOR ALL
    USING (auth.uid() = user_id);

-- ── contact_submissions: only service role can read (admin) ──
CREATE POLICY "Service role only — contact submissions"
    ON public.contact_submissions FOR ALL
    USING (FALSE);   -- Blocked for all non-service-role requests

-- ── newsletter_subscribers: insert allowed for everyone ──
CREATE POLICY "Anyone can subscribe to newsletter"
    ON public.newsletter_subscribers FOR INSERT
    WITH CHECK (TRUE);

CREATE POLICY "Subscribers can view own record"
    ON public.newsletter_subscribers FOR SELECT
    USING (email = current_user);

-- ================================================================
-- HELPER FUNCTIONS
-- ================================================================

-- Semantic similarity search for RAG
CREATE OR REPLACE FUNCTION public.match_embeddings(
    query_embedding vector(1536),
    match_threshold FLOAT DEFAULT 0.75,
    match_count     INT DEFAULT 10,
    p_user_id       UUID DEFAULT NULL
)
RETURNS TABLE (
    id          UUID,
    content     TEXT,
    metadata    JSONB,
    similarity  FLOAT
)
LANGUAGE sql STABLE AS $$
    SELECT
        e.id,
        e.content,
        e.metadata,
        1 - (e.embedding <=> query_embedding) AS similarity
    FROM public.embeddings e
    WHERE
        (p_user_id IS NULL OR e.user_id = p_user_id)
        AND 1 - (e.embedding <=> query_embedding) > match_threshold
    ORDER BY similarity DESC
    LIMIT match_count;
$$;
