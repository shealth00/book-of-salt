export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  album: string;
  albumId: string;
  duration: number; // seconds
  coverUrl: string;
  audioUrl?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  coverUrl: string;
  year: number;
  genre: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  tracks: Track[];
  createdBy: string;
  followers: number;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  genres: string[];
  monthlyListeners: number;
}

export type RepeatMode = 'off' | 'all' | 'one';

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  isShuffle: boolean;
  repeat: RepeatMode;
  queue: Track[];
  queueIndex: number;
}

export type Page = 'home' | 'search' | 'library' | 'playlist' | 'album' | 'artist';

export interface NavState {
  page: Page;
  id?: string;
}
