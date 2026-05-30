import { Play, Pause } from 'lucide-react';
import { Track } from '../../types';
import { formatTime } from '../../utils/formatTime';
import { usePlayer } from '../../context/PlayerContext';

interface Props {
  track: Track;
  index: number;
  queue: Track[];
  showAlbum?: boolean;
}

export default function TrackRow({ track, index, queue, showAlbum = true }: Props) {
  const { state, playTrack, togglePlay } = usePlayer();
  const isActive = state.currentTrack?.id === track.id;
  const isPlaying = isActive && state.isPlaying;

  function handleClick() {
    if (isActive) {
      togglePlay();
    } else {
      playTrack(track, queue);
    }
  }

  return (
    <div
      className={`track-row group ${ isActive ? 'text-brand-green' : '' }`}
      onDoubleClick={handleClick}
    >
      <div className="w-6 text-center flex-shrink-0">
        {isActive ? (
          <button onClick={handleClick} className="text-brand-green">
            {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
          </button>
        ) : (
          <span className="text-text-subdued text-sm group-hover:hidden">{index + 1}</span>
        )}
        {!isActive && (
          <button onClick={handleClick} className="hidden group-hover:block btn-icon">
            <Play size={14} fill="currentColor" />
          </button>
        )}
      </div>
      <img src={track.coverUrl} alt={track.album} className="w-10 h-10 rounded object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${ isActive ? 'text-brand-green' : 'text-white' }`}>{track.title}</p>
        <p className="text-xs text-text-subdued truncate">{track.artist}</p>
      </div>
      {showAlbum && (
        <span className="text-sm text-text-subdued hidden md:block truncate max-w-[180px]">{track.album}</span>
      )}
      <span className="text-sm text-text-subdued flex-shrink-0">{formatTime(track.duration)}</span>
    </div>
  );
}
