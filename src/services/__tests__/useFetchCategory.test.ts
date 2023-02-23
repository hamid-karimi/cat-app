import { renderHook } from "@testing-library/react-hooks";
import { useFetchCategory } from "../useFetchCatgory";
import { getCatCategories } from "..";

describe("useFetchCategory", () => {
  test("should return categories data", async () => {
    const mockCategoriesData = [
      { id: "1", name: "category1" },
      { id: "2", name: "category2" },
    ];

    (getCatCategories as jest.Mock).mockResolvedValue(mockCategoriesData);

    const { result, waitForNextUpdate } = renderHook(() => useFetchCategory());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockCategoriesData);
  });
});
