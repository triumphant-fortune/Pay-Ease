import Link from 'next/link'

export default function CTA() {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to activate your subscription?</h2>
      <p className="mt-4 text-gray-400">
        No cards. No banks. Just USDC on Base → subscription.
      </p>
      <Link href="/subscribe" className="mt-8 inline-block px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold">
        Start now
      </Link>
    </section>
  )
}
