import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { Page } from '../../types';
import TrackRow from '../UI/TrackRow';
import MusicCard from '../UI/MusicCard';

const GENRES = [
  { name: 'Pop', color: 'bg-pink-600', seed: 'pop' },
  { name: 'Hip-Hop', color: 'bg-yellow-600', seed: 'hiphop' },
  { name: 'Rock', color: 'bg-red-700', seed: 'rock' },
  { name: 'Electronic', color: 'bg-blue-600', seed: 'electronic' },
  { name: 'R&B', color: 'bg-purple-700', seed: 'rnb' },
  { name: 'Jazz', color: 'bg-green-700', seed: 'jazz' },
  { name: 'Classical', color: 'bg-orange-700', seed: 'classical' },
  { name: 'Indie', color: 'bg-teal-700', seed: 'indie' },
  { name: 'Folk', color: 'bg-amber-700', seed: 'folk' },
  { name: 'Ambient', color: 'bg-cyan-700', seed: 'ambient' },
];

interface Props {
  navigate: (page: Page, id?: string) => void;
}

export default function SearchPage({ navigate: _navigate }: Props) {
  const { query, setQuery, results } = useSearch();
  const hasResults = query.trim().length > 0;

  const allResults = [
    ...results.tracks,
    ...results.albums.flatMap(a => a.tracks),
  ];

  return (
    <div className="px-8 py-6">
      {/* Search input */}
      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subdued" size={18} />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-white text-black rounded-full py-3 pl-10 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
          autoFocus
        />
      </div>

      {!hasResults && (
        <>
          <h2 className="text-xl font-bold text-white mb-4">Browse all</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {GENRES.map(g => (
              <div
                key={g.name}
                className={`${ g.color } rounded-lg p-4 cursor-pointer hover:brightness-110 transition-all h-24 flex items-start relative overflow-hidden`}
              >
                <span className="font-bold text-white text-base z-10">{g.name}</span>
                <img
                  src={`https://picsum.photos/seed/${g.seed}/120/120`}
                  alt={g.name}
                  className="absolute -bottom-2 -right-2 w-20 h-20 rounded rotate-12 shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}

      {hasResults && (
        <div className="space-y-8">
          {results.tracks.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-white mb-3">Songs</h3>
              <div className="space-y-1">
                {results.tracks.map((t, i) => (
                  <TrackRow key={t.id} track={t} index={i} queue={allResults} />
                ))}
              </div>
            </section>
          )}

          {results.albums.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-white mb-3">Albums</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.albums.map(a => (
                  <MusicCard
                    key={a.id}
                    title={a.title}
                    subtitle={a.artist}
                    coverUrl={a.coverUrl}
                    tracks={a.tracks}
                  />
                ))}
              </div>
            </section>
          )}

          {results.artists.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-white mb-3">Artists</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.artists.map(a => (
                  <div key={a.id} className="card text-center">
                    <img src={a.imageUrl} alt={a.name} className="w-full aspect-square rounded-full object-cover mb-3" />
                    <p className="text-sm font-semibold text-white truncate">{a.name}</p>
                    <p className="text-xs text-text-subdued">Artist</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {results.playlists.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-white mb-3">Playlists</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.playlists.map(p => (
                  <MusicCard
                    key={p.id}
                    title={p.name}
                    subtitle={p.description}
                    coverUrl={p.coverUrl}
                    tracks={p.tracks}
                  />
                ))}
              </div>
            </section>
          )}

          {!results.tracks.length && !results.albums.length && !results.artists.length && !results.playlists.length && (
            <div className="text-center py-16">
              <p className="text-white font-semibold text-lg">No results found for "{query}"</p>
              <p className="text-text-subdued mt-2">Please make sure your words are spelled correctly, or use fewer or different keywords.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
