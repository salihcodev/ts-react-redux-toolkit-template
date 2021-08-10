import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncCall } from './logic/async-call.sliceLogic';
import { InitialStateTypes } from './../../../common/interfaces/slices/initial/initial.interface';

// CONFIGURE THE INITIAL STATE::
const initialState: InitialStateTypes = {
  val: 0,
  stage: `idle`,
  failureMsg: null,
};

// CREATE THE SLICE OF THE `Initial`::
export const initialSlice = createSlice({
  name: `initialSlice`,
  initialState,
  reducers: {
    increment: (state) => {
      state.val += 1;
    },
    decrement: (state) => {
      state.val -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.val += action.payload;
    },
  },

  // ADD EXTRA REDUCERS::
  extraReducers: (builder) => {
    builder
      .addCase(asyncCall.pending, (state) => {
        state.stage = `busy`;
      })
      .addCase(asyncCall.fulfilled, (state) => {
        state.stage = `idle`;
        state.val += 100;
      })
      .addCase(asyncCall.rejected, (state, action) => {
        state.stage = `failed`;
        state.failureMsg = `Failed to count, ${action.payload}`;
      });
  },
});

// EXPORT THE ACTIONS::
export const { increment, decrement, incrementByAmount } = initialSlice.actions;

// EXPORT THE `Initial` REDUCER::
export default initialSlice.reducer;
