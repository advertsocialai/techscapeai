-- ================================================================
-- Travel AI Operating Layer — Tier 1 schema
-- ================================================================
-- Apply via Supabase SQL Editor (or `supabase db push`).
-- All tables tied to ts_businesses for multi-tenancy.
-- ================================================================

-- pgvector + pg_trgm needed (already enabled on the project).
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. RAG knowledge base ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_wiki (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id  UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    category     VARCHAR(50) NOT NULL CHECK (category IN (
        'destination','package','policy','sop','objection','supplier','pricing','general'
    )),
    title        VARCHAR(255) NOT NULL,
    content      TEXT NOT NULL,
    metadata     JSONB DEFAULT '{}',
    tags         JSONB DEFAULT '[]',
    embedding    vector(1536),
    source       VARCHAR(255),
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_wiki_business     ON public.travel_wiki(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_wiki_category     ON public.travel_wiki(category);
CREATE INDEX IF NOT EXISTS idx_travel_wiki_title_trgm   ON public.travel_wiki USING gin (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_travel_wiki_content_trgm ON public.travel_wiki USING gin (content gin_trgm_ops);
ALTER TABLE public.travel_wiki ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_wiki_updated_at BEFORE UPDATE ON public.travel_wiki FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 2. Destinations ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_destinations (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id  UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    name         VARCHAR(255) NOT NULL,
    country      VARCHAR(100) NOT NULL,
    region       VARCHAR(100),
    best_seasons JSONB DEFAULT '[]',
    highlights   JSONB DEFAULT '[]',
    avg_cost_inr INTEGER,
    metadata     JSONB DEFAULT '{}',
    is_active    BOOLEAN DEFAULT TRUE,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(business_id, name)
);
CREATE INDEX IF NOT EXISTS idx_travel_destinations_business ON public.travel_destinations(business_id);
ALTER TABLE public.travel_destinations ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_destinations_updated_at BEFORE UPDATE ON public.travel_destinations FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3. Packages (curated catalog) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_packages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    name            VARCHAR(255) NOT NULL,
    destination_id  UUID REFERENCES public.travel_destinations(id),
    duration_days   INTEGER NOT NULL,
    base_price_inr  INTEGER NOT NULL,
    inclusions      JSONB DEFAULT '[]',
    exclusions      JSONB DEFAULT '[]',
    itinerary_template JSONB DEFAULT '[]',
    min_pax         INTEGER DEFAULT 1,
    max_pax         INTEGER DEFAULT 20,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_packages_business    ON public.travel_packages(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_packages_destination ON public.travel_packages(destination_id);
ALTER TABLE public.travel_packages ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_packages_updated_at BEFORE UPDATE ON public.travel_packages FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4. Customer profiles (memory layer) ────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_customer_profiles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    contact_id      UUID REFERENCES public.ts_business_contacts(id) ON DELETE SET NULL,
    full_name       VARCHAR(255),
    email           VARCHAR(255),
    phone           VARCHAR(20),
    preferences     JSONB DEFAULT '{}',
    past_trips      JSONB DEFAULT '[]',
    family_profile  JSONB DEFAULT '{}',
    language        VARCHAR(10) DEFAULT 'en',
    notes           TEXT,
    last_intent     TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(business_id, email)
);
CREATE INDEX IF NOT EXISTS idx_travel_cust_profiles_biz   ON public.travel_customer_profiles(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_cust_profiles_email ON public.travel_customer_profiles(email);
ALTER TABLE public.travel_customer_profiles ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_cust_profiles_updated_at BEFORE UPDATE ON public.travel_customer_profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 5. Itineraries ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_itineraries (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    customer_id     UUID REFERENCES public.travel_customer_profiles(id) ON DELETE SET NULL,
    title           VARCHAR(255),
    intent          TEXT,
    days            JSONB DEFAULT '[]',
    total_cost_inr  INTEGER,
    cost_breakdown  JSONB DEFAULT '{}',
    status          VARCHAR(50) DEFAULT 'draft' CHECK (status IN (
        'draft','sent','accepted','modified','booked','cancelled'
    )),
    pax_count       INTEGER DEFAULT 1,
    version         INTEGER DEFAULT 1,
    parent_id       UUID REFERENCES public.travel_itineraries(id),
    model           VARCHAR(50),
    raw_response    JSONB DEFAULT '{}',
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_itin_business ON public.travel_itineraries(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_itin_customer ON public.travel_itineraries(customer_id);
CREATE INDEX IF NOT EXISTS idx_travel_itin_status   ON public.travel_itineraries(status);
ALTER TABLE public.travel_itineraries ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_itin_updated_at BEFORE UPDATE ON public.travel_itineraries FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 6. Franchisees ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_franchisees (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id   UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    name          VARCHAR(255) NOT NULL,
    city          VARCHAR(100),
    state         VARCHAR(100),
    country       VARCHAR(100) DEFAULT 'India',
    owner_name    VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    is_active     BOOLEAN DEFAULT TRUE,
    onboarded_at  TIMESTAMPTZ,
    metadata      JSONB DEFAULT '{}',
    created_at    TIMESTAMPTZ DEFAULT NOW(),
    updated_at    TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_franchisees_business ON public.travel_franchisees(business_id);
ALTER TABLE public.travel_franchisees ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_franchisees_updated_at BEFORE UPDATE ON public.travel_franchisees FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 7. Suppliers ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_suppliers (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    name            VARCHAR(255) NOT NULL,
    supplier_type   VARCHAR(50) CHECK (supplier_type IN (
        'hotel','transport','activity','flight','cruise','restaurant','other'
    )),
    city            VARCHAR(100),
    country         VARCHAR(100),
    contact_email   VARCHAR(255),
    contact_phone   VARCHAR(20),
    api_endpoint    VARCHAR(500),
    reliability_score NUMERIC(5,2) DEFAULT 0.0,
    metadata        JSONB DEFAULT '{}',
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_suppliers_business ON public.travel_suppliers(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_suppliers_type     ON public.travel_suppliers(supplier_type);
ALTER TABLE public.travel_suppliers ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_suppliers_updated_at BEFORE UPDATE ON public.travel_suppliers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 8. Booking guarantees ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.travel_booking_guarantees (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_id     UUID NOT NULL REFERENCES public.ts_businesses(id) ON DELETE CASCADE,
    itinerary_id    UUID REFERENCES public.travel_itineraries(id) ON DELETE CASCADE,
    supplier_id     UUID REFERENCES public.travel_suppliers(id) ON DELETE SET NULL,
    booking_ref     VARCHAR(255),
    checkin_at      TIMESTAMPTZ,
    verified_at     TIMESTAMPTZ,
    verification_status VARCHAR(50) DEFAULT 'pending' CHECK (verification_status IN (
        'pending','verified','failed','no_response','reallocated'
    )),
    failure_reason  TEXT,
    alternative_id  UUID REFERENCES public.travel_suppliers(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_travel_bg_business ON public.travel_booking_guarantees(business_id);
CREATE INDEX IF NOT EXISTS idx_travel_bg_status   ON public.travel_booking_guarantees(verification_status);
ALTER TABLE public.travel_booking_guarantees ENABLE ROW LEVEL SECURITY;
CREATE TRIGGER trg_travel_bg_updated_at BEFORE UPDATE ON public.travel_booking_guarantees FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Lock down anon/auth — only service-role accesses these via FastAPI
DO $$
DECLARE
    t TEXT;
BEGIN
    FOREACH t IN ARRAY ARRAY[
        'travel_wiki','travel_destinations','travel_packages',
        'travel_customer_profiles','travel_itineraries',
        'travel_franchisees','travel_suppliers','travel_booking_guarantees'
    ] LOOP
        EXECUTE format('REVOKE ALL ON TABLE public.%I FROM anon, authenticated', t);
    END LOOP;
END$$;
