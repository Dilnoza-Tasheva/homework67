import { createSlice } from '@reduxjs/toolkit';

interface pinClickerState {
  input: string;
}

const initialState: pinClickerState = {
  input: '',
};

const correctPin = '2005';

export const pinClickerSlice = createSlice({
  name: 'pinClicker',
  initialState,
  reducers: {

  },
});

export const pinClickerReducer = pinClickerSlice.reducer;

export const {} = pinClickerSlice.actions;