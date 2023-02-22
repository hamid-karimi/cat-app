import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type image = {
  id: string;
  url: string;
  width: number;
  height: number;
};
export interface ImagesState {
  images: image[];
}

const initialState: ImagesState = {
  images: [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    setImagesData: (state, action: PayloadAction<image>) => {
      state.images.push(action.payload);
    },
  },
});

export const { setImagesData } = imageSlice.actions;
export default imageSlice.reducer;
export const revertAll = createAction("REVERT_ALL");
