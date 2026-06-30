/* Stand-in for admin sections that don't have a screen yet.
   Pass a title; keeps the menu fully navigable on brand. */
export default function AdminPlaceholder({ title }) {
  return (
    <div className="mx-auto max-w-[1280px]">
      <h1 className="text-[26px] sm:text-[30px] font-extrabold tracking-tight">{title}</h1>
      <div className="mt-6 grid place-items-center rounded-[18px] border border-dashed border-[#2a2a2a] bg-[#0D0D0D] px-6 py-20 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-[14px] grad text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" />
          </svg>
        </span>
        <h2 className="mt-5 text-[18px] font-bold">{title} coming soon</h2>
        <p className="mt-2 max-w-md text-[14px] text-white/50">
          This section is wired up and ready. Hook it to the backend endpoint to start managing {title.toLowerCase()}.
        </p>
      </div>
    </div>
  )
}
