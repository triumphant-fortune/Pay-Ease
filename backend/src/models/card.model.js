import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    providerCardId: String,
    last4: String,
    expiry: String,
    merchant: String,
    expiresAt: Date,
  },
  { timestamps: true },
);

export default mongoose.model("Card", cardSchema);
