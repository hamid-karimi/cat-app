export interface ImageProps {
  url: string;
  id: string;
  width?: number;
  height?: number;
}

export interface Props {
  images: ImageProps[];
}
