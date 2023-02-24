import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatImagesByCategoryId } from ".";
import { setImagesData } from "@/store/slices/imageSlice";

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

interface FetchImagesResult {
  data: Image[];
  imagesData: any[];
  isLoading: boolean;
  error: string | null;
}

export const useFetchImages = (limit: string): FetchImagesResult => {
  const [data, setData] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.category.id);
  const imagesData = useSelector((state: RootState) => state.image.images);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = await getCatImagesByCategoryId(categoryId, limit);
        setData(imagesData);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching images.");
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [categoryId, limit]);

  useEffect(() => {
    if (data?.length > 0) dispatch(setImagesData(data));
  }, [data, dispatch]);

  return { data, imagesData, isLoading, error };
};
