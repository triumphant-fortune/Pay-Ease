import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <Link href="/" className="text-xl font-bold">Subzero</Link>
      <nav className="hidden md:flex gap-6 text-sm text-gray-300">
        <Link href="/subscribe">Start</Link>
        <a href="#how">How it works</a>
        <a href="#platforms">Platforms</a>
      </nav>
      <Link href="/subscribe" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold">
        Start
      </Link>
    </header>
  )
}
