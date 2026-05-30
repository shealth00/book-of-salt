import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';

export default function VolumeControl() {
  const { state, setVolume, toggleMute } = usePlayer();
  const { volume, isMuted } = state;

  const effectiveVolume = isMuted ? 0 : volume;

  function VolumeIcon() {
    if (isMuted || effectiveVolume === 0) return <VolumeX size={18} />;
    if (effectiveVolume < 0.33) return <Volume size={18} />;
    if (effectiveVolume < 0.66) return <Volume1 size={18} />;
    return <Volume2 size={18} />;
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={toggleMute} className="btn-icon">
        <VolumeIcon />
      </button>
      <div className="relative w-24 h-1 bg-surface-press rounded-full cursor-pointer group">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={effectiveVolume}
          onChange={e => setVolume(parseFloat(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="h-full bg-white rounded-full group-hover:bg-brand-green transition-colors"
          style={{ width: `${effectiveVolume * 100}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `calc(${effectiveVolume * 100}% - 6px)` }}
        />
      </div>
    </div>
  );
}
