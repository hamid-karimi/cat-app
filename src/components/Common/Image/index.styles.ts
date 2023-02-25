import styled from "styled-components";

export const ImgWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-bottom: 60%;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
    border-radius: inherit;
    background-color: #f2f2f2;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
