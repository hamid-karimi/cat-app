import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { useFetchImages } from "@/services/useFetchImages";
import { CatImages } from "../Images";

jest.mock("@/services/useFetchImages");

describe("CatImages", () => {
  it("should render loading state when fetching images", () => {
    (useFetchImages as jest.Mock).mockReturnValue({
      data: undefined,
      imagesData: [],
      isLoading: true,
    });

    const { getByText } = render(<CatImages />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("should render images when images are fetched", async () => {
    (useFetchImages as jest.Mock).mockReturnValue({
      data: ["cat", "kitten"],
      imagesData: [
        [{ id: "1", url: "https://catimage1.com" }],
        [{ id: "2", url: "https://catimage2.com" }],
      ],
      isLoading: false,
    });

    const { getByAltText } = render(<CatImages />);

    await waitFor(() => {
      expect(getByAltText("1")).toBeInTheDocument();
      expect(getByAltText("2")).toBeInTheDocument();
    });
  });

  it('should call handleLoadMore when the "load more" button is clicked', () => {
    const handleLoadMore = jest.fn();
    (useFetchImages as jest.Mock).mockReturnValue({
      data: ["cat", "kitten"],
      imagesData: [
        [{ id: "1", url: "https://catimage1.com" }],
        [{ id: "2", url: "https://catimage2.com" }],
      ],
      isLoading: false,
    });

    const { getByRole } = render(<CatImages />);
    const button = getByRole("button", { name: "load more" });

    fireEvent.click(button);

    expect(handleLoadMore).toHaveBeenCalledTimes(1);
  });
});
