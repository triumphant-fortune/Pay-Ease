import './globals.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

export const metadata = {
  title: 'Subzero — Pay for Subscriptions with USDC',
  description: 'Global subscriptions without cards or banks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const endpoint = clusterApiUrl('mainnet-beta')
  const wallets = [new PhantomWalletAdapter()]

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  )
}
