import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 50px;
  align-items: center;
`;
export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-auto-rows: minmax(100px, auto);
  gap: 15px;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 5%;
`;
export const LoadingIndicator = styled.span`
  display: block;
  text-align: center;
  margin-top: 20px;
`;
