export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">How it works</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Three steps to go live</h2>
        </div>
        <p className="max-w-md text-sm text-gray-400">
          Tell us what you want, pay with USDC, and we activate it on your behalf.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[{
          title: 'Pick a platform',
          desc: 'Choose X or Replit and select a plan.'
        }, {
          title: 'Pay on Base',
          desc: 'Send USDC on Base (Ethereum L2) with low fees.'
        }, {
          title: 'We fulfill it',
          desc: 'We run the activation and confirm back to you.'
        }].map((step, i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-300/40 hover:bg-white/10">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">Step {i + 1}</div>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
