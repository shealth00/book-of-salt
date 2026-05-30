import { Heart } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';

export default function NowPlaying() {
  const { state } = usePlayer();
  const { currentTrack } = state;

  if (!currentTrack) {
    return <div className="text-text-subdued text-sm">No track playing</div>;
  }

  return (
    <div className="flex items-center gap-3 min-w-0">
      <img
        src={currentTrack.coverUrl}
        alt={currentTrack.album}
        className="w-14 h-14 rounded object-cover flex-shrink-0"
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-white truncate">{currentTrack.title}</p>
        <p className="text-xs text-text-subdued truncate">{currentTrack.artist}</p>
      </div>
      <button className="btn-icon flex-shrink-0 ml-2">
        <Heart size={16} />
      </button>
    </div>
  );
}
