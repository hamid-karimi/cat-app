import {Sidebar} from '@/components/Sidebar';
import {CatImages} from '@/components/CatImages';
import * as Styled from './index.styles';
const HomePage = () => {
  document.title = 'Beautiful Cats';
  return (
    <>
      <Styled.GlobalStyles />
      <Styled.Container>
        <Sidebar />
        <CatImages />
      </Styled.Container>
    </>
  );
};

export default HomePage;
