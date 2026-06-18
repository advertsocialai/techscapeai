import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  analyticsOverview, listWorkflows, listExecutions, listCommunications,
  triggerWorkflow, createWorkflow, generateMessage, generateTemplate,
  analyzeSentiment, classifyIntent, summarizeConversation, optimizeWorkflow,
  registerWithUser, login,
  isAuthenticated, getMe, signOut,
  setAccessToken, setRefreshToken, setApiKey,
  seedTravelDemo, importContactsCsv,
  billingCurrent, billingHistory,
} from '../services/techscapeApi'

const CHANNELS = ['email', 'sms', 'whatsapp', 'voice', 'voicemail']
const ACTIONS = [
  'send_email', 'send_sms', 'send_whatsapp',
  'make_voice_call', 'send_voicemail', 'ai_generate_response',
  'conditional_branch', 'wait',
]


function Card({ title, children, action }) {
  return (
    <div className="card-hover rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-semibold text-white">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl p-4" style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
      <p className="text-[11px] text-white/40 uppercase tracking-widest">{label}</p>
      <p className="text-[22px] font-extrabold grad-text mt-1">{value}</p>
    </div>
  )
}

/* ── AuthGate (login + register tabs) ───────────────── */
function AuthGate({ onReady }) {
  const [tab, setTab]         = useState('login')
  const [email, setEmail]     = useState('')
  const [password, setPwd]    = useState('')
  const [bizName, setBizName] = useState('')
  const [apiKey, setApiInput] = useState('')
  const [busy, setBusy]       = useState(false)
  const [err, setErr]         = useState('')
  const [info, setInfo]       = useState(null)

  const submit = async () => {
    setBusy(true); setErr(''); setInfo(null)
    try {
      if (tab === 'login') {
        const tok = await login(email, password)
        setAccessToken(tok.access_token); setRefreshToken(tok.refresh_token)
        onReady()
      } else if (tab === 'register') {
        const r = await registerWithUser({
          business_name: bizName, contact_email: email, user_password: password,
        })
        setInfo({ apiKey: r.api_key, business: r.business?.name })
        // also log them in directly via JWT
        const tok = await login(email, password)
        setAccessToken(tok.access_token); setRefreshToken(tok.refresh_token)
      } else if (tab === 'apikey') {
        setApiKey(apiKey)
        await getMe()
        onReady()
      }
    } catch (e) {
      setErr(e.message)
    }
    setBusy(false)
  }

  const tabs = [
    { id: 'login',    label: 'Sign in' },
    { id: 'register', label: 'Register' },
    { id: 'apikey',   label: 'API key' },
  ]

  return (
    <div className="max-w-md mx-auto card-hover rounded-2xl p-8">
      <h2 className="text-[24px] font-bold text-white mb-2">TechScape</h2>
      <p className="text-[14px] text-white/55 mb-6">Workflow automation platform.</p>

      <div className="flex gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setErr('') }}
            className={`px-3 h-[30px] text-[12px] font-semibold rounded-md transition-colors ${
              tab === t.id ? 'btn-nav text-white' : 'text-white/55 hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'register' && (
        <>
          <label className="block text-[12px] text-white/55 mb-1">Business name</label>
          <input className="input-line mb-4" value={bizName}
                  onChange={(e) => setBizName(e.target.value)} placeholder="Acme Travel" />
        </>
      )}

      {(tab === 'login' || tab === 'register') && (
        <>
          <label className="block text-[12px] text-white/55 mb-1">Email</label>
          <input className="input-line mb-4" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="ops@acme.com" />
          <label className="block text-[12px] text-white/55 mb-1">Password</label>
          <input className="input-line mb-6" type="password" value={password}
                  onChange={(e) => setPwd(e.target.value)} />
        </>
      )}

      {tab === 'apikey' && (
        <>
          <label className="block text-[12px] text-white/55 mb-1">API key</label>
          <input className="input-line mb-6" value={apiKey}
                  onChange={(e) => setApiInput(e.target.value)} placeholder="tsk_..." />
        </>
      )}

      {err && <p className="text-[13px] text-red-400 mb-4">{err}</p>}
      {info?.apiKey && (
        <div className="mb-4 p-3 rounded-md" style={{ background: '#0A0A0A', border: '1px solid #2a2a2a' }}>
          <p className="text-[11px] text-white/55">Save this API key — it is shown once:</p>
          <p className="text-[12px] font-mono text-[#fad4bf] break-all">{info.apiKey}</p>
        </div>
      )}
      <button onClick={submit} disabled={busy}
              className="btn px-6 h-[44px] text-[14px] font-semibold text-white w-full">
        {busy ? 'Working…' : tab === 'register' ? 'Create account' : tab === 'login' ? 'Sign in' : 'Continue'}
      </button>
    </div>
  )
}

/* ── CreateWorkflowForm ────────────────────────────── */
function CreateWorkflowForm({ onCreated }) {
  const [name, setName]               = useState('Booking Confirmation Flow')
  const [trigger, setTrigger]         = useState('manual')
  const [actionType, setActionType]   = useState('send_email')
  const [content, setContent]         = useState('Hi {{client.name}}, your booking is confirmed.')
  const [subject, setSubject]         = useState('Booking confirmed')
  const [busy, setBusy]               = useState(false)

  const submit = async () => {
    setBusy(true)
    try {
      const wf = await createWorkflow({
        name, trigger_type: trigger,
        steps: [{
          step_number: 1, action_type: actionType,
          action_config: { content, subject },
        }],
      })
      onCreated(wf)
    } catch (e) { alert(e.message) }
    setBusy(false)
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-[12px] text-white/55 mb-1">Workflow name</label>
        <input className="input-line" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-[12px] text-white/55 mb-1">Trigger</label>
        <select className="select-line" value={trigger} onChange={(e) => setTrigger(e.target.value)}>
          {['manual', 'event_based', 'scheduled', 'api_triggered'].map((t) =>
            <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-[12px] text-white/55 mb-1">First-step action</label>
        <select className="select-line" value={actionType} onChange={(e) => setActionType(e.target.value)}>
          {ACTIONS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-[12px] text-white/55 mb-1">Subject (email only)</label>
        <input className="input-line" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-[12px] text-white/55 mb-1">Content (use {'{{client.name}}'} etc.)</label>
        <textarea className="input-line" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <button onClick={submit} disabled={busy} className="btn px-6 h-[40px] text-[13px] font-semibold text-white">
          {busy ? 'Creating…' : 'Create workflow'}
        </button>
      </div>
    </div>
  )
}

/* ── TriggerForm ───────────────────────────────────── */
function TriggerForm({ workflow, onTriggered }) {
  const [name, setName]   = useState('Demo Client')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [busy, setBusy]   = useState(false)
  const submit = async () => {
    setBusy(true)
    try {
      await triggerWorkflow(workflow.id, {
        trigger_data: {}, client_name: name, client_email: email || null, client_phone: phone || null,
      })
      onTriggered()
    } catch (e) { alert(e.message) }
    setBusy(false)
  }
  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="flex-1 min-w-[140px]">
        <label className="block text-[11px] text-white/40 mb-1">Client name</label>
        <input className="input-line" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex-1 min-w-[160px]">
        <label className="block text-[11px] text-white/40 mb-1">Email</label>
        <input className="input-line" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex-1 min-w-[140px]">
        <label className="block text-[11px] text-white/40 mb-1">Phone</label>
        <input className="input-line" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button onClick={submit} disabled={busy} className="btn px-4 h-[36px] text-[12px] font-semibold text-white">
        {busy ? '…' : 'Trigger'}
      </button>
    </div>
  )
}

/* ── AIPlayground ─────────────────────────────────── */
function AIPlayground() {
  const [tab, setTab]   = useState('message')
  const [out, setOut]   = useState(null)
  const [busy, setBusy] = useState(false)
  const [text, setText] = useState('Thanks, the trip was amazing!')
  const [scenario, setScenario] = useState('payment_reminder')
  const [channel, setChannel] = useState('email')
  const [convo, setConvo] = useState('user: Hi, can you cancel my booking?\nassistant: Sure — which one?')

  const run = async () => {
    setBusy(true); setOut(null)
    try {
      if (tab === 'message') {
        const r = await generateMessage({
          channel, context: scenario,
          client_data: { client_name: 'Jane', destination: 'Paris' },
          business_context: {}, tone: 'friendly_professional',
        })
        setOut(r)
      } else if (tab === 'template') {
        setOut(await generateTemplate(channel, scenario))
      } else if (tab === 'sentiment') {
        setOut(await analyzeSentiment(text))
      } else if (tab === 'intent') {
        setOut(await classifyIntent(text))
      } else if (tab === 'summary') {
        const messages = convo.split('\n').filter(Boolean).map((line) => {
          const [role, ...rest] = line.split(':')
          return { role: role.trim(), content: rest.join(':').trim() }
        })
        setOut(await summarizeConversation(messages))
      } else if (tab === 'optimize') {
        setOut(await optimizeWorkflow(null))
      }
    } catch (e) { alert(e.message) }
    setBusy(false)
  }

  const tabs = [
    ['message',   'Generate message'],
    ['template',  'Generate template'],
    ['sentiment', 'Sentiment'],
    ['intent',    'Intent'],
    ['summary',   'Summarise'],
    ['optimize',  'Optimise workflow'],
  ]

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            onClick={() => { setTab(id); setOut(null) }}
            className={`px-3 h-[28px] text-[11px] font-semibold rounded-md ${
              tab === id ? 'btn-nav text-white' : 'text-white/55 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {(tab === 'message' || tab === 'template') && (
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <select className="select-line" value={channel} onChange={(e) => setChannel(e.target.value)}>
            {CHANNELS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input className="input-line" value={scenario}
                  onChange={(e) => setScenario(e.target.value)} placeholder="scenario / context" />
        </div>
      )}

      {(tab === 'sentiment' || tab === 'intent') && (
        <textarea className="input-line mb-4" rows={2}
                  value={text} onChange={(e) => setText(e.target.value)} />
      )}

      {tab === 'summary' && (
        <textarea className="input-line mb-4" rows={4}
                  value={convo} onChange={(e) => setConvo(e.target.value)}
                  placeholder="role: text\nrole: text" />
      )}

      <button onClick={run} disabled={busy}
              className="btn px-4 h-[36px] text-[12px] font-semibold text-white mb-4">
        {busy ? 'Working…' : 'Run'}
      </button>

      {out && (
        <pre className="rounded-xl p-4 text-[12px] text-white/80 leading-relaxed whitespace-pre-wrap"
              style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
{JSON.stringify(out, null, 2)}
        </pre>
      )}
    </div>
  )
}

/* ── ContactsImport ───────────────────────────────── */
function ContactsImport({ onDone }) {
  const [busy, setBusy]     = useState(false)
  const [result, setResult] = useState(null)
  const upload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true); setResult(null)
    try {
      const r = await importContactsCsv(file)
      setResult(r); onDone?.()
    } catch (err) { alert(err.message) }
    setBusy(false)
    e.target.value = ''
  }
  return (
    <div>
      <p className="text-[13px] text-white/55 mb-3">
        Upload a CSV with columns <code>email</code>, <code>phone</code>, <code>name</code> (any subset).
      </p>
      <input type="file" accept=".csv,text/csv" onChange={upload}
              disabled={busy}
              className="text-[12px] text-white/70" />
      {result && (
        <p className="mt-3 text-[12px] text-white/55">
          Imported {result.imported} · skipped {result.skipped}
        </p>
      )}
    </div>
  )
}

/* ── Main page ────────────────────────────────────── */
export default function TechScapePage() {
  const [biz,      setBiz]       = useState(null)
  const [overview, setOverview]  = useState(null)
  const [wfs,      setWfs]       = useState([])
  const [execs,    setExecs]     = useState([])
  const [logs,     setLogs]      = useState([])
  const [creating, setCreating]  = useState(false)
  const [error,    setError]     = useState('')

  const refresh = async () => {
    try {
      const [me, ov, wfList, exList, logList] = await Promise.all([
        getMe(), analyticsOverview(), listWorkflows(), listExecutions(20), listCommunications(20),
      ])
      setBiz(me); setOverview(ov); setWfs(wfList); setExecs(exList); setLogs(logList); setError('')
    } catch (e) { setError(e.message) }
  }

  useEffect(() => { if (isAuthenticated()) refresh() }, [])

  if (!biz && !error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="w-full">
          <div className="text-center mb-10">
            <Link to="/" className="text-[13px] text-white/50 hover:text-white">&larr; Back to home</Link>
          </div>
          <AuthGate onReady={refresh} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[14px] font-bold text-white">TechScape</Link>
          <span className="text-[13px] text-white/40">/ Workflow Platform</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[12px] text-white/50">{biz?.name}</span>
          <button
            onClick={() => { signOut(); window.location.reload() }}
            className="text-[12px] text-white/50 hover:text-white"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="px-6 py-8 max-w-[1280px] mx-auto space-y-8">
        {error && <p className="text-[13px] text-red-400">{error}</p>}

        {overview && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <Stat label="Workflows"      value={overview.total_workflows} />
            <Stat label="Active"         value={overview.active_workflows} />
            <Stat label="Execs / 30d"    value={overview.total_executions_30d} />
            <Stat label="Messages / 30d" value={overview.total_messages_30d} />
            <Stat label="Cost / 30d"     value={`$${(overview.total_cost_30d || 0).toFixed(4)}`} />
            <Stat label="Delivery"       value={`${overview.delivery_rate}%`} />
          </div>
        )}

        <Card
          title="Workflows"
          action={
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  if (!confirm('Seed the 4 travel-agency workflows? This replaces any with the same names.')) return
                  try { await seedTravelDemo(); await refresh() } catch (e) { alert(e.message) }
                }}
                className="btn-nav px-3 h-[30px] text-[12px] font-semibold text-white"
              >
                Seed travel demo
              </button>
              <button onClick={() => setCreating((v) => !v)}
                      className="btn-nav px-3 h-[30px] text-[12px] font-semibold text-white">
                {creating ? 'Cancel' : '+ New'}
              </button>
            </div>
          }
        >
          {creating && (
            <div className="mb-6 pb-6 border-b border-white/10">
              <CreateWorkflowForm onCreated={() => { setCreating(false); refresh() }} />
            </div>
          )}
          {wfs.length === 0 && <p className="text-[13px] text-white/40">No workflows yet.</p>}
          <div className="space-y-3">
            {wfs.map((w) => (
              <div key={w.id} className="rounded-xl p-4"
                   style={{ background: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[15px] font-semibold text-white">{w.name}</p>
                    <p className="text-[11px] text-white/40">
                      {w.trigger_type} · {w.is_active ? 'active' : 'inactive'} · {w.execution_count} runs
                    </p>
                  </div>
                </div>
                <TriggerForm workflow={w} onTriggered={refresh} />
              </div>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card title="Recent executions">
            {execs.length === 0 && <p className="text-[13px] text-white/40">No executions yet.</p>}
            <div className="space-y-2">
              {execs.map((e) => (
                <div key={e.id} className="text-[13px] flex items-center justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-white/70">{e.client_name || e.client_email || '—'}</span>
                  <span className="text-white/40">{e.execution_status}</span>
                  <span className="text-white/40">${(e.total_cost || 0).toFixed(4)}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Recent communications">
            {logs.length === 0 && <p className="text-[13px] text-white/40">No messages sent yet.</p>}
            <div className="space-y-2">
              {logs.map((l) => (
                <div key={l.id} className="text-[13px] flex items-center justify-between py-1 border-b border-white/[0.05]">
                  <span className="text-white/70">{l.channel}</span>
                  <span className="text-white/40 truncate max-w-[180px]">{l.recipient_email || l.recipient_phone}</span>
                  <span className="text-white/40">{l.delivery_status}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card title="Bulk import contacts (CSV)">
          <ContactsImport onDone={refresh} />
        </Card>

        <Card title="AI playground">
          <AIPlayground />
        </Card>
      </main>
    </div>
  )
}
