import { Settings, Bell, Bug } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="flex flex-col bg-background min-w-[0] grow">
      <div className="p-3 pb-0">
        {/* Top content area */}
      </div>

      <div className="flex h-full flex-col justify-between overflow-y-auto px-3">
        {/* Middle scrollable area */}
      </div>

      <div className="mt-auto flex gap-2 p-3">
        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-center px-4 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)]">
          <Settings size={16} />
          Settings
        </button>

        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-center px-4 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)]">
          <Bell size={16} />
        </button>

        <button className="relative inline-flex gap-2 whitespace-nowrap items-center justify-center px-4 py-2 rounded-md bg-background text-foreground text-sm font-medium transition-all duration-150 hover:bg-[rgb(26,26,26)]">
          <Bug size={16} />
          Report a bug
        </button>
      </div>
    </div>
  );
}
