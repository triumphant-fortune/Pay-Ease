'use client'

import { useEffect, useMemo, useState } from 'react'
import { SubscriptionState } from '../SubscriptionFlow'

export default function SuccessStep({ state }: { state: SubscriptionState }) {
  const [secondsLeft, setSecondsLeft] = useState(600)
  const [copied, setCopied] = useState<'number' | 'expiry' | 'cvv' | null>(null)

  const cardNumber = '4342 2219 6012 8820'
  const cardExpiry = '12/30'
  const cardCvv = '632'

  const maskedNumber = useMemo(() => {
    const parts = cardNumber.split(' ')
    return parts.map((p, i) => (i < parts.length - 1 ? '••••' : p)).join(' ')
  }, [cardNumber])

  useEffect(() => {
    if (secondsLeft <= 0) return
    const timer = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [secondsLeft])

  const formatTimer = (total: number) => {
    const m = Math.floor(total / 60)
    const s = total % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const copyToClipboard = async (value: string, key: 'number' | 'expiry' | 'cvv') => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      setTimeout(() => setCopied(null), 1500)
    } catch {
      setCopied(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gray-400">Payment success</div>
        <h2 className="mt-3 text-2xl font-semibold">Complete your subscription</h2>
        <p className="mt-2 text-sm text-gray-400">
          Use the secure card below to finish checkout on {state.platform === 'x' ? 'X Premium' : 'Replit'}.
          This card is generated only for this payment.
        </p>

        <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-gray-300 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Single‑use card
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
            Locked to {state.platform === 'x' ? 'x.com' : 'replit.com'}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-300" />
            Auto‑expires
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0f1f] via-[#111827] to-[#1e293b] p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span>Virtual card</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px]">
              Expires in {formatTimer(secondsLeft)}
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold text-white">PayEase Secure</div>
              <div className="mt-1 text-xs text-gray-400">Base Network</div>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-white/10" />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-xl font-semibold tracking-[0.2em] text-white">
              {maskedNumber}
            </div>
            <button
              onClick={() => copyToClipboard(cardNumber, 'number')}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white"
            >
              {copied === 'number' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-gray-300">
            <div>
              <div className="text-[10px] uppercase text-gray-500">Cardholder</div>
              {state.accountIdentifier || 'Your account'}
            </div>
            <div>
              <div className="text-[10px] uppercase text-gray-500">Valid thru</div>
              <div className="mt-1 flex items-center gap-2">
                <span>{cardExpiry}</span>
                <button
                  onClick={() => copyToClipboard(cardExpiry, 'expiry')}
                  className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white"
                >
                  {copied === 'expiry' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-gray-500">CVV</div>
              <div className="mt-1 flex items-center gap-2">
                <span>{cardCvv}</span>
                <button
                  onClick={() => copyToClipboard(cardCvv, 'cvv')}
                  className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] text-white"
                >
                  {copied === 'cvv' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
            <span>Card is locked to {state.platform === 'x' ? 'x.com' : 'replit.com'}</span>
            <span className="font-semibold text-white">PayEase</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">How to use this card</h3>
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          <li>Open {state.platform === 'x' ? 'x.com' : 'replit.com'} and go to checkout.</li>
          <li>Enter the card details above.</li>
          <li>Complete payment before the card expires.</li>
        </ul>
        <div className="mt-4 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-3 text-xs text-amber-100">
          This card expires after one use or in {formatTimer(secondsLeft)}.
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Payment summary</h3>
        <div className="mt-4 grid gap-3 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Account</span>
            <span className="font-semibold text-white truncate max-w-[200px]">
              {state.accountIdentifier}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Plan</span>
            <span className="font-semibold text-white">{state.plan}</span>
          </div>
          <div className="flex justify-between">
            <span>Network</span>
            <span className="font-semibold text-white">Base (Ethereum)</span>
          </div>
          <div className="flex justify-between">
            <span>Transaction</span>
            <span className="font-semibold text-white truncate max-w-[200px]">
              {state.txHash}
            </span>
          </div>
        </div>
        <button className="mt-6 w-full rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-black shadow-[0_12px_35px_rgba(52,211,153,0.3)]">
          Continue
        </button>
      </div>
    </div>
  )
}
