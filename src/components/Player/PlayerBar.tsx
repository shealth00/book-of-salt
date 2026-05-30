import { usePlayer } from '../../context/PlayerContext';
import NowPlaying from './NowPlaying';
import PlayerControls from './PlayerControls';
import VolumeControl from './VolumeControl';

export default function PlayerBar() {
  return (
    <div className="h-[90px] bg-surface-elevated border-t border-surface-highlight flex items-center px-4 gap-4 flex-shrink-0">
      <div className="w-[30%]">
        <NowPlaying />
      </div>
      <div className="flex-1">
        <PlayerControls />
      </div>
      <div className="w-[30%] flex justify-end">
        <VolumeControl />
      </div>
    </div>
  );
}
