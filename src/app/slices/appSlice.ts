import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isAlternative: localStorage.getItem('isAlternative') === 'true' ? true : false,
    backgroundImage: localStorage.getItem('backgroundImage') || 'bgimg1',
    isOpen: false,
  },
  reducers: {
    appAppearance: (state, action: PayloadAction<boolean>) => {
      state.isAlternative = action.payload;
      localStorage.setItem('isAlternative', action.payload.toString());
    },
    changeBackgroundImage: (state, action: PayloadAction<string>) => {
      state.backgroundImage = action.payload;
      localStorage.setItem('backgroundImage', action.payload);
    },
    openSettings: (state, action: PayloadAction<boolean>)=>{
      state.isOpen = action.payload
    },
  },
});


export const { appAppearance, changeBackgroundImage,openSettings } = appSlice.actions;

export default appSlice.reducer;
