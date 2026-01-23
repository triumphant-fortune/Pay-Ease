import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-6 py-20 text-center max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Subscriptions without cards.<br />
        <span className="text-indigo-500">Powered by USDC on Base.</span>
      </h1>
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Pay for global subscriptions even when your card doesn’t work. No banks. No crypto complexity.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/subscribe" className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold">
          Start Subscription
        </Link>
        <a href="#how" className="px-8 py-4 rounded-xl border border-white/20 text-white">
          How it works
        </a>
      </div>
    </section>
  )
}
