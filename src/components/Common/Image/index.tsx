import * as Styled from "./index.styles";
import { ImageProps } from "@/components/types/images.types";

const Image: React.FC<ImageProps> = ({ url, id, width, height }) => {
  return (
    <Styled.ImgWrapper>
      <img loading='lazy' src={url} alt={id} width={width} height={height} />
    </Styled.ImgWrapper>
  );
};

export default Image;
