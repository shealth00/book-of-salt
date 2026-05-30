import { Play, Pause, Shuffle, Clock } from 'lucide-react';
import { Page } from '../../types';
import { playlists } from '../../data/mockData';
import TrackRow from '../UI/TrackRow';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime, formatFollowers } from '../../utils/formatTime';

interface Props {
  id: string;
  navigate: (page: Page, id?: string) => void;
}

export default function PlaylistPage({ id }: Props) {
  const playlist = playlists.find(p => p.id === id);
  const { state, playTrack, togglePlay, toggleShuffle } = usePlayer();

  if (!playlist) return <div className="p-8 text-text-subdued">Playlist not found.</div>;

  const totalDuration = playlist.tracks.reduce((acc, t) => acc + t.duration, 0);
  const isCurrentPlaylist = playlist.tracks.some(t => t.id === state.currentTrack?.id);
  const isPlaying = isCurrentPlaylist && state.isPlaying;

  function handlePlay() {
    if (isCurrentPlaylist) {
      togglePlay();
    } else {
      playTrack(playlist!.tracks[0], playlist!.tracks);
    }
  }

  function handleShuffle() {
    toggleShuffle();
    if (!isCurrentPlaylist && playlist.tracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * playlist.tracks.length);
      playTrack(playlist.tracks[randomIndex], playlist.tracks);
    }
  }

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-b from-indigo-900/60 to-surface-base px-8 pt-10 pb-6 flex items-end gap-6">
        <img src={playlist.coverUrl} alt={playlist.name} className="w-52 h-52 shadow-2xl rounded object-cover" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-2">Playlist</p>
          <h1 className="text-4xl font-bold text-white mb-3">{playlist.name}</h1>
          <p className="text-text-subdued text-sm mb-3">{playlist.description}</p>
          <p className="text-sm text-text-subdued">
            <span className="text-white font-medium">{playlist.createdBy}</span>
            {playlist.followers > 0 && ` · ${formatFollowers(playlist.followers)} likes`}
            {` · ${playlist.tracks.length} songs`}
            {`, about ${formatTime(totalDuration)}`}
          </p>
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
        <button
          onClick={handleShuffle}
          className={`btn-icon ${ state.isShuffle ? 'text-brand-green' : '' }`}
        >
          <Shuffle size={26} />
        </button>
      </div>

      {/* Track list header */}
      <div className="px-8 mb-2">
        <div className="flex items-center gap-4 px-4 text-xs text-text-subdued uppercase tracking-wider border-b border-surface-highlight pb-2">
          <span className="w-6">#</span>
          <span className="flex-1">Title</span>
          <span className="hidden md:block w-48">Album</span>
          <Clock size={14} className="flex-shrink-0" />
        </div>
      </div>

      {/* Tracks */}
      <div className="px-8 pb-8 space-y-1">
        {playlist.tracks.map((track, i) => (
          <TrackRow key={track.id} track={track} index={i} queue={playlist.tracks} />
        ))}
      </div>
    </div>
  );
}
