# TechScape AI — Architecture Document

## Overview

TechScape AI is an agentic AI platform designed for scalability, real-time responsiveness, and intelligent automation. This document outlines the full system architecture, technology choices, data flow, and deployment strategy.

---

## Tech Stack Summary

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Next.js + Vercel | UI, server-side rendering, edge functions |
| Backend | FastAPI (Python) | API server, agent orchestration |
| Database | Supabase (PostgreSQL) | Structured data, auth, vector memory |
| Vector Search | pgvector (via Supabase) | RAG, agent memory, semantic search |
| AI Engine | Claude (claude-sonnet-4-6) | Agentic reasoning, generation, tool use |
| File Storage | Supabase Storage / AWS S3 | Documents, media, exports |
| Backend Hosting | AWS (ECS / Lambda) | Scalable container/serverless hosting |
| Frontend Hosting | Vercel | Global CDN, edge deployment |
| CI/CD | GitHub Actions | Automated testing and deployment |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER / CLIENT                            │
│                  (Browser / API Consumer)                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  VERCEL — FRONTEND LAYER                        │
│                                                                 │
│   ┌─────────────────┐     ┌──────────────────────────────────┐  │
│   │  Next.js App    │     │  Edge Functions                  │  │
│   │  (React UI)     │     │  (Auth middleware, rate limiting) │  │
│   └────────┬────────┘     └──────────────┬───────────────────┘  │
└────────────┼──────────────────────────────┼────────────────────-┘
             │ REST / WebSocket             │
             ▼                             ▼
┌─────────────────────────────────────────────────────────────────┐
│               AWS — BACKEND LAYER                               │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │              FastAPI Application Server                 │   │
│   │                                                         │   │
│   │   ┌─────────────┐   ┌──────────────┐   ┌────────────┐  │   │
│   │   │  REST API   │   │  Agent       │   │  Tool      │  │   │
│   │   │  Endpoints  │   │  Orchestrator│   │  Registry  │  │   │
│   │   └─────────────┘   └──────┬───────┘   └────────────┘  │   │
│   │                            │                            │   │
│   │   ┌─────────────┐   ┌──────▼───────┐   ┌────────────┐  │   │
│   │   │  Auth       │   │  Task Queue  │   │  Streaming │  │   │
│   │   │  Middleware │   │  (async jobs)│   │  Handler   │  │   │
│   │   └─────────────┘   └─────────────┘   └────────────┘  │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌───────────────┐          ┌──────────────────────────────┐   │
│   │  AWS Lambda   │          │  AWS S3                      │   │
│   │  (async tasks)│          │  (file storage, exports)     │   │
│   └───────────────┘          └──────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
             │                              │
             ▼                             ▼
┌────────────────────────┐    ┌────────────────────────────────────┐
│  SUPABASE              │    │  ANTHROPIC API                     │
│                        │    │                                    │
│  ┌──────────────────┐  │    │  ┌──────────────────────────────┐  │
│  │  PostgreSQL DB   │  │    │  │  Claude claude-sonnet-4-6    │  │
│  │  (core data)     │  │    │  │  - Agentic reasoning         │  │
│  └──────────────────┘  │    │  │  - Tool use                  │  │
│  ┌──────────────────┐  │    │  │  - Streaming responses       │  │
│  │  pgvector        │  │    │  └──────────────────────────────┘  │
│  │  (RAG + memory)  │  │    │                                    │
│  └──────────────────┘  │    └────────────────────────────────────┘
│  ┌──────────────────┐  │
│  │  Auth (JWT)      │  │
│  └──────────────────┘  │
│  ┌──────────────────┐  │
│  │  Realtime        │  │
│  │  (live updates)  │  │
│  └──────────────────┘  │
│  ┌──────────────────┐  │
│  │  Storage         │  │
│  │  (media/docs)    │  │
│  └──────────────────┘  │
└────────────────────────┘
```

---

## Component Breakdown

### 1. Frontend — Next.js on Vercel

- **Framework:** Next.js 14+ (App Router)
- **Hosting:** Vercel (global CDN, automatic scaling)
- **Key responsibilities:**
  - Server-side rendering for fast initial loads
  - Streaming UI for real-time agent responses
  - Edge middleware for auth token validation and rate limiting
  - WebSocket connections for live agent task updates

**Key pages/routes:**
```
/                    → Dashboard
/agents              → Agent management
/agents/[id]/run     → Live agent execution view
/reports             → Generated reports
/settings            → API keys, preferences
```

---

### 2. Backend — FastAPI on AWS

- **Framework:** FastAPI (Python 3.11+)
- **Hosting:** AWS ECS (long-running tasks) + AWS Lambda (async jobs)
- **Key responsibilities:**
  - REST API for frontend consumption
  - Agent orchestration and lifecycle management
  - Tool registry (web search, code execution, DB queries)
  - Streaming Claude API responses to clients
  - Task queue management for async agent runs

**Core modules:**
```
app/
├── api/
│   ├── routes/
│   │   ├── agents.py       # Agent CRUD and execution
│   │   ├── reports.py      # Report generation
│   │   ├── tools.py        # Tool management
│   │   └── auth.py         # Auth endpoints
├── agents/
│   ├── orchestrator.py     # Agent run loop
│   ├── memory.py           # RAG / vector memory
│   └── tools/              # Tool implementations
├── services/
│   ├── claude.py           # Anthropic API client
│   ├── supabase.py         # DB client
│   └── storage.py          # S3/Supabase storage
└── main.py
```

---

### 3. Database — Supabase (PostgreSQL + pgvector)

- **Provider:** Supabase (managed PostgreSQL)
- **Extensions:** pgvector (semantic search and agent memory)

**Core tables:**
```sql
users          -- User accounts (managed by Supabase Auth)
agents         -- Agent definitions and configurations
agent_runs     -- Execution history and status
messages       -- Conversation/agent message logs
embeddings     -- Vector embeddings for RAG memory
reports        -- Generated output reports
tools          -- Registered tool definitions
```

**pgvector usage:**
- Store embeddings of past agent outputs, documents, and knowledge
- Enable semantic search for agent memory retrieval (RAG)
- Power the "find similar past analyses" feature

---

### 4. AI Engine — Claude (claude-sonnet-4-6)

- **Provider:** Anthropic API
- **Model:** `claude-sonnet-4-6` (primary), `claude-haiku-4-5` (lightweight tasks)
- **Integration pattern:** Tool use + streaming

**Agent loop:**
```
1. Receive user task
2. Claude reasons and selects tools
3. Tools execute (web search, DB query, code run, etc.)
4. Results returned to Claude
5. Claude reasons again → repeat until done
6. Final response streamed to user
```

**Tools available to agents:**
- Web search
- Database query (Supabase)
- Code execution (sandboxed)
- Report generation
- File read/write (S3)
- External API calls

---

### 5. File Storage — AWS S3 + Supabase Storage

| Use Case | Storage |
|---|---|
| User uploads (docs, PDFs) | Supabase Storage |
| Generated reports (PDF, CSV) | AWS S3 |
| Agent execution artifacts | AWS S3 |
| Profile images | Supabase Storage |

---

## Data Flow — Agentic Task Execution

```
User submits task
      │
      ▼
Next.js → POST /api/agents/{id}/run
      │
      ▼
FastAPI receives request
  → Validates auth (Supabase JWT)
  → Creates agent_run record in DB
  → Starts async agent loop
      │
      ▼
Agent Orchestrator
  → Fetches agent config from DB
  → Retrieves relevant memory (pgvector similarity search)
  → Sends task + memory + tools to Claude API
      │
      ▼
Claude reasons and calls tools
  → Tool results returned to Claude
  → Claude streams partial responses
      │
      ▼
FastAPI streams response chunks → Vercel Edge → Browser
  → Final result saved to DB
  → Report generated and stored in S3
      │
      ▼
Supabase Realtime notifies frontend
  → UI updates with completed status
```

---

## Authentication & Security

- **Auth provider:** Supabase Auth (JWT-based)
- **Session management:** Supabase handles token refresh
- **API security:**
  - All FastAPI routes protected by JWT middleware
  - Vercel edge functions validate tokens before hitting backend
  - Row Level Security (RLS) enabled on all Supabase tables
- **Secrets management:** AWS Secrets Manager for API keys
- **CORS:** Restricted to Vercel domain only

---

## Deployment Architecture

```
GitHub (main branch)
      │
      ▼
GitHub Actions CI/CD
  ├── Run tests (pytest + jest)
  ├── Build Docker image (FastAPI)
  ├── Push to AWS ECR
  ├── Deploy to AWS ECS
  └── Trigger Vercel deployment (automatic via GitHub integration)
```

### Environments

| Environment | Frontend | Backend | Database |
|---|---|---|---|
| Development | localhost:3000 | localhost:8000 | Supabase dev project |
| Staging | Vercel preview URL | AWS ECS staging | Supabase staging project |
| Production | techscapeai.com | AWS ECS prod | Supabase prod project |

---

## Scalability Considerations

| Concern | Solution |
|---|---|
| High agent concurrency | AWS ECS auto-scaling + async task queue |
| Long-running agents (>30s) | AWS Lambda for async, Supabase Realtime for status |
| Vector search performance | pgvector HNSW index on embeddings table |
| Frontend performance | Vercel edge caching, Next.js streaming |
| Database connections | Supabase connection pooling (pgBouncer) |
| Cost at scale | Use claude-haiku-4-5 for simple tasks, sonnet for complex |

---

## Why Not GoDaddy

GoDaddy is a domain registrar and basic web hosting service — it is **not suitable** for this platform because:

- No container or serverless support
- No environment variable management
- No CI/CD pipeline integration
- No scalability for concurrent AI workloads
- No WebSocket or streaming support

**Use GoDaddy only** for domain registration (e.g., `techscapeai.com`), then point DNS to Vercel.

---

## Cost Estimate (Monthly, Early Stage)

| Service | Tier | Est. Cost |
|---|---|---|
| Vercel | Pro | ~$20 |
| Supabase | Pro | ~$25 |
| AWS ECS (Fargate) | t3.small equivalent | ~$30–60 |
| AWS S3 | Pay-as-you-go | ~$5 |
| Anthropic API | Usage-based | ~$50–200 |
| **Total** | | **~$130–310/mo** |

---

## Future Considerations

- **Multi-agent workflows** — agents spawning sub-agents via Claude's tool use
- **Observability** — integrate Langfuse or Helicone for LLM tracing
- **Knowledge base** — allow users to upload docs for per-agent RAG memory
- **Webhooks** — notify external systems when agent tasks complete
- **Self-hosted option** — Docker Compose setup for on-premise deployments
