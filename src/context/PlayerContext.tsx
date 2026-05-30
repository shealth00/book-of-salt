import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { Track, PlayerState, RepeatMode } from '../types';

type Action =
  | { type: 'PLAY_TRACK'; payload: { track: Track; queue: Track[] } }
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_TIME'; payload: number }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'CYCLE_REPEAT' }
  | { type: 'NEXT_TRACK' }
  | { type: 'PREV_TRACK' };

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  volume: 0.7,
  isMuted: false,
  isShuffle: false,
  repeat: 'off',
  queue: [],
  queueIndex: 0,
};

function nextRepeat(mode: RepeatMode): RepeatMode {
  if (mode === 'off') return 'all';
  if (mode === 'all') return 'one';
  return 'off';
}

function reducer(state: PlayerState, action: Action): PlayerState {
  switch (action.type) {
    case 'PLAY_TRACK': {
      const index = action.payload.queue.findIndex(t => t.id === action.payload.track.id);
      return {
        ...state,
        currentTrack: action.payload.track,
        queue: action.payload.queue,
        queueIndex: index >= 0 ? index : 0,
        isPlaying: true,
        currentTime: 0,
      };
    }
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_TIME':
      return { ...state, currentTime: action.payload };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload, isMuted: action.payload === 0 };
    case 'TOGGLE_MUTE':
      return { ...state, isMuted: !state.isMuted };
    case 'TOGGLE_SHUFFLE':
      return { ...state, isShuffle: !state.isShuffle };
    case 'CYCLE_REPEAT':
      return { ...state, repeat: nextRepeat(state.repeat) };
    case 'NEXT_TRACK': {
      if (!state.queue.length) return state;
      let nextIndex: number;
      if (state.isShuffle) {
        nextIndex = Math.floor(Math.random() * state.queue.length);
      } else {
        nextIndex = (state.queueIndex + 1) % state.queue.length;
      }
      return {
        ...state,
        queueIndex: nextIndex,
        currentTrack: state.queue[nextIndex],
        currentTime: 0,
        isPlaying: true,
      };
    }
    case 'PREV_TRACK': {
      if (!state.queue.length) return state;
      if (state.currentTime > 3) return { ...state, currentTime: 0 };
      const prevIndex = state.queueIndex === 0 ? state.queue.length - 1 : state.queueIndex - 1;
      return {
        ...state,
        queueIndex: prevIndex,
        currentTrack: state.queue[prevIndex],
        currentTime: 0,
        isPlaying: true,
      };
    }
    default:
      return state;
  }
}

interface PlayerContextValue {
  state: PlayerState;
  playTrack: (track: Track, queue?: Track[]) => void;
  togglePlay: () => void;
  setTime: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const playTrack = useCallback((track: Track, queue: Track[] = [track]) => {
    dispatch({ type: 'PLAY_TRACK', payload: { track, queue } });
  }, []);

  const togglePlay = useCallback(() => dispatch({ type: 'TOGGLE_PLAY' }), []);
  const setTime = useCallback((time: number) => dispatch({ type: 'SET_TIME', payload: time }), []);
  const setVolume = useCallback((vol: number) => dispatch({ type: 'SET_VOLUME', payload: vol }), []);
  const toggleMute = useCallback(() => dispatch({ type: 'TOGGLE_MUTE' }), []);
  const toggleShuffle = useCallback(() => dispatch({ type: 'TOGGLE_SHUFFLE' }), []);
  const cycleRepeat = useCallback(() => dispatch({ type: 'CYCLE_REPEAT' }), []);
  const nextTrack = useCallback(() => dispatch({ type: 'NEXT_TRACK' }), []);
  const prevTrack = useCallback(() => dispatch({ type: 'PREV_TRACK' }), []);

  return (
    <PlayerContext.Provider value={{ state, playTrack, togglePlay, setTime, setVolume, toggleMute, toggleShuffle, cycleRepeat, nextTrack, prevTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
