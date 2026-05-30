import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Repeat1 } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';
import ProgressBar from './ProgressBar';

export default function PlayerControls() {
  const { state, togglePlay, nextTrack, prevTrack, toggleShuffle, cycleRepeat } = usePlayer();
  const { isPlaying, isShuffle, repeat } = state;

  const RepeatIcon = repeat === 'one' ? Repeat1 : Repeat;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-5">
        <button
          onClick={toggleShuffle}
          className={`btn-icon ${ isShuffle ? 'text-brand-green' : '' }`}
          title="Shuffle"
        >
          <Shuffle size={18} />
        </button>

        <button onClick={prevTrack} className="btn-icon" title="Previous">
          <SkipBack size={20} fill="currentColor" />
        </button>

        <button
          onClick={togglePlay}
          className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>

        <button onClick={nextTrack} className="btn-icon" title="Next">
          <SkipForward size={20} fill="currentColor" />
        </button>

        <button
          onClick={cycleRepeat}
          className={`btn-icon ${ repeat !== 'off' ? 'text-brand-green' : '' }`}
          title="Repeat"
        >
          <RepeatIcon size={18} />
        </button>
      </div>

      <ProgressBar />
    </div>
  );
}
