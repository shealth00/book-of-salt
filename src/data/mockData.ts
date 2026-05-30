import { Track, Album, Playlist, Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'a1',
    name: 'Luna Waves',
    imageUrl: 'https://picsum.photos/seed/luna/400/400',
    followers: 4_200_000,
    genres: ['Indie Pop', 'Dream Pop'],
    monthlyListeners: 8_500_000,
  },
  {
    id: 'a2',
    name: 'The Midnight',
    imageUrl: 'https://picsum.photos/seed/midnight/400/400',
    followers: 2_800_000,
    genres: ['Synthwave', 'Retrowave'],
    monthlyListeners: 5_100_000,
  },
  {
    id: 'a3',
    name: 'Aurora Sky',
    imageUrl: 'https://picsum.photos/seed/aurora/400/400',
    followers: 1_900_000,
    genres: ['Electronic', 'Ambient'],
    monthlyListeners: 3_700_000,
  },
  {
    id: 'a4',
    name: 'Neon Echo',
    imageUrl: 'https://picsum.photos/seed/neon/400/400',
    followers: 950_000,
    genres: ['Indie Rock', 'Alternative'],
    monthlyListeners: 2_200_000,
  },
  {
    id: 'a5',
    name: 'Desert Glass',
    imageUrl: 'https://picsum.photos/seed/desert/400/400',
    followers: 670_000,
    genres: ['Folk', 'Acoustic'],
    monthlyListeners: 1_400_000,
  },
];

export const tracks: Track[] = [
  { id: 't1', title: 'Starfall', artist: 'Luna Waves', artistId: 'a1', album: 'Celestial', albumId: 'al1', duration: 214, coverUrl: 'https://picsum.photos/seed/celestial/300/300' },
  { id: 't2', title: 'Neon Dreams', artist: 'Luna Waves', artistId: 'a1', album: 'Celestial', albumId: 'al1', duration: 198, coverUrl: 'https://picsum.photos/seed/celestial/300/300' },
  { id: 't3', title: 'Midnight Run', artist: 'Luna Waves', artistId: 'a1', album: 'Celestial', albumId: 'al1', duration: 231, coverUrl: 'https://picsum.photos/seed/celestial/300/300' },
  { id: 't4', title: 'Fading Light', artist: 'Luna Waves', artistId: 'a1', album: 'Celestial', albumId: 'al1', duration: 187, coverUrl: 'https://picsum.photos/seed/celestial/300/300' },
  { id: 't5', title: 'Cityscape', artist: 'The Midnight', artistId: 'a2', album: 'Endless Summer', albumId: 'al2', duration: 245, coverUrl: 'https://picsum.photos/seed/endless/300/300' },
  { id: 't6', title: 'Heroes', artist: 'The Midnight', artistId: 'a2', album: 'Endless Summer', albumId: 'al2', duration: 219, coverUrl: 'https://picsum.photos/seed/endless/300/300' },
  { id: 't7', title: 'Jason', artist: 'The Midnight', artistId: 'a2', album: 'Endless Summer', albumId: 'al2', duration: 263, coverUrl: 'https://picsum.photos/seed/endless/300/300' },
  { id: 't8', title: 'Aurora Borealis', artist: 'Aurora Sky', artistId: 'a3', album: 'Northern Lights', albumId: 'al3', duration: 308, coverUrl: 'https://picsum.photos/seed/northern/300/300' },
  { id: 't9', title: 'Drift', artist: 'Aurora Sky', artistId: 'a3', album: 'Northern Lights', albumId: 'al3', duration: 281, coverUrl: 'https://picsum.photos/seed/northern/300/300' },
  { id: 't10', title: 'Pulse', artist: 'Neon Echo', artistId: 'a4', album: 'Signal', albumId: 'al4', duration: 193, coverUrl: 'https://picsum.photos/seed/signal/300/300' },
  { id: 't11', title: 'Voltage', artist: 'Neon Echo', artistId: 'a4', album: 'Signal', albumId: 'al4', duration: 207, coverUrl: 'https://picsum.photos/seed/signal/300/300' },
  { id: 't12', title: 'Frequency', artist: 'Neon Echo', artistId: 'a4', album: 'Signal', albumId: 'al4', duration: 222, coverUrl: 'https://picsum.photos/seed/signal/300/300' },
  { id: 't13', title: 'Open Road', artist: 'Desert Glass', artistId: 'a5', album: 'Wanderlust', albumId: 'al5', duration: 256, coverUrl: 'https://picsum.photos/seed/wanderlust/300/300' },
  { id: 't14', title: 'Dust & Gold', artist: 'Desert Glass', artistId: 'a5', album: 'Wanderlust', albumId: 'al5', duration: 241, coverUrl: 'https://picsum.photos/seed/wanderlust/300/300' },
  { id: 't15', title: 'Horizon', artist: 'Desert Glass', artistId: 'a5', album: 'Wanderlust', albumId: 'al5', duration: 273, coverUrl: 'https://picsum.photos/seed/wanderlust/300/300' },
];

export const albums: Album[] = [
  { id: 'al1', title: 'Celestial', artist: 'Luna Waves', artistId: 'a1', coverUrl: 'https://picsum.photos/seed/celestial/300/300', year: 2024, genre: 'Indie Pop', tracks: tracks.filter(t => t.albumId === 'al1') },
  { id: 'al2', title: 'Endless Summer', artist: 'The Midnight', artistId: 'a2', coverUrl: 'https://picsum.photos/seed/endless/300/300', year: 2023, genre: 'Synthwave', tracks: tracks.filter(t => t.albumId === 'al2') },
  { id: 'al3', title: 'Northern Lights', artist: 'Aurora Sky', artistId: 'a3', coverUrl: 'https://picsum.photos/seed/northern/300/300', year: 2024, genre: 'Electronic', tracks: tracks.filter(t => t.albumId === 'al3') },
  { id: 'al4', title: 'Signal', artist: 'Neon Echo', artistId: 'a4', coverUrl: 'https://picsum.photos/seed/signal/300/300', year: 2023, genre: 'Indie Rock', tracks: tracks.filter(t => t.albumId === 'al4') },
  { id: 'al5', title: 'Wanderlust', artist: 'Desert Glass', artistId: 'a5', coverUrl: 'https://picsum.photos/seed/wanderlust/300/300', year: 2022, genre: 'Folk', tracks: tracks.filter(t => t.albumId === 'al5') },
];

export const playlists: Playlist[] = [
  {
    id: 'p1',
    name: 'Chill Vibes',
    description: 'The perfect soundtrack for winding down.',
    coverUrl: 'https://picsum.photos/seed/chill/300/300',
    createdBy: 'Soundwave',
    followers: 1_240_000,
    tracks: [tracks[0], tracks[3], tracks[7], tracks[8], tracks[12], tracks[13]],
  },
  {
    id: 'p2',
    name: 'Late Night Drive',
    description: 'Synthwave and retrowave for nocturnal wanderers.',
    coverUrl: 'https://picsum.photos/seed/latenight/300/300',
    createdBy: 'Soundwave',
    followers: 876_000,
    tracks: [tracks[4], tracks[5], tracks[6], tracks[1], tracks[9]],
  },
  {
    id: 'p3',
    name: 'Focus Flow',
    description: 'Stay in the zone with ambient soundscapes.',
    coverUrl: 'https://picsum.photos/seed/focus/300/300',
    createdBy: 'Soundwave',
    followers: 2_100_000,
    tracks: [tracks[7], tracks[8], tracks[3], tracks[14], tracks[13]],
  },
  {
    id: 'p4',
    name: 'Indie Anthems',
    description: 'The best of indie rock and alternative.',
    coverUrl: 'https://picsum.photos/seed/indie/300/300',
    createdBy: 'Soundwave',
    followers: 554_000,
    tracks: [tracks[9], tracks[10], tracks[11], tracks[0], tracks[1], tracks[2]],
  },
  {
    id: 'p5',
    name: 'Morning Ritual',
    description: 'Start your day with acoustic warmth.',
    coverUrl: 'https://picsum.photos/seed/morning/300/300',
    createdBy: 'Soundwave',
    followers: 320_000,
    tracks: [tracks[12], tracks[13], tracks[14], tracks[3]],
  },
  {
    id: 'p6',
    name: 'Party Mix',
    description: 'High energy tracks to keep the vibe going.',
    coverUrl: 'https://picsum.photos/seed/party/300/300',
    createdBy: 'You',
    followers: 0,
    tracks: [tracks[1], tracks[4], tracks[5], tracks[10], tracks[11]],
  },
];

export const featuredPlaylists = playlists.slice(0, 5);
export const recentTracks = [...tracks].sort(() => Math.random() - 0.5).slice(0, 6);
export const trendingTracks = tracks.slice(0, 8);
