import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CatImages } from "@/components/CatImages";
import { useFetchImages } from "@/services/useFetchImages";

jest.mock("@/services/useFetchImages", () => ({
  useFetchImages: jest.fn(() => ({
    data: true,
    imagesData: [
      [
        {
          id: "oc",
          url: "https://cdn2.thecatapi.com/images/oc.jpg",
          width: 600,
          height: 200,
        },
      ],
    ],
    isLoading: false,
    error: null,
  })),
}));

describe.only("CatImagess", () => {
  it("should render images", async () => {
    render(<CatImages />);

    const image = await screen.findByAltText("oc");
    expect(image).toBeInTheDocument();
  });

  it("should button is disabled when load the data", () => {
    (useFetchImages as jest.Mock).mockReturnValueOnce({
      data: true,
      imagesData: [
        [
          {
            id: "4s4",
            url: "https://cdn2.thecatapi.com/images/oc.jpg",
            width: 555,
            height: 222,
          },
        ],
      ],
      isLoading: true,
      error: null,
    });

    render(<CatImages />);
    const button = screen.getByTestId("loadmore-button");
    expect(button).toHaveAttribute("disabled");
  });

  it("should button is disabled after click on load more", () => {
    (useFetchImages as jest.Mock).mockReturnValueOnce({
      data: true,
      imagesData: [
        [
          {
            id: "4s4",
            url: "https://cdn2.thecatapi.com/images/oc.jpg",
            width: 555,
            height: 222,
          },
        ],
      ],
      isLoading: false,
      error: null,
    });
    const { rerender } = render(<CatImages />);
    const button = screen.getByTestId("loadmore-button");
    fireEvent.click(button);

    (useFetchImages as jest.Mock).mockReturnValueOnce({
      data: true,
      imagesData: [
        [
          {
            id: "4s4",
            url: "https://cdn2.thecatapi.com/images/oc.jpg",
            width: 555,
            height: 222,
          },
        ],
      ],
      isLoading: true,
      error: null,
    });
    rerender(<CatImages />);
    expect(button).toHaveAttribute("disabled");
  });

  it("should show loading indicator when images are still loading", async () => {
    (useFetchImages as jest.Mock).mockReturnValueOnce({
      data: true,
      imagesData: [],
      isLoading: true,
      error: null,
    });

    render(<CatImages />);

    const loadingIndicator = await screen.findByText("Images Loading...");
    expect(loadingIndicator).toBeInTheDocument();
  });

  it("should show error message when there is an error loading images", async () => {
    (useFetchImages as jest.Mock).mockReturnValueOnce({
      data: true,
      imagesData: [],
      isLoading: false,
      error: "Error loading images",
    });

    render(<CatImages />);

    const errorMessage = await screen.findByText("Error loading images");
    expect(errorMessage).toBeInTheDocument();
  });
});
