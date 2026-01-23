'use client'

export default function PlanStep({
  platform,
  onBack,
  onNext,
}: {
  platform: 'x' | 'replit'
  onBack: () => void
  onNext: (plan: 'monthly' | 'yearly') => void
}) {
  const priceMap = {
    x: { monthly: 8, yearly: 84 },
    replit: { monthly: 20, yearly: 180 },
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">Choose a plan</h2>
      <p className="mt-2 text-sm text-gray-400">
        Billing frequency for {platform === 'x' ? 'X Blue' : 'Replit'}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <button
          onClick={() => onNext('monthly')}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-amber-300/50 hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Monthly</div>
            <div className="text-sm text-gray-300">{priceMap[platform].monthly} USDC</div>
          </div>
          <div className="mt-2 text-sm text-gray-400">Pay month-to-month</div>
        </button>

        <button
          onClick={() => onNext('yearly')}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-amber-300/50 hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Yearly</div>
            <div className="text-sm text-gray-300">{priceMap[platform].yearly} USDC</div>
          </div>
          <div className="mt-2 text-sm text-gray-400">Save with annual billing</div>
          <div className="mt-3 inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200">
            Best value
          </div>
        </button>
      </div>

      <button onClick={onBack} className="mt-6 text-sm text-gray-400 hover:text-white">
        ← Back
      </button>
    </div>
  )
}
