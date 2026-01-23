import express from "express";
import { createWaitlistEntry, listWaitlistEntries } from "../controllers/waitlist.controller.js";

const router = express.Router();

router.post("/", createWaitlistEntry);
router.get("/", listWaitlistEntries);

export default router;
