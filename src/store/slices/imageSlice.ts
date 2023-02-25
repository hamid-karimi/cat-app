import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};
export interface ImagesState {
  images: Image[];
}

const initialState: ImagesState = {
  images: [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    setImagesData: (state, action: PayloadAction<Image[]>) => {
      return produce(state, (draftState) => {
        draftState.images.push(...action.payload);
      });
    },
  },
});

export const { setImagesData } = imageSlice.actions;
export default imageSlice.reducer;
export const revertAll = createAction("REVERT_ALL");
