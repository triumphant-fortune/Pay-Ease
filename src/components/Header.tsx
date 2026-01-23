import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(212,175,55,0.8)]" />
          Subzero
          <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-amber-200">
            Base
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <Link href="/subscribe">Start</Link>
          <a href="#how">How it works</a>
          <a href="#platforms">Platforms</a>
        </nav>
        <Link href="/subscribe" className="px-4 py-2 rounded-xl bg-amber-300 text-black text-sm font-semibold shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
          Start now
        </Link>
      </div>
    </header>
  )
}
