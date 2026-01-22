import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      enum: ["X_BLUE"],
      required: true,
    },
    amount: { type: Number, required: true }, // total charged
    currency: { type: String, required: true }, // USDC, NGN
    provider: { type: String, enum: ["KOTANI"], default: "KOTANI" },
    providerRef: { type: String }, // Kotani transaction/reference
    status: {
      type: String,
      enum: ["pending", "paid", "fulfilled", "failed"],
      default: "pending",
    },
    xHandle: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Payment", paymentSchema);
