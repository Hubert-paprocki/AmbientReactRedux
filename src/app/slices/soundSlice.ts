import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SoundState {
  [key: string]: boolean;
}

const initialState: SoundState = {};

// Create an object to cache Audio objects
const audioCache: Record<string, HTMLAudioElement> = {};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<string>) => {
      const sound = action.payload;
      if (state[sound]) {
        const audio = audioCache[sound];
        if (audio) {
          audio.pause();
        }
      } else {
        let audio = audioCache[sound];
        if (!audio) {
          audio = new Audio(require(`../../sounds/${sound}.ogg`));
          audioCache[sound] = audio;
        }
        audio.id = sound;
        audio.loop = true;
        audio.play();
      }
      state[sound] = !state[sound];
    },
  },
});

export const { play } = soundSlice.actions;
export default soundSlice.reducer;
