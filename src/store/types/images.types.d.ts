export type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};
export interface ImagesState {
  images: Image[];
}
