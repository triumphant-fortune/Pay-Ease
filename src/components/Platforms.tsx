export default function Platforms() {
  return (
    <section id="platforms" className="px-6 py-16 bg-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Supported platforms</h2>
        <p className="mt-4 text-gray-400">Start with the most common subscriptions.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-black">
            <h3 className="text-lg font-semibold">X (Twitter) Blue</h3>
            <p className="mt-2 text-sm text-gray-400">Monthly and yearly plans supported.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-black">
            <h3 className="text-lg font-semibold">Replit</h3>
            <p className="mt-2 text-sm text-gray-400">Pay for developer tools globally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
