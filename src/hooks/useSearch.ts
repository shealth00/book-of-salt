import { useState, useMemo } from 'react';
import { tracks, albums, artists, playlists } from '../data/mockData';

export interface SearchResults {
  tracks: typeof tracks;
  albums: typeof albums;
  artists: typeof artists;
  playlists: typeof playlists;
}

export function useSearch() {
  const [query, setQuery] = useState('');

  const results: SearchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { tracks: [], albums: [], artists: [], playlists: [] };
    return {
      tracks: tracks.filter(t => t.title.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q)),
      albums: albums.filter(a => a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q)),
      artists: artists.filter(a => a.name.toLowerCase().includes(q)),
      playlists: playlists.filter(p => p.name.toLowerCase().includes(q)),
    };
  }, [query]);

  return { query, setQuery, results };
}
