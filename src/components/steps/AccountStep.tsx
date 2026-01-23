'use client'

import { useState } from 'react'

export default function AccountStep({
  platform,
  onBack,
  onNext,
}: {
  platform: 'x' | 'replit'
  onBack: () => void
  onNext: (accountIdentifier: string) => void
}) {
  const [value, setValue] = useState('')

  return (
    <div>
      <h2 className="text-2xl font-semibold">Enter your account</h2>
      <p className="mt-2 text-sm text-gray-400">
        {platform === 'x'
          ? 'Enter your X username or email.'
          : 'Enter the email associated with your Replit account.'}
      </p>

      <label className="mt-6 block text-xs uppercase tracking-[0.3em] text-gray-500">
        Account identifier
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={platform === 'x' ? '@username or email' : 'email@example.com'}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-500 focus:border-amber-300/50 focus:outline-none"
      />
      <p className="mt-3 text-xs text-gray-500">
        We only use this to activate your subscription and send confirmation.
      </p>

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="text-sm text-gray-400 hover:text-white">
          ← Back
        </button>
        <button
          disabled={!value}
          onClick={() => onNext(value)}
          className="rounded-xl bg-amber-300 px-6 py-2 font-semibold text-black disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
