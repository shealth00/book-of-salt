import { Play, Pause, Clock } from 'lucide-react';
import { Page } from '../../types';
import { albums } from '../../data/mockData';
import TrackRow from '../UI/TrackRow';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatTime';

interface Props {
  id: string;
  navigate: (page: Page, id?: string) => void;
}

export default function AlbumPage({ id }: Props) {
  const album = albums.find(a => a.id === id);
  const { state, playTrack, togglePlay } = usePlayer();

  if (!album) return <div className="p-8 text-text-subdued">Album not found.</div>;

  const totalDuration = album.tracks.reduce((acc, t) => acc + t.duration, 0);
  const isCurrentAlbum = album.tracks.some(t => t.id === state.currentTrack?.id);
  const isPlaying = isCurrentAlbum && state.isPlaying;

  function handlePlay() {
    if (isCurrentAlbum) {
      togglePlay();
    } else {
      playTrack(album!.tracks[0], album!.tracks);
    }
  }

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-purple-900/60 to-surface-base px-8 pt-10 pb-6 flex items-end gap-6">
        <img src={album.coverUrl} alt={album.title} className="w-52 h-52 shadow-2xl rounded object-cover" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-2">Album</p>
          <h1 className="text-4xl font-bold text-white mb-3">{album.title}</h1>
          <p className="text-sm text-text-subdued">
            <span className="text-white font-medium">{album.artist}</span>
            {` · ${album.year} · ${album.tracks.length} songs`}
            {`, ${formatTime(totalDuration)}`}
          </p>
          <span className="mt-2 inline-block text-xs bg-surface-highlight text-text-subdued rounded-full px-3 py-1">{album.genre}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 py-6 flex items-center gap-5">
        <button
          onClick={handlePlay}
          className="bg-brand-green text-black rounded-full p-4 hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
        </button>
      </div>

      {/* Track list header */}
      <div className="px-8 mb-2">
        <div className="flex items-center gap-4 px-4 text-xs text-text-subdued uppercase tracking-wider border-b border-surface-highlight pb-2">
          <span className="w-6">#</span>
          <span className="flex-1">Title</span>
          <Clock size={14} className="flex-shrink-0" />
        </div>
      </div>

      {/* Tracks */}
      <div className="px-8 pb-8 space-y-1">
        {album.tracks.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} queue={album.tracks} showAlbum={false} />
        ))}
      </div>
    </div>
  );
}
