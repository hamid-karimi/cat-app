import configureStore from 'redux-mock-store';
import {RootState} from '@/store/store';
import imageReducer, {setImagesData, revertAll} from '../imageSlice';
import {ImagesState} from '@/store/types/images.types';

const mockStore = configureStore<RootState>();

describe('imageSlice', () => {
  let store: ReturnType<typeof mockStore>;

  let initialState: ImagesState;
  beforeEach(() => {
    initialState = {
      images: [],
    };
    store = mockStore({
      category: {id: 1},
      image: {images: []},
    });
  });

  it('should return the initial state', () => {
    const nextState = imageReducer(initialState, {type: 'unknown'});
    expect(nextState).toEqual(initialState);
  });

  it('should handle setImageData', () => {
    const image = {
      id: 'j',
      url: 'https://24.media.tumblr.com/tumblr_krwvxh6KLK1qa9hjso1_1280.jpg',
      width: 1002,
      height: 720,
    };
    const nextState = imageReducer(initialState, setImagesData(image));
    expect(nextState.images).toEqual([image]);
  });
  it('should revert all images', () => {
    store.dispatch(revertAll());

    expect(store.getState().image.images).toEqual([]);
  });
});
