export default function Platforms() {
  return (
    <section id="platforms" className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/50 p-8 md:p-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Platforms</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Start with the most common subscriptions</h2>
          </div>
          <p className="max-w-sm text-sm text-gray-400">
            More services are rolling out weekly. Want one? Tell us.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl font-semibold">X</div>
            <p className="mt-2 text-sm text-gray-400">Blue subscriptions with monthly or yearly billing.</p>
            <div className="mt-4 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              Live
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl font-semibold">Replit</div>
            <p className="mt-2 text-sm text-gray-400">Pay for developer tools and hosting globally.</p>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-300">
              Coming soon
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-2xl font-semibold">Your request</div>
            <p className="mt-2 text-sm text-gray-400">Drop a suggestion and we’ll prioritize it.</p>
            <div className="mt-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
              Vote
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
