import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Sound {
  isPlaying: boolean;
  volume: number;
}

type SoundState = Record<string, Sound>;

const initialState: SoundState = {};

const audioCache: Record<string, HTMLAudioElement> = {};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<string>) => {
      const sound = action.payload;
      const soundState = state[sound] || { isPlaying: false, volume: 1 };
      const isPlaying = soundState.isPlaying;

      if (isPlaying) {
        const audio = audioCache[sound];
        audio?.pause();
      } else {
        let audio = audioCache[sound];
        if (!audio) {
          audio = new Audio(require(`../../sounds/${sound}.ogg`));
          audioCache[sound] = audio;
        }
        audio.id = sound;
        audio.loop = true;
        audio.volume = soundState.volume;
        audio.play();
      }

      state[sound] = {
        isPlaying: !isPlaying,
        volume: soundState.volume,
      };
    },

    changeVol: (state, action: PayloadAction<{ sound: string; volume: number }>) => {
      const { sound, volume } = action.payload;
      const soundState = state[sound] || { isPlaying: false, volume: 0.5 };
      const isPlaying = soundState.isPlaying;

      const audio = audioCache[sound];
      if (isPlaying && audio) {
        audio.volume = volume;
      }

      state[sound] = {
        isPlaying,
        volume,
      };
    },
  },
});

export const { play, changeVol } = soundSlice.actions;

export default soundSlice.reducer;
