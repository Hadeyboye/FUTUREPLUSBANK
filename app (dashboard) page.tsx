import { useQuery } from "@tanstack/react-query";
import BalanceCard from "@/components/BalanceCard";
import QuickTransfer from "@/components/QuickTransfer";
import SpendingChart from "@/components/SpendingChart";
import { api } from "@/lib/api";

export default function Dashboard() {
  const { data: accounts, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => api.get("/accounts"),
  });

  if (isLoading) return <div className="p-8">Loading accounts...</div>;

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Welcome back, Samson 👋
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {accounts?.map((acc: any) => (
          <BalanceCard key={acc.id} account={acc} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickTransfer />
        <SpendingChart />
      </div>
    </div>
  );
}