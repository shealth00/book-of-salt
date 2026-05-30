import { useEffect, useRef } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatTime';

export default function ProgressBar() {
  const { state, setTime, nextTrack } = usePlayer();
  const { currentTrack, isPlaying, currentTime, repeat } = state;
  const intervalRef = useRef<number | null>(null);

  const duration = currentTrack?.duration ?? 0;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isPlaying && currentTrack) {
      intervalRef.current = window.setInterval(() => {
        setTime(prev => {
          const next = prev + 1;
          if (next >= duration) {
            if (repeat === 'one') return 0;
            nextTrack();
            return 0;
          }
          return next;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying, currentTrack, duration, repeat]);

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    setTime(Math.round(ratio * duration));
  }

  return (
    <div className="flex items-center gap-3 w-full max-w-xl">
      <span className="text-xs text-text-subdued w-8 text-right">{formatTime(currentTime)}</span>
      <div
        className="flex-1 h-1 bg-surface-press rounded-full cursor-pointer group relative"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-white rounded-full group-hover:bg-brand-green transition-colors relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <span className="text-xs text-text-subdued w-8">{formatTime(duration)}</span>
    </div>
  );
}
