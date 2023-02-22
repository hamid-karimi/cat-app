import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatImagesByCategoryId } from ".";
import { setImagesData } from "@/store/slices/imageSlice";

export const useFetchImages = (limit: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.category.id);
  const imagesData = useSelector((state: RootState) => state.image.images);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesData = await getCatImagesByCategoryId(categoryId, limit);
      setData(imagesData);
      setIsLoading(false);
    };

    fetchImages();
  }, [categoryId, limit]);

  useEffect(() => {
    if (data?.length > 0) dispatch(setImagesData(data));
  }, [data, dispatch]);

  return { data, imagesData, isLoading };
};
