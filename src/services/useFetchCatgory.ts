import { useEffect, useState } from "react";
import { getCatCategories } from ".";

export const useFetchCategory = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCatCategories();
      setData(categoriesData);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  return { data, isLoading };
};
