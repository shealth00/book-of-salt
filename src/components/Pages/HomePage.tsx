import { Page } from '../../types';
import { playlists, albums, artists, trendingTracks } from '../../data/mockData';
import MusicCard from '../UI/MusicCard';
import SectionHeader from '../UI/SectionHeader';
import TrackRow from '../UI/TrackRow';

interface Props {
  navigate: (page: Page, id?: string) => void;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function HomePage({ navigate }: Props) {
  return (
    <div className="px-8 py-6">
      {/* Hero greeting */}
      <h1 className="text-3xl font-bold text-white mb-6">{getGreeting()}</h1>

      {/* Quick picks grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {playlists.slice(0, 6).map(p => (
          <button
            key={p.id}
            onClick={() => navigate('playlist', p.id)}
            className="flex items-center bg-surface-highlight/60 hover:bg-surface-press rounded-md overflow-hidden group transition-colors"
          >
            <img src={p.coverUrl} alt={p.name} className="w-16 h-16 object-cover flex-shrink-0" />
            <span className="px-4 font-semibold text-sm text-white truncate">{p.name}</span>
            <div className="ml-auto pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-brand-green rounded-full p-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Featured Playlists */}
      <section className="mb-8">
        <SectionHeader title="Featured Playlists" action={{ label: 'Show all', onClick: () => navigate('library') }} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.slice(0, 5).map(p => (
            <MusicCard
              key={p.id}
              title={p.name}
              subtitle={p.description}
              coverUrl={p.coverUrl}
              tracks={p.tracks}
              onClick={() => navigate('playlist', p.id)}
            />
          ))}
        </div>
      </section>

      {/* Trending tracks */}
      <section className="mb-8">
        <SectionHeader title="Trending Now" />
        <div className="space-y-1">
          {trendingTracks.map((track, i) => (
            <TrackRow key={track.id} track={track} index={i} queue={trendingTracks} />
          ))}
        </div>
      </section>

      {/* Albums */}
      <section className="mb-8">
        <SectionHeader title="New Releases" action={{ label: 'Show all', onClick: () => navigate('library') }} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {albums.map(a => (
            <MusicCard
              key={a.id}
              title={a.title}
              subtitle={`${a.artist} · ${a.year}`}
              coverUrl={a.coverUrl}
              tracks={a.tracks}
              onClick={() => navigate('album', a.id)}
            />
          ))}
        </div>
      </section>

      {/* Artists */}
      <section className="mb-8">
        <SectionHeader title="Popular Artists" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {artists.map(a => (
            <div key={a.id} className="card text-center cursor-default">
              <img src={a.imageUrl} alt={a.name} className="w-full aspect-square rounded-full object-cover mb-3" />
              <p className="text-sm font-semibold text-white truncate">{a.name}</p>
              <p className="text-xs text-text-subdued">{a.genres[0]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
