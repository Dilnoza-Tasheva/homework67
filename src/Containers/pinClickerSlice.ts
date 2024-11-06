import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },

  },
});

export const pinClickerReducer = pinClickerSlice.reducer;
export const {addNumber} = pinClickerSlice.actions;