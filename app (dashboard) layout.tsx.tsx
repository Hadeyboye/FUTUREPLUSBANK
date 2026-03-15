import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import RealTimeBalanceUpdater from "@/components/RealTimeBalanceUpdater";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <RealTimeBalanceUpdater />
      <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-auto p-6 md:p-8">{children}</main>
        </div>
      </div>
    </>
  );
}