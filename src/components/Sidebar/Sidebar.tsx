import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import { NavState, Page } from '../../types';
import { playlists } from '../../data/mockData';

interface Props {
  nav: NavState;
  navigate: (page: Page, id?: string) => void;
}

export default function Sidebar({ nav, navigate }: Props) {
  const userPlaylists = playlists.filter(p => p.createdBy === 'You');
  const savedPlaylists = playlists.filter(p => p.createdBy !== 'You');

  return (
    <div className="w-60 flex-shrink-0 bg-black flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#1DB954"/>
            <path d="M25 60 Q37.5 35 50 50 Q62.5 65 75 40" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <circle cx="25" cy="60" r="4" fill="white"/>
            <circle cx="75" cy="40" r="4" fill="white"/>
          </svg>
          <span className="text-white font-bold text-xl">Soundwave</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-3 space-y-1">
        <button
          onClick={() => navigate('home')}
          className={`sidebar-link w-full ${ nav.page === 'home' ? 'active' : '' }`}
        >
          <Home size={22} />
          <span>Home</span>
        </button>
        <button
          onClick={() => navigate('search')}
          className={`sidebar-link w-full ${ nav.page === 'search' ? 'active' : '' }`}
        >
          <Search size={22} />
          <span>Search</span>
        </button>
        <button
          onClick={() => navigate('library')}
          className={`sidebar-link w-full ${ nav.page === 'library' ? 'active' : '' }`}
        >
          <Library size={22} />
          <span>Your Library</span>
        </button>
      </nav>

      <div className="mt-6 px-3 space-y-1">
        <button className="sidebar-link w-full">
          <div className="bg-text-subdued rounded-sm p-0.5"><PlusSquare size={18} className="text-black" /></div>
          <span>Create Playlist</span>
        </button>
        <button className="sidebar-link w-full">
          <div className="bg-gradient-to-br from-indigo-400 to-blue-300 rounded-sm p-0.5"><Heart size={18} className="text-white" /></div>
          <span>Liked Songs</span>
        </button>
      </div>

      <hr className="border-surface-highlight mx-4 my-4" />

      {/* Playlist list */}
      <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5">
        {userPlaylists.map(p => (
          <button
            key={p.id}
            onClick={() => navigate('playlist', p.id)}
            className={`sidebar-link w-full text-sm ${ nav.id === p.id ? 'text-white' : '' }`}
          >
            <span className="truncate">{p.name}</span>
          </button>
        ))}
        {savedPlaylists.map(p => (
          <button
            key={p.id}
            onClick={() => navigate('playlist', p.id)}
            className={`sidebar-link w-full text-sm ${ nav.id === p.id ? 'text-white' : '' }`}
          >
            <span className="truncate">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
