import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useFetchImages } from "@/services/useFetchImages";

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 15px;
  width: 70%;
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

export const CatImages = () => {
  const [limit, setLimit] = useState("10");
  const { data, imagesData, isLoading } = useFetchImages(limit);

  const handleLoadMore = () => {
    setLimit((+limit + 10).toString());
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <ImagesContainer>
        {data?.length > 0 &&
          imagesData.flatMap((images) => {
            return images.map((image: { id: string; url: string }) => {
              return (
                <ImgWrapper key={uuidv4()}>
                  <img loading='lazy' src={image.url} alt={image.id} />
                </ImgWrapper>
              );
            });
          })}
        <button onClick={() => handleLoadMore()}>load more</button>
      </ImagesContainer>
    </>
  );
};
