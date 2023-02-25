import { useState } from "react";
import * as Styled from "./index.styles";
import { v4 as uuidv4 } from "uuid";
import { useFetchImages } from "@/services/useFetchImages";
import Button from "@/components/Common/Button";
import Image from "@/components/Common/Image";
import { ImageProps } from "@/components/types/images.types";

export const CatImages = () => {
  const [limit, setLimit] = useState("10");
  const { data, imagesData, isLoading, error } = useFetchImages(limit);

  const handleLoadMore = () => {
    const newLimit = (+limit + 10).toString();
    setLimit(newLimit);
  };

  if (error) return <span>Error loading images</span>;
  if (isLoading && imagesData.length === 0)
    return <Styled.LoadingIndicator>Images Loading...</Styled.LoadingIndicator>;

  return (
    <Styled.Container>
      <Styled.ImagesContainer>
        {imagesData.flatMap((images) => {
          return images.map((image: ImageProps) => {
            return (
              <Image
                key={uuidv4()}
                url={image.url}
                id={image.id}
                width={image.width}
                height={image.height}
              />
            );
          });
        })}
      </Styled.ImagesContainer>
      {isLoading && (
        <Styled.LoadingIndicator>Load more images...</Styled.LoadingIndicator>
      )}
      {data && (
        <Button
          dataTestId='loadmore-button'
          onClick={() => handleLoadMore()}
          disabled={isLoading}>
          {isLoading ? "LOADING" : "Load more"}
        </Button>
      )}
    </Styled.Container>
  );
};
