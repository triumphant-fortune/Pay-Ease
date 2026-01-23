'use client'

export default function PlatformStep({ onNext }: { onNext: (p: 'x' | 'replit') => void }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Choose a platform</h2>
      <p className="mt-2 text-sm text-gray-400">Pick the service you want us to activate for you.</p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <button
          onClick={() => onNext('x')}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-amber-300/60 hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">X (Twitter) Blue</div>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200">
              Live
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-400">Verified badge + premium features</div>
        </button>

        <button
          onClick={() => onNext('replit')}
          disabled
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left opacity-60"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Replit</div>
            <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-xs text-gray-300">
              Coming soon
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-400">Developer tools and hosting</div>
        </button>
      </div>
    </div>
  )
}
