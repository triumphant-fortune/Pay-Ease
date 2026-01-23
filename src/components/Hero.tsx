'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [location, setLocation] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const submitWaitlist = async () => {
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${apiBaseUrl}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, useCase, location }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Unable to join waitlist')
      }

      setStatus('success')
      setEmail('')
      setUseCase('')
      setLocation('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Unable to join waitlist')
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div className="rise-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100">
          No cards. No banks.
        </div>
        <h1 className="mt-6 text-4xl leading-tight md:text-6xl">
          We’re building the way to subscribe globally,
          <span className="block text-amber-200">pay once in USDC on Base.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-gray-300 md:text-lg">
          PayEase will let anyone activate subscriptions even when cards fail. Join the waitlist to get early access.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#waitlist" className="rounded-xl bg-amber-300 px-7 py-4 text-center font-semibold text-black shadow-[0_12px_35px_rgba(212,175,55,0.35)]">
            Join waitlist
          </a>
          <Link href="/subscribe" className="rounded-xl border border-white/20 px-7 py-4 text-center text-white/90">
            Launch demo
          </Link>
        </div>
        <div id="waitlist" className="mt-8 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs uppercase tracking-[0.3em] text-gray-400">Waitlist</div>
          <div className="mt-4 grid gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-300/50 focus:outline-none"
            />
            <input
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              placeholder="What do you want to subscribe to?"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-300/50 focus:outline-none"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Country"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-300/50 focus:outline-none"
            />
            <button
              onClick={submitWaitlist}
              disabled={!email || !useCase || !location || status === 'loading'}
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Request access'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-3 text-xs text-emerald-300">
              You’re on the list! We’ll email you when early access opens.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-xs text-red-300">
              {errorMsg || 'Something went wrong. Try again.'}
            </p>
          )}
        </div>
        <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm text-gray-400">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xl font-semibold text-white">60s</div>
            <div className="mt-1">Avg. setup</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xl font-semibold text-white">USDC</div>
            <div className="mt-1">Stable pricing</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xl font-semibold text-white">Base</div>
            <div className="mt-1">Low fees</div>
          </div>
        </div>
      </div>
      <div className="float-slow rounded-3xl border border-white/10 bg-black/60 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Checkout preview</span>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200">Live</span>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Platform</span>
              <span className="font-semibold text-white">X Blue</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Plan</span>
              <span className="font-semibold text-white">Monthly</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Network</span>
              <span className="font-semibold text-white">Base (Ethereum)</span>
            </div>
            <div className="flex items-center justify-between text-base">
              <span className="text-gray-200">Total</span>
              <span className="font-semibold text-amber-200">8 USDC</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-xl bg-emerald-400 py-3 font-semibold text-black">
            Pay & activate
          </button>
        </div>
      </div>
    </section>
  )
}
