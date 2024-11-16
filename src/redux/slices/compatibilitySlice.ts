import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompatibilityState {
  name1: string;
  name2: string;
  result: string | null;
}

const initialState: CompatibilityState = {
  name1: "",
  name2: "",
  result: null,
};

const compatibilitySlice = createSlice({
  name: "compatibility",
  initialState,
  reducers: {
    setNames: (state, action: PayloadAction<{ name1: string; name2: string }>) => {
      state.name1 = action.payload.name1;
      state.name2 = action.payload.name2;
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
  },
});

export const { setNames, setResult } = compatibilitySlice.actions;
export default compatibilitySlice.reducer;
