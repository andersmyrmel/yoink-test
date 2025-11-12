import { Settings, Bell, Bug, Database } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="flex w-64 flex-col bg-background border-r border-[rgb(48,48,48)]">
      <div className="p-3 pb-0">
        <div className="flex items-center gap-2 mb-4">
          <Database size={20} className="text-foreground" />
          <h1 className="text-base font-semibold text-foreground">Drizzle Studio</h1>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between overflow-y-auto px-3">
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm text-foreground hover:bg-[rgb(26,26,26)] rounded-md cursor-pointer transition-colors">
            Tables
          </div>
          <div className="px-3 py-2 text-sm text-foreground hover:bg-[rgb(26,26,26)] rounded-md cursor-pointer transition-colors">
            Queries
          </div>
          <div className="px-3 py-2 text-sm text-foreground hover:bg-[rgb(26,26,26)] rounded-md cursor-pointer transition-colors">
            Schema
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2 p-3 border-t border-[rgb(48,48,48)]">
        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-start px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)] w-full">
          <Settings size={16} />
          <span>Settings</span>
        </button>

        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-start px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)] w-full">
          <Bell size={16} />
          <span>Notifications</span>
        </button>

        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-start px-3 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)] w-full">
          <Bug size={16} />
          <span>Report a bug</span>
        </button>
      </div>
    </div>
  );
}
