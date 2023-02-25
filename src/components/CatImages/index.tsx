import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useFetchImages } from "@/services/useFetchImages";

type images = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 15px;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 5%;
`;
const ImgWrapper = styled.div`
  background-color: black;
  margin-bottom: 16px;
  border-radius: 8px;

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: 0.3s ease;
    border-radius: 8px;
  }

  &:hover img {
    transform: scale(1.15);
  }
`;

const LoadMoreButton = styled.button`
  width: 50%;
  height: 30px;
  padding: 20px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;

const LoadingIndicator = styled.span`
  display: block;
  text-align: center;
  margin-top: 20px;
`;

export const CatImages = () => {
  const [limit, setLimit] = useState("10");
  const { data, imagesData, isLoading, error } = useFetchImages(limit);

  const handleLoadMore = () => {
    const newLimit = (+limit + 10).toString();
    setLimit(newLimit);
  };

  if (error) return <span>Error loading images</span>;
  if (isLoading && imagesData.length === 0)
    return <LoadingIndicator>Images Loading...</LoadingIndicator>;

  return (
    <Container>
      <ImagesContainer>
        {imagesData.flatMap((images) => {
          return images.map((image: images) => {
            return (
              <ImgWrapper key={uuidv4()}>
                <img loading='lazy' src={image.url} alt={image.id} />
              </ImgWrapper>
            );
          });
        })}
      </ImagesContainer>
      {isLoading && <LoadingIndicator>Load more images...</LoadingIndicator>}
      {data && (
        <LoadMoreButton
          data-testid='loadmore-button'
          onClick={() => handleLoadMore()}
          disabled={isLoading}>
          {isLoading ? "LOADING" : "Load more"}
        </LoadMoreButton>
      )}
    </Container>
  );
};
