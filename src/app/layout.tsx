import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Fraunces, Space_Grotesk } from 'next/font/google'
import Web3Provider from '@/components/Web3Provider'

export const metadata = {
  title: 'PayEase — Subscriptions with USDC on Base',
  description: 'Activate global subscriptions without cards or banks.',
}

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
})

const text = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-text',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${text.variable} bg-[#07080b] text-white antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a,transparent_55%)]" />
          <div className="absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,#d4af37,transparent_70%)] opacity-35 blur-2xl" />
          <div className="absolute top-[35%] left-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,#1e3a8a,transparent_70%)] opacity-35 blur-2xl" />
          <div className="absolute bottom-[-20%] right-[5%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,#0f766e,transparent_70%)] opacity-25 blur-3xl" />
          <div className="absolute inset-0 opacity-25 mix-blend-soft-light [background-image:repeating-linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_1px,transparent_6px)]" />
        </div>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  )
}
