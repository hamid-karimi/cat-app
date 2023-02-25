export type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export interface FetchImagesResult {
  data: Image[];
  imagesData: any[];
  isLoading: boolean;
  error: string | null;
}
