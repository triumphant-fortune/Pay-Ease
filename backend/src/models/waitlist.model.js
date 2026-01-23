import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    useCase: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Waitlist", waitlistSchema);
