import express from "express";
import { createWaitlistEntry } from "../controllers/waitlist.controller.js";

const router = express.Router();

router.post("/", createWaitlistEntry);

export default router;
