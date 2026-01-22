import axios from "axios";

const client = axios.create({
  baseURL: process.env.KOTANI_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.KOTANI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const createKotaniPayment = async ({
  amount,
  currency,
  reference,
  callbackUrl,
}) => {
  const res = await client.post("/payments", {
    amount,
    currency,
    reference,
    callback_url: callbackUrl,
  });

  return res.data;
};

export const getKotaniTransaction = async (reference) => {
  const res = await client.get(`/transactions/${reference}`);
  return res.data;
};
