import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface pinClickerState {
  input: string;
  userMessage: string;
  access: boolean;
}

const initialState: pinClickerState = {
  input: '',
  userMessage: '',
  access: false,
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
    confirmPin: (state) => {
      if (state.input === correctPin) {
        state.userMessage = 'Access granted';
        state.access = true;
      } else {
        state.userMessage = 'Access denied';
        state.access = false;
      }
    },
    deleteNumber: (state) => {
      state.input = state.input.slice(0);
    }
  },
});

export const pinClickerReducer = pinClickerSlice.reducer;
export const {addNumber, confirmPin, deleteNumber} = pinClickerSlice.actions;