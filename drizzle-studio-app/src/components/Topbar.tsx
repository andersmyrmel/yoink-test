import { Search, Play, Plus } from 'lucide-react';

export function Topbar() {
  return (
    <div className="flex items-center gap-2 border-b border-[rgb(48,48,48)] bg-background p-3">
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[rgb(26,26,26)] px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[rgb(35,35,35)]">
        <Play size={14} />
        <span>Run Query</span>
      </button>

      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[rgb(26,26,26)]">
        <Plus size={14} />
        <span>New Row</span>
      </button>

      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-md border border-[rgb(48,48,48)] bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[rgb(70,70,70)] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
