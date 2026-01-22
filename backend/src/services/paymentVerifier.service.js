import { ethers } from "ethers";
import { env } from "../config/env.js";

const provider = new ethers.JsonRpcProvider(env.rpcUrl);

const USDC_ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)",
];

export const verifyUsdcPayment = async (txHash, expectedAmount) => {
  const receipt = await provider.getTransactionReceipt(txHash);
  if (!receipt || receipt.status !== 1) return false;

  const iface = new ethers.Interface(USDC_ABI);

  for (const log of receipt.logs) {
    if (log.address.toLowerCase() === env.usdcContract.toLowerCase()) {
      const parsed = iface.parseLog(log);

      const to = parsed.args.to.toLowerCase();
      const value = Number(parsed.args.value) / 1e6;

      if (to === env.payeaseWallet.toLowerCase() && value === expectedAmount) {
        return true;
      }
    }
  }

  return false;
};
