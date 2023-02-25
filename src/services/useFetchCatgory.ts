import { useEffect, useState } from "react";
import { getCatCategories } from ".";
import { Category } from "./types/category.types.d";

export const useFetchCategory = () => {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCatCategories();
        setData(categoriesData);
        setIsLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return { data, isLoading, error };
};
