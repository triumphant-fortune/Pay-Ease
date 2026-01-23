import './globals.css'

export const metadata = {
  title: 'Subzero — Pay for Subscriptions with USDC on Base',
  description: 'Global subscriptions without cards or banks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
