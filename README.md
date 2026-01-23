# PayEase (Subzero Frontend)

PayEase is a full-stack hackathon project that lets users activate subscriptions without credit cards by paying in USDC on Base (Ethereum). The frontend is a Next.js landing page + subscription wizard, and the backend handles payment intent creation, Kotani checkout, and fulfillment for X (Twitter) Blue.

## What the app does

- Landing page marketing “subscriptions without cards, powered by USDC on Base”.
- Multi-step subscription flow: platform → plan → account → payment → success.
- Backend payment intent creation using Kotani Pay, plus webhook + polling to confirm payment and fulfill.

Supported platform right now: X (Twitter) Blue. Replit is shown in the UI but not wired in the backend yet.

## Tech stack

Frontend
- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Base (Ethereum) USDC messaging (no wallet UI yet)

Backend
- Node.js + Express
- MongoDB (Mongoose)
- Kotani Pay API
- Node-cron for polling

## Project structure

- `src/` – Next.js frontend
- `backend/` – Express API + payment services

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

Create a `.env` in `backend/` (or set `DOTENV_CONFIG_PATH`) for the backend. Example (do not commit secrets):

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
```

Note: The frontend does not currently read env vars. The backend loads `.env` from its current working directory.

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

## API

Base URL: `http://localhost:4000`

- `POST /api/payments/intent`
  - Body: `{ "currency": "USDC", "xHandle": "elonmusk" }`
  - Response: `{ paymentId, payUrl }`

- `POST /api/webhooks/kotani`
  - Called by Kotani when payment status changes.

## How payments are fulfilled

1. Frontend creates a payment intent.
2. Backend creates a Kotani checkout and returns a `payUrl`.
3. Webhook or poller verifies payment success.
4. Backend marks payment fulfilled and triggers X subscription fulfillment (currently mocked).

## Notes / TODO

- X fulfillment is mocked in `backend/src/services/xFulfillment.service.js`.
- Replit is in the UI but not wired to backend yet.
- Consider adding a proper `/.env.example` and moving backend envs to `backend/.env`.

## Scripts

Frontend:
- `npm run dev` – dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint

Backend:
- `npm run dev` – dev server with nodemon
- `npm run start` – production server
