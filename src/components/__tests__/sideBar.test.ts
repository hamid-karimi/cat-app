import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Sidebar } from "@/components/Sidebar";
import { useFetchCategory } from "@/services/useFetchCatgory";

jest.mock("@/services/useFetchCatgory");

describe("Sidebar", () => {
  const mockData = [
    { id: "1", name: "category 1" },
    { id: "2", name: "category 2" },
    { id: "3", name: "category 3" },
  ];

  beforeEach(() => {
    (useFetchCategory as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render category names correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    mockData.forEach((category) => {
      const categoryElement = getByText(
        category.name.charAt(0).toUpperCase() + category.name.slice(1)
      );
      expect(categoryElement).toBeInTheDocument();
    });
  });

  it("should dispatch the correct actions when a category is clicked", () => {
    const { getByText, store } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    const firstCategoryElement = getByText(
      mockData[0].name.charAt(0).toUpperCase() + mockData[0].name.slice(1)
    );

    fireEvent.click(firstCategoryElement);

    expect(store.getActions()).toEqual([
      { type: "image/revertAll" },
      { type: "category/setCategoryId", payload: mockData[0].id },
    ]);
  });
});
