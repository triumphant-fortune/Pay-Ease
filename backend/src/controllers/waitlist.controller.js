import Waitlist from "../models/waitlist.model.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createWaitlistEntry = async (req, res) => {
  const { email, useCase, location } = req.body;

  if (!email || !useCase || !location) {
    return res.status(400).json({ error: "email, useCase, and location required" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "invalid email format" });
  }

  const entry = await Waitlist.create({ email, useCase, location });

  return res.status(201).json({ id: entry._id });
};

export const listWaitlistEntries = async (req, res) => {
  const adminPassword =
    process.env.ADMIN_PASSWORD || "payease@2026#";
  const provided = req.headers["x-admin-password"];

  if (!provided || provided !== adminPassword) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const entries = await Waitlist.find().sort({ createdAt: -1 }).lean();
  return res.json(entries);
};
