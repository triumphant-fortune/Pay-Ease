import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import "./jobs/paymentPoller.job.js";

await connectDB();

app.listen(env.port, () => {
  console.log(`PayEase backend running on port ${env.port}`);
});
