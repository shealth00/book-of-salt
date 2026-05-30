# Soundwave

A Spotify-inspired music player built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Music Playback** — Play/pause, skip, seek, volume control
- **Queue Management** — Shuffle and repeat (off / all / one)
- **Library** — Browse playlists, albums, and artists
- **Search** — Search tracks, albums, and artists
- **Responsive Layout** — Sidebar navigation, main content area, persistent bottom player bar
- **Dark Theme** — Spotify-inspired dark UI

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Routing | React Router DOM v6 |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Layout/         # App shell (sidebar, topbar, player bar)
│   ├── Player/         # Playback controls, progress, volume
│   ├── Sidebar/        # Navigation & library links
│   ├── MainContent/    # Home feed, featured sections
│   ├── Search/         # Search page & results
│   └── Library/        # User library, playlists, albums
├── context/            # PlayerContext (global playback state)
├── hooks/              # usePlayer, useSearch
├── data/               # Mock track/album/playlist data
├── types/              # Shared TypeScript interfaces
└── utils/              # formatTime, etc.
```

## Screenshots

> Coming soon — run `npm run dev` to see it live.

## License

MIT
