"use client";

import { useEffect } from "react";
import { useBalanceStore } from "@/store/useBalanceStore";

export default function RealTimeBalanceUpdater() {
  const updateBalance = useBalanceStore((s) => s.updateBalance);

  useEffect(() => {
    // In production → wss://api.futureplusbank.com/ws/notifications
    const ws = new WebSocket("ws://localhost:8080/ws/notifications");

    ws.onopen = () => console.log("WS connected");
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "balance_updated") {
          updateBalance(data.accountId, data.newBalance);
        }
      } catch {}
    };

    return () => ws.close();
  }, [updateBalance]);

  return null;
}