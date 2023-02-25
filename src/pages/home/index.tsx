import { Sidebar } from "@/components/Sidebar";
import { CatImages } from "@/components/CatImages";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <CatImages />
      </Container>
    </>
  );
};

export default HomePage;
