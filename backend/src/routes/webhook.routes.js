import express from "express";
import { kotaniWebhook } from "../controllers/webhook.controller.js";

const router = express.Router();

router.post("/kotani", kotaniWebhook);

export default router;
