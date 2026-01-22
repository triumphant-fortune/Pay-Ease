import Payment from "../models/payment.model.js";
import { createKotaniPayment } from "../services/kotani.service.js";

export const createPaymentIntent = async (req, res) => {
  const { currency, xHandle } = req.body;

  if (!currency || !xHandle) {
    return res.status(400).json({ error: "currency and xHandle required" });
  }

  const total =
    Number(process.env.X_SUB_PRICE_USD) + Number(process.env.PAYEASE_FEE_USD);

  const payment = await Payment.create({
    product: "X_BLUE",
    amount: total,
    currency,
    xHandle,
  });

  const kotani = await createKotaniPayment({
    amount: total,
    currency,
    reference: payment._id.toString(),
    callbackUrl: `${process.env.BASE_URL}/api/webhooks/kotani`,
  });

  payment.providerRef = kotani.reference || kotani.id;
  await payment.save();

  res.json({
    paymentId: payment._id,
    payUrl: kotani.pay_url || kotani.checkout_url,
  });
};
