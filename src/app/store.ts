import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import soundReducer from './slices/soundSlice';

export const store = configureStore({
  reducer: {
    sound: soundReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
