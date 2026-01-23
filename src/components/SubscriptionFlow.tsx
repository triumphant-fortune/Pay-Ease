'use client'

import { useState } from 'react'
import PlatformStep from './steps/PlatformStep'
import PlanStep from './steps/PlanStep'
import AccountStep from './steps/AccountStep'
import PaymentStep from './steps/PaymentStep'
import SuccessStep from './steps/SuccessStep'

export type SubscriptionState = {
  platform: 'x' | 'replit' | null
  plan: 'monthly' | 'yearly' | null
  accountIdentifier: string
  txHash?: string
}

export default function SubscriptionFlow() {
  const [step, setStep] = useState(0)
  const [state, setState] = useState<SubscriptionState>({
    platform: null,
    plan: null,
    accountIdentifier: '',
  })
  const steps = ['Platform', 'Plan', 'Account', 'Payment', 'Done']

  return (
    <div className="rise-in w-full max-w-xl rounded-3xl border border-white/10 bg-black/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
        <span>Subscription flow</span>
        <span>{step + 1} / {steps.length}</span>
      </div>
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex-1">
            <div className={`h-1.5 rounded-full ${i <= step ? 'bg-emerald-400' : 'bg-white/10'}`} />
            <div className={`mt-2 text-[11px] ${i === step ? 'text-white' : 'text-gray-500'}`}>
              {label}
            </div>
          </div>
        ))}
      </div>
      {step === 0 && (
        <PlatformStep
          onNext={(platform) => {
            setState((s) => ({ ...s, platform }))
            setStep(1)
          }}
        />
      )}

      {step === 1 && (
        <PlanStep
          platform={state.platform!}
          onBack={() => setStep(0)}
          onNext={(plan) => {
            setState((s) => ({ ...s, plan }))
            setStep(2)
          }}
        />
      )}

      {step === 2 && (
        <AccountStep
          platform={state.platform!}
          onBack={() => setStep(1)}
          onNext={(accountIdentifier) => {
            setState((s) => ({ ...s, accountIdentifier }))
            setStep(3)
          }}
        />
      )}

      {step === 3 && (
        <PaymentStep
          state={state}
          onBack={() => setStep(2)}
          onSuccess={(txHash) => {
            setState((s) => ({ ...s, txHash }))
            setStep(4)
          }}
        />
      )}

      {step === 4 && <SuccessStep state={state} />}
    </div>
  )
}
