import { getCatImagesByCategoryId } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "@/pages/home";

const ImgWrapper = styled.div`
  background-color: black;
  margin-bottom: 16px;
  border-radius: 8px;
  > img {
    height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
`;

export const CatImages = () => {
  const myContext = useContext(MyContext);
  const categoryId = myContext?.value;
  const limit = myContext.limit;

  const { isLoading, isError, isSuccess, data, isPreviousData } = useQuery(
    ["catImages", categoryId, limit],
    () => getCatImagesByCategoryId(categoryId, limit)
  );

  function handleLoadMore(): void {
    myContext?.updateLimit((Number(myContext.limit) + 10).toString());
  }

  return (
    <>
      {isSuccess &&
        data.map((image: any) => (
          <ImgWrapper key={image.id}>
            <img src={image.url} alt={image.id} />
          </ImgWrapper>
        ))}

      <button onClick={() => handleLoadMore()}>load more</button>
    </>
  );
};
