"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function QuickTransfer() {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");

  const handleTransfer = async () => {
    try {
      await api.post("/transactions/transfer", {
        amount: Number(amount),
        toAccount: to,
        currency: "USD",
      });
      alert("Transfer initiated!");
      setAmount("");
      setTo("");
    } catch (err) {
      alert("Transfer failed");
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Transfer</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Recipient @username or phone"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg"
        />
        <button
          onClick={handleTransfer}
          className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-lg font-medium"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}