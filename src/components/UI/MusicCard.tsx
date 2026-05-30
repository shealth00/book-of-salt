import { Play } from 'lucide-react';
import { Track } from '../../types';
import { usePlayer } from '../../context/PlayerContext';

interface Props {
  title: string;
  subtitle: string;
  coverUrl: string;
  tracks?: Track[];
  onClick?: () => void;
}

export default function MusicCard({ title, subtitle, coverUrl, tracks = [], onClick }: Props) {
  const { playTrack } = usePlayer();

  function handlePlay(e: React.MouseEvent) {
    e.stopPropagation();
    if (tracks.length > 0) playTrack(tracks[0], tracks);
  }

  return (
    <div className="card group relative" onClick={onClick}>
      <div className="relative mb-3">
        <img
          src={coverUrl}
          alt={title}
          className="w-full aspect-square object-cover rounded shadow-lg"
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-2 right-2 bg-brand-green text-black rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200"
        >
          <Play size={18} fill="currentColor" />
        </button>
      </div>
      <p className="text-sm font-semibold text-white truncate">{title}</p>
      <p className="text-xs text-text-subdued truncate mt-0.5">{subtitle}</p>
    </div>
  );
}
