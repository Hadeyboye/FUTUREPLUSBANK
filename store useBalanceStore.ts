import { create } from "zustand";

interface BalanceState {
  balances: Record<string, number>;
  updateBalance: (accountId: string, newBalance: number) => void;
}

export const useBalanceStore = create<BalanceState>((set) => ({
  balances: {},
  updateBalance: (accountId, newBalance) =>
    set((state) => ({
      balances: { ...state.balances, [accountId]: newBalance },
    })),
}));