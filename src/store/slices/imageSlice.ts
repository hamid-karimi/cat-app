import {createAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Image, ImagesState} from '../types/images.types.d';

const initialState: ImagesState = {
  images: [],
};
export const revertAll = createAction('REVERT_ALL');
export const imageSlice = createSlice({
  name: 'images',
  initialState,
  extraReducers: (builder) => builder.addCase(revertAll, () => initialState),
  reducers: {
    setImagesData: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
  },
});

export const {setImagesData} = imageSlice.actions;
export default imageSlice.reducer;
