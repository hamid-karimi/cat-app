import { renderHook } from "@testing-library/react-hooks";
import { useFetchImages } from "../useFetchImages";
import { RootState } from "@/store/store";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { store } from "@/store/store";
import { getCatImagesByCategoryId } from "..";

jest.mock("./index", () => ({
  getCatImagesByCategoryId: jest.fn(),
}));

const mockStore = configureMockStore([thunk]);

describe("useFetchImages", () => {
  const limit = "10";
  const categoryId = "1";

  it("should fetch and set images data", async () => {
    const imagesData = [
      { id: "1", url: "http://example.com/image1.jpg" },
      { id: "2", url: "http://example.com/image2.jpg" },
    ];
    const store = mockStore({
      category: { id: categoryId },
      image: { images: [] },
    } as RootState);

    (getCatImagesByCategoryId as jest.Mock).mockResolvedValue(imagesData);

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchImages(limit),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(imagesData);
    expect(result.current.imagesData).toEqual(imagesData);
    expect(store.getActions()).toEqual([
      { type: "image/setImagesData", payload: imagesData },
    ]);
  });

  it("should handle empty images data", async () => {
    const store = mockStore({
      category: { id: categoryId },
      image: { images: [] },
    } as RootState);

    (getCatImagesByCategoryId as jest.Mock).mockResolvedValue([]);

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchImages(limit),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual([]);
    expect(result.current.imagesData).toEqual([]);
    expect(store.getActions()).toEqual([]);
  });

  it("should handle errors", async () => {
    const error = new Error("Failed to fetch images");
    const store = mockStore({
      category: { id: categoryId },
      image: { images: [] },
    } as RootState);

    (getCatImagesByCategoryId as jest.Mock).mockRejectedValue(error);

    const { result, waitForNextUpdate } = renderHook(
      () => useFetchImages(limit),
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      }
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(result.current.imagesData).toEqual([]);
    expect(store.getActions()).toEqual([]);
  });
});
function waitForNextUpdate() {
  throw new Error("Function not implemented.");
}
