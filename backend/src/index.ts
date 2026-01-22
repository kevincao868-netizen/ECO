import express from "express";

const app = express();
app.use(express.json());

const port = Number(process.env.PORT ?? 3000);
const defaultFxRate = Number(process.env.DEFAULT_FX_RATE ?? 1200);

const orders: Array<{
  id: string;
  reference: string;
  side: "BUY_USDT" | "SELL_USDT";
  amountUsdt: number;
  rateNgn: number;
  amountNgn: number;
  status: "CREATED" | "PENDING_PAYMENT" | "FUNDS_RECEIVED" | "COMPLETED" | "CANCELLED";
  createdAt: string;
}> = [];

const generateReference = () =>
  `NGN-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`.toUpperCase();

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "eco-ngn-exchange" });
});

app.get("/rates", (_req, res) => {
  res.json({
    provider: process.env.EXCHANGE_PROVIDER ?? "manual",
    pairs: [
      {
        base: "USDT",
        quote: "NGN",
        rate: defaultFxRate,
      },
    ],
  });
});

app.post("/orders", (req, res) => {
  const { side, amountUsdt, rateNgn } = req.body as {
    side?: "BUY_USDT" | "SELL_USDT";
    amountUsdt?: number;
    rateNgn?: number;
  };

  if (!side || !amountUsdt || amountUsdt <= 0) {
    return res.status(400).json({ error: "side and amountUsdt are required" });
  }

  const rate = rateNgn && rateNgn > 0 ? rateNgn : defaultFxRate;
  const order = {
    id: `order_${orders.length + 1}`,
    reference: generateReference(),
    side,
    amountUsdt,
    rateNgn: rate,
    amountNgn: Number((amountUsdt * rate).toFixed(2)),
    status: "CREATED" as const,
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  return res.status(201).json(order);
});

app.get("/orders", (_req, res) => {
  res.json({ data: orders });
});

app.listen(port, () => {
  console.log(`ECO exchange API listening on ${port}`);
});
