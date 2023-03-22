import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SoundState {
  [key: string]: boolean;
}

const initialState: SoundState = {};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<string>) => {
      const sound = action.payload;
      if (state[sound]) {
        const audio = document.getElementById(sound) as HTMLAudioElement;
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      } else {

        const audio = new Audio(`../../sounds/${sound}.ogg`);
        audio.id = sound;
        audio.loop = true;
        audio.play();
        console.log(audio);
      }
      state[sound] = !state[sound];
    },
  },
});

export const { play } = soundSlice.actions;
export default soundSlice.reducer;
