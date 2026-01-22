import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT,
  rpcUrl: process.env.BASE_RPC_URL,
  usdcContract: process.env.USDC_CONTRACT,
  payeaseWallet: process.env.PAYEASE_WALLET,
  cardApiKey: process.env.CARD_PROVIDER_API_KEY,
};
