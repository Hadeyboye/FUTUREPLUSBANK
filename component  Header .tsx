import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg w-72 focus:outline-none focus:border-green-600"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center font-bold">
            S
          </div>
          <div>
            <p className="font-medium">Samson</p>
            <p className="text-xs text-zinc-400">Lagos, NG</p>
          </div>
        </div>
      </div>
    </header>
  );
}