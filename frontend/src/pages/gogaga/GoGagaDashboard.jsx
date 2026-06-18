import { useState, useEffect } from 'react'

const STAGES = ['new','engaged','qualified','proposal','booked']
const STAGE_COLORS = {
  new: '#60A5FA',
  engaged: '#F59E0B',
  qualified: '#A78BFA',
  proposal: '#34D399',
  booked: '#10B981'
}

const MOCK_LEADS = [
  { id:1, name:'Priya Sharma', stage:'new', destination:'Kerala', budget_max:60000, created_at: new Date().toISOString() },
  { id:2, name:'Rahul Gupta', stage:'engaged', destination:'Bali', budget_max:120000, created_at: new Date().toISOString() },
  { id:3, name:'Kavya Nair', stage:'engaged', destination:'Dubai', budget_max:80000, created_at: new Date().toISOString() },
  { id:4, name:'Amit Singh', stage:'qualified', destination:'Thailand', budget_max:150000, created_at: new Date().toISOString() },
  { id:5, name:'Vikram Joshi', stage:'proposal', destination:'Maldives', budget_max:280000, created_at: new Date().toISOString() },
  { id:6, name:'Anita Verma', stage:'booked', destination:'Kerala', budget_max:58000, created_at: new Date().toISOString() },
  { id:7, name:'Suresh Pillai', stage:'booked', destination:'Goa', budget_max:44000, created_at: new Date().toISOString() },
]

export default function GoGagaDashboard() {
  const [leads, setLeads] = useState(MOCK_LEADS)

  const byStage = (stage) => leads.filter(l => l.stage === stage)
  const total = leads.length
  const aiHandled = leads.filter(l => l.stage !== 'new').length
  const booked = leads.filter(l => l.stage === 'booked').length

  return (
    <div style={{ display:'flex', height:'100vh', background:'#0A0F1E', color:'#fff', fontFamily:'-apple-system,sans-serif' }}>

      {/* Sidebar */}
      <div style={{ width:220, background:'#0D1426', borderRight:'1px solid rgba(255,255,255,0.07)', display:'flex', flexDirection:'column', padding:'20px 0' }}>
        <div style={{ padding:'0 20px 24px', borderBottom:'1px solid rgba(255,255,255,0.07)', marginBottom:16 }}>
          <div style={{ fontSize:18, fontWeight:700 }}>GoGaga</div>
          <div style={{ fontSize:11, color:'#F7BFA0' }}>AI Concierge · Admin</div>
        </div>
        {[
          { icon:'⚡', label:'Command Center', active:true },
          { icon:'👥', label:'Lead Pipeline' },
          { icon:'💬', label:'Conversations' },
          { icon:'🗺️', label:'Trip View' },
          { icon:'🚨', label:'Alert Center' },
          { icon:'📊', label:'Analytics' },
          { icon:'🏪', label:'Franchisees' },
        ].map((item) => (
          <div key={item.label} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'10px 20px', fontSize:13,
            color: item.active ? '#fff' : 'rgba(255,255,255,0.5)',
            background: item.active ? 'rgba(200,120,80,0.12)' : 'transparent',
            borderLeft: item.active ? '2px solid #C87850' : '2px solid transparent',
            cursor:'pointer'
          }}>
            <span>{item.icon}</span>{item.label}
          </div>
        ))}
        <div style={{ marginTop:'auto', padding:'16px 20px', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:32, height:32, borderRadius:'50%', background:'linear-gradient(135deg,#C87850,#1C6DD0)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700 }}>GH</div>
            <div>
              <div style={{ fontSize:12, fontWeight:600 }}>GoGaga HQ</div>
              <div style={{ fontSize:10, color:'rgba(255,255,255,0.35)' }}>Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex:1, overflow:'auto' }}>

        {/* Topbar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 24px', borderBottom:'1px solid rgba(255,255,255,0.07)', background:'#0D1426' }}>
          <div style={{ fontSize:16, fontWeight:600 }}>Command Center</div>
          <div style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(16,185,129,0.12)', border:'1px solid rgba(16,185,129,0.25)', borderRadius:20, padding:'5px 12px', fontSize:12, color:'#10B981' }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#10B981' }}></div>
            Live
          </div>
        </div>

        <div style={{ padding:24 }}>

          {/* Metrics */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:24 }}>
            {[
              { label:'Total Leads', value:total, sub:'All time', color:'#60A5FA' },
              { label:'AI Handled', value:aiHandled, sub:`${total ? Math.round(aiHandled/total*100) : 0}% automation`, color:'#A78BFA' },
              { label:'Bookings', value:booked, sub:'Confirmed', color:'#F7BFA0' },
              { label:'Avg Response', value:'8s', sub:'Was 4hrs manually', color:'#34D399' },
            ].map(m => (
              <div key={m.label} style={{ background:'#0D1426', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, padding:18 }}>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.6px', marginBottom:8 }}>{m.label}</div>
                <div style={{ fontSize:28, fontWeight:700, color:m.color, marginBottom:4 }}>{m.value}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          <div style={{ background:'#0D1426', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, padding:20, marginBottom:24 }}>
            <div style={{ fontSize:14, fontWeight:600, marginBottom:16 }}>Lead Pipeline — Live</div>
            <div style={{ display:'flex', gap:12, overflowX:'auto', paddingBottom:8 }}>
              {STAGES.map(stage => (
                <div key={stage} style={{ minWidth:180, flexShrink:0 }}>
                  <div style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.6px', color:STAGE_COLORS[stage], marginBottom:10, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    {stage}
                    <span style={{ background:'rgba(255,255,255,0.08)', borderRadius:10, padding:'2px 7px', fontSize:11, color:'rgba(255,255,255,0.5)' }}>{byStage(stage).length}</span>
                  </div>
                  {byStage(stage).length === 0 && (
                    <div style={{ background:'rgba(255,255,255,0.02)', border:'1px dashed rgba(255,255,255,0.08)', borderRadius:12, padding:16, textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.2)' }}>Empty</div>
                  )}
                  {byStage(stage).map(lead => (
                    <div key={lead.id} style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${lead.stage === 'booked' ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.07)'}`, borderRadius:12, padding:12, marginBottom:8, cursor:'pointer' }}>
                      <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>{lead.name}</div>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', marginBottom:6 }}>{lead.destination}</div>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ fontSize:11, color: lead.stage === 'booked' ? '#34D399' : '#F7BFA0', fontWeight:600 }}>
                          {lead.stage === 'booked' ? '✓ ' : ''}₹{(lead.budget_max/1000).toFixed(0)}K
                        </span>
                        <span style={{ fontSize:10, color:'rgba(255,255,255,0.25)' }}>
                          {new Date(lead.created_at).toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Alert Center */}
          <div style={{ background:'#0D1426', border:'1px solid rgba(255,255,255,0.08)', borderRadius:16, padding:20 }}>
            <div style={{ fontSize:14, fontWeight:600, marginBottom:16 }}>Alert Center</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {[
                { type:'p1', color:'rgba(239,68,68,0.08)', border:'rgba(239,68,68,0.2)', text:'rgba(252,165,165,1)', msg:'P1: Deepa Iyer — visa rejection received', icon:'🚨' },
                { type:'p1', color:'rgba(239,68,68,0.08)', border:'rgba(239,68,68,0.2)', text:'rgba(252,165,165,1)', msg:'P1: Suresh flight 2h delayed — rebooking triggered', icon:'✈️' },
                { type:'p2', color:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.2)', text:'rgba(252,211,77,1)', msg:'5 leads no response 24hrs — follow-up sent', icon:'⏰' },
                { type:'ok', color:'rgba(16,185,129,0.08)', border:'rgba(16,185,129,0.2)', text:'rgba(110,231,183,1)', msg:'Vikram Maldives — supplier confirmed ✓', icon:'✅' },
              ].map((alert, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10, background:alert.color, border:`1px solid ${alert.border}`, fontSize:12, color:alert.text }}>
                  <span>{alert.icon}</span>{alert.msg}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        ::-webkit-scrollbar { width:4px; height:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:2px; }
      `}</style>
    </div>
  )
}
