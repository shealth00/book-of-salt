import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Page } from '../../types';

interface Props {
  navigate: (page: Page, id?: string) => void;
}

export default function TopBar({ navigate: _navigate }: Props) {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-surface-base/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <button className="btn-icon bg-black/40 rounded-full p-1 disabled:opacity-30" disabled>
          <ChevronLeft size={20} />
        </button>
        <button className="btn-icon bg-black/40 rounded-full p-1 disabled:opacity-30" disabled>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-black rounded-full px-3 py-1.5 text-sm font-semibold hover:bg-surface-highlight transition-colors">
          <div className="bg-surface-highlight rounded-full p-1">
            <User size={14} />
          </div>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
