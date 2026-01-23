import Link from 'next/link'

export default function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center md:p-14">
        <h2 className="text-3xl md:text-4xl">Ready to activate your subscription?</h2>
        <p className="mt-4 text-gray-300">
          Pay once in USDC on Base. We handle the activation and confirmation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/subscribe" className="rounded-xl bg-emerald-400 px-8 py-4 font-semibold text-black shadow-[0_12px_35px_rgba(52,211,153,0.3)]">
            Start now
          </Link>
          <a href="#platforms" className="rounded-xl border border-white/20 px-8 py-4 text-white/90">
            View platforms
          </a>
        </div>
      </div>
    </section>
  )
}
