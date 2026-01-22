import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.error("🔴 MongoDB connection failed", error);
    process.exit(1);
  }
};
