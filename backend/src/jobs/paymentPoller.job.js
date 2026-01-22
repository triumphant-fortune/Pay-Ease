import cron from "node-cron";
import Payment from "../models/payment.model.js";
import { getKotaniTransaction } from "../services/kotani.service.js";
import { payForXSubscription } from "../services/xFulfillment.service.js";

cron.schedule("*/2 * * * *", async () => {
  const pending = await Payment.find({ status: "pending" });

  for (const payment of pending) {
    if (!payment.providerRef) continue;

    const tx = await getKotaniTransaction(payment.providerRef);

    if (tx.status === "SUCCESS") {
      payment.status = "paid";
      await payment.save();

      await payForXSubscription({ xHandle: payment.xHandle });

      payment.status = "fulfilled";
      await payment.save();
    }
  }
});
