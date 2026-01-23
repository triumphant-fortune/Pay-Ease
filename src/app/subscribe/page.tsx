'use client'

import SubscriptionFlow from '@/components/SubscriptionFlow'

export default function SubscribePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Checkout</p>
          <h1 className="mt-4 text-3xl md:text-4xl">Activate your subscription</h1>
          <p className="mt-4 text-sm text-gray-300">
            Pay in USDC on Base and we’ll complete the activation for you. No card required.
          </p>
          <div className="mt-8 space-y-4 text-sm text-gray-400">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500">What you need</div>
              <div className="mt-3 space-y-2">
                <div>• Your account username or email</div>
                <div>• USDC on Base</div>
                <div>• 1 minute to finish</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500">We handle</div>
              <div className="mt-3 space-y-2">
                <div>• Subscription activation</div>
                <div>• Confirmation email</div>
                <div>• Ongoing renewal support</div>
              </div>
            </div>
          </div>
        </div>
        <SubscriptionFlow />
      </div>
    </main>
  )
}
