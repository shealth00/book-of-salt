import { useState } from 'react';
import { PlayerProvider } from './context/PlayerContext';
import { NavState, Page } from './types';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/Layout/TopBar';
import PlayerBar from './components/Player/PlayerBar';
import HomePage from './components/Pages/HomePage';
import SearchPage from './components/Pages/SearchPage';
import LibraryPage from './components/Pages/LibraryPage';
import PlaylistPage from './components/Pages/PlaylistPage';
import AlbumPage from './components/Pages/AlbumPage';

export default function App() {
  const [nav, setNav] = useState<NavState>({ page: 'home' });

  const navigate = (page: Page, id?: string) => setNav({ page, id });

  function renderPage() {
    switch (nav.page) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'search': return <SearchPage navigate={navigate} />;
      case 'library': return <LibraryPage navigate={navigate} />;
      case 'playlist': return <PlaylistPage id={nav.id!} navigate={navigate} />;
      case 'album': return <AlbumPage id={nav.id!} navigate={navigate} />;
      default: return <HomePage navigate={navigate} />;
    }
  }

  return (
    <PlayerProvider>
      <div className="flex flex-col h-screen bg-surface-base overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar nav={nav} navigate={navigate} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <TopBar navigate={navigate} />
            <main className="flex-1 overflow-y-auto">
              {renderPage()}
            </main>
          </div>
        </div>
        <PlayerBar />
      </div>
    </PlayerProvider>
  );
}
