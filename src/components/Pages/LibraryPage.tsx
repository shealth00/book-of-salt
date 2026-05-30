import { Page } from '../../types';
import { playlists, albums } from '../../data/mockData';
import MusicCard from '../UI/MusicCard';
import SectionHeader from '../UI/SectionHeader';

interface Props {
  navigate: (page: Page, id?: string) => void;
}

export default function LibraryPage({ navigate }: Props) {
  return (
    <div className="px-8 py-6">
      <h1 className="text-3xl font-bold text-white mb-6">Your Library</h1>

      <section className="mb-10">
        <SectionHeader title="Playlists" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.map(p => (
            <MusicCard
              key={p.id}
              title={p.name}
              subtitle={`Playlist · ${p.createdBy}`}
              coverUrl={p.coverUrl}
              tracks={p.tracks}
              onClick={() => navigate('playlist', p.id)}
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeader title="Albums" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {albums.map(a => (
            <MusicCard
              key={a.id}
              title={a.title}
              subtitle={`Album · ${a.artist}`}
              coverUrl={a.coverUrl}
              tracks={a.tracks}
              onClick={() => navigate('album', a.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
