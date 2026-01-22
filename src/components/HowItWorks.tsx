export default function HowItWorks() {
  return (
    <section id="how" className="px-6 py-16 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
      {[{
        title: 'Choose your subscription',
        desc: 'Select the platform and plan you want.'
      }, {
        title: 'Pay with USDC',
        desc: 'Connect your wallet and send USDC on Solana.'
      }, {
        title: 'Get activated',
        desc: 'We handle the rest. Your subscription goes live.'
      }].map((step, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-indigo-400 font-semibold mb-2">Step {i + 1}</div>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-gray-400 text-sm">{step.desc}</p>
        </div>
      ))}
    </section>
  )
}
