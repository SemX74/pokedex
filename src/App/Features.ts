import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pockemon } from "../Services/Interfaces";

export interface PockemonState {
  value: Pockemon[];
}

const initialState: PockemonState = {
  value: [],
};

export const pockemonSlice = createSlice({
  name: "pockemon",
  initialState,
  reducers: {
    addPockemon: (state, action: PayloadAction<Pockemon>) => {
      state.value.push(action.payload);
    },
    clearPockemons: (state) => {
      state.value.splice(0, 12);
    },
    cutPockemons: (state) => {
      state.value.splice(12, 12);
    },
  },
});

export const { addPockemon, clearPockemons } = pockemonSlice.actions;

export default pockemonSlice.reducer;
