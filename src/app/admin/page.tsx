'use client'

import { useEffect, useState } from 'react'

type WaitlistEntry = {
  _id: string
  email: string
  useCase: string
  location: string
  createdAt: string
}

export default function AdminPage() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'
  const adminPassword =
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'payease@2026#'
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem('payease_admin_authed')
    if (saved === 'true') {
      setAuthed(true)
    }
  }, [])

  useEffect(() => {
    if (!authed) {
      setLoading(false)
      return
    }

    const fetchEntries = async () => {
      try {
        const res = await fetch(`${apiBaseUrl}/api/waitlist`, {
          headers: { 'x-admin-password': adminPassword },
        })
        if (!res.ok) {
          throw new Error('Unable to load waitlist.')
        }
        const data = await res.json()
        setEntries(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load waitlist.')
      } finally {
        setLoading(false)
      }
    }

    fetchEntries()
  }, [apiBaseUrl, adminPassword, authed])

  const handleLogin = () => {
    if (password === adminPassword) {
      sessionStorage.setItem('payease_admin_authed', 'true')
      setAuthed(true)
      setError(null)
      setLoading(true)
    } else {
      setError('Invalid password.')
    }
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Admin</p>
            <h1 className="mt-3 text-3xl md:text-4xl">Waitlist signups</h1>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
            Total: {entries.length}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          {!authed && (
            <div className="max-w-md space-y-4">
              <p className="text-sm text-gray-400">Enter the admin password to view the waitlist.</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-300/50 focus:outline-none"
              />
              <button
                onClick={handleLogin}
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black"
              >
                Unlock
              </button>
            </div>
          )}
          {loading && <p className="text-sm text-gray-400">Loading waitlist...</p>}
          {error && <p className="text-sm text-red-300">{error}</p>}

          {!loading && !error && authed && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-gray-500">
                    <th className="py-3 pr-4">Email</th>
                    <th className="py-3 pr-4">Use case</th>
                    <th className="py-3 pr-4">Location</th>
                    <th className="py-3">Signed up</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry) => (
                    <tr key={entry._id} className="border-b border-white/5">
                      <td className="py-3 pr-4 font-medium text-white">{entry.email}</td>
                      <td className="py-3 pr-4">{entry.useCase}</td>
                      <td className="py-3 pr-4">{entry.location}</td>
                      <td className="py-3 text-gray-400">
                        {new Date(entry.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
