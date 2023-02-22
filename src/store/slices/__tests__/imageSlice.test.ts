import { configureStore } from "@reduxjs/toolkit";
import reducer, { ImagesState, setImagesData, revertAll } from "../imageSlice";

const IMAGES_MOCK = {
  id: "rh",
  url: "https://cdn2.thecatapi.com/images/rh.jpg",
  width: 500,
  height: 375,
};

describe("imageSlice", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer });
  });

  test("should add images to the state", () => {
    const imagesData = IMAGES_MOCK;

    store.dispatch(setImagesData(imagesData));

    const actualResult = store.getState().images.images;
    const expectedResult = [imagesData];

    expect(actualResult).toEqual(expectedResult);
  });

  test("should revert state to initial state", () => {
    store.dispatch(setImagesData(IMAGES_MOCK));
    store.dispatch(revertAll());

    const actualResult = store.getState().images as ImagesState;
    const expectedResult = {
      images: [],
    };

    expect(actualResult).toEqual(expectedResult);
  });
});