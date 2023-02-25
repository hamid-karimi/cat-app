import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  id: number | undefined;
}

const initialState: CategoryState = {
  id: undefined,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
