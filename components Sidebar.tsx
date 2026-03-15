import { Home, Wallet, CreditCard, Send, BarChart3, User } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Wallet, label: "Accounts", href: "/dashboard/accounts" },
  { icon: CreditCard, label: "Cards", href: "/dashboard/cards" },
  { icon: Send, label: "Transfers", href: "/dashboard/transfers" },
  { icon: BarChart3, label: "Insights", href: "/dashboard/insights" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-green-500">Futureplus</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}