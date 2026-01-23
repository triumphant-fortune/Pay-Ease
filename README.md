# PayEase

PayEase lets users activate subscriptions without credit cards by paying in USDC on Base (Ethereum).

## Overview

- Non-custodial payment bridge for X Premium and similar subscriptions.
- Users pay USDC on Base and receive a single-use virtual card locked to the merchant domain.
- No passwords collected. Users complete checkout themselves.
- Payments are off-ramped via Kotani and fiat funds card issuance.
- Waitlist capture with a simple admin view.

## User flow

1. User selects platform and plan (e.g., X Premium $8).
2. User pays $10 USDC on Base (includes $2 convenience fee).
3. Backend verifies payment, off-ramps via Kotani, funds card issuer (Bridgecard).
4. User receives a single-use card (number, expiry, CVV) locked to the merchant.
5. User completes checkout directly on the merchant site.

## Features

- Wallet connect (wagmi + RainbowKit) on Base Sepolia for demo payments.
- One-time card reveal with expiry countdown and copy-to-clipboard.
- Waitlist form + admin list view.

Supported platform right now: X (Twitter) Blue.

## Tech stack

Frontend
- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- wagmi + RainbowKit (Base Sepolia wallet connect)

Backend
- Node.js + Express
- MongoDB (Mongoose)
- Kotani Pay API
- Node-cron for polling

## Project structure

- `src/` - Next.js frontend
- `backend/` - Express API + payment services

## Getting started

### 1) Install dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd backend
npm install
```

### 2) Configure environment variables

Create a `.env` in `backend/` (do not commit secrets):

```bash
# Kotani
KOTANI_BASE_URL=https://sandbox-api.kotanipay.io/v3
KOTANI_API_KEY=your_kotani_api_key

# Pricing
X_SUB_PRICE_USD=8
PAYEASE_FEE_USD=2

# Backend URLs
BASE_URL=http://localhost:4000

# Database
DATABASE_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# Optional (for on-chain USDC verification)
BASE_RPC_URL=https://your-base-rpc-endpoint
USDC_CONTRACT=0x...
PAYEASE_WALLET=0x...
CARD_PROVIDER_API_KEY=your_provider_key

# Server
PORT=4000
ADMIN_PASSWORD=payease@2026#
```

Frontend env (`.env.local` in repo root):

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_USDC_CONTRACT=0x...
NEXT_PUBLIC_PAYEASE_WALLET=0x...
NEXT_PUBLIC_BASE_RPC_URL=https://your-base-sepolia-rpc
NEXT_PUBLIC_ADMIN_PASSWORD=payease@2026#
```

Note: The backend loads `.env` from its current working directory.

### 3) Run locally

Backend:

```bash
cd backend
npm run dev
```

Frontend (in another terminal):

```bash
npm run dev
```

Open http://localhost:3000.


## Notes

- Remember to add your frontend url to the CORS allowlist in `backend/src/app.js`.

## Scripts

Frontend:
- `npm run dev` - dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint

Backend:
- `npm run dev` - dev server with nodemon
- `npm run start` - production server
