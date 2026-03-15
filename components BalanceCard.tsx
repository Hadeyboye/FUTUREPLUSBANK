interface Account {
  id: string;
  currency: string;
  balance: number;
  changePercent?: number;
}

export default function BalanceCard({ account }: { account: Account }) {
  const isPositive = (account.changePercent ?? 0) >= 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-green-600/40 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="text-2xl font-bold">{account.currency}</div>
        <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? "↑" : "↓"} {Math.abs(account.changePercent ?? 0)}%
        </span>
      </div>
      <div className="text-3xl font-mono">
        {account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
}