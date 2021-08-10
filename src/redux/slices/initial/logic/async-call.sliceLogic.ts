import { createAsyncThunk } from '@reduxjs/toolkit';

// SLICE LOGICS::
// mimic async call
export function mkAsync() {
  return new Promise<{ data: number }>((resolve) => setTimeout(() => resolve({ data: 500 }), 800));
}

// trigger the call
export const asyncCall = createAsyncThunk(`asyncMimic`, async (_, { rejectWithValue }) => {
  try {
    const res = await mkAsync();
    return res.data;
  } catch (err) {
    // if it failed
    // this error message gonna be returned to the `action.payload`
    return rejectWithValue(err.response.data);
  }
});
