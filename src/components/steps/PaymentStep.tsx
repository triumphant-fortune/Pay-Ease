'use client'

import { useState } from 'react'
import { useAccount, useSwitchChain, useWriteContract } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { erc20Abi, parseUnits } from 'viem'
import { SubscriptionState } from '../SubscriptionFlow'

export default function PaymentStep({
  state,
  onBack,
  onSuccess,
}: {
  state: SubscriptionState
  onBack: () => void
  onSuccess: (txHash: string) => void
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { address, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const { writeContractAsync } = useWriteContract()
  const { switchChainAsync } = useSwitchChain()
  const baseSepoliaId = 84532

  const priceMap = {
    x: { monthly: 8, yearly: 84 },
    replit: { monthly: 20, yearly: 180 },
  }

  const amount = priceMap[state.platform!][state.plan!]

  const handlePay = async () => {
    try {
      setLoading(true)
      setError(null)

      if (!isConnected) {
        if (openConnectModal) {
          openConnectModal()
        } else {
          throw new Error('Wallet modal unavailable.')
        }
        setLoading(false)
        return
      }

      try {
        await switchChainAsync({ chainId: baseSepoliaId })
      } catch {
        setLoading(false)
        setError('Please switch your wallet to Base Sepolia and try again.')
        return
      }

      const usdcContract = process.env.NEXT_PUBLIC_USDC_CONTRACT
      const payeaseWallet = process.env.NEXT_PUBLIC_PAYEASE_WALLET

      if (!usdcContract || !payeaseWallet) {
        throw new Error('Missing USDC contract or PayEase wallet address.')
      }

      const txHash = await writeContractAsync({
        address: usdcContract as `0x${string}`,
        abi: erc20Abi,
        functionName: 'transfer',
        args: [payeaseWallet as `0x${string}`, parseUnits(String(amount), 6)],
      })

      onSuccess(txHash)
    } catch (e) {
      setError('Payment failed or pending. Check your wallet for a confirmation request.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">Confirm & Pay</h2>
      <p className="mt-2 text-sm text-gray-400">Review your details and pay with USDC on Base.</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
        <div className="flex justify-between mb-2">
          <span>Platform</span>
          <span className="font-semibold">
            {state.platform === 'x' ? 'X Blue' : 'Replit'}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Plan</span>
          <span className="font-semibold">{state.plan}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Account</span>
          <span className="font-semibold truncate max-w-[200px]">
            {state.accountIdentifier}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Network</span>
          <span className="font-semibold">Base (Ethereum)</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-semibold text-amber-200">{amount} USDC</span>
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <div className="mt-6 flex justify-between items-center">
        <button onClick={onBack} className="text-sm text-gray-400 hover:text-white">
          ← Back
        </button>
        <button
          onClick={handlePay}
          disabled={loading}
          className="rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-black shadow-[0_12px_35px_rgba(52,211,153,0.3)] disabled:opacity-50"
        >
          {loading ? 'Processing...' : isConnected ? 'Pay with USDC' : 'Connect Wallet'}
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center">
        We’ll confirm your USDC transfer on Base and activate the subscription.
      </p>
    </div>
  )
}
