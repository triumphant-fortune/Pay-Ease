import Payment from "../models/payment.model.js";
import { getKotaniTransaction } from "../services/kotani.service.js";
import { payForXSubscription } from "../services/xFulfillment.service.js";

export const kotaniWebhook = async (req, res) => {
  const { reference } = req.body;

  if (!reference) return res.status(400).send("Missing reference");

  const payment = await Payment.findById(reference);
  if (!payment) return res.status(404).send("Payment not found");

  const tx = await getKotaniTransaction(payment.providerRef);

  if (tx.status === "SUCCESS" && payment.status !== "fulfilled") {
    payment.status = "paid";
    await payment.save();

    await payForXSubscription({ xHandle: payment.xHandle });

    payment.status = "fulfilled";
    await payment.save();
  }

  res.json({ received: true });
};
