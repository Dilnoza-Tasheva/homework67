import { configureStore } from '@reduxjs/toolkit';
import { pinClickerReducer } from '../Containers/pinClickerSlice.ts';


export const store = configureStore({
  reducer: {
    pinClicker: pinClickerReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;