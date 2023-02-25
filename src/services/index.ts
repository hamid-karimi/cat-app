import { useRequest } from "@/hooks/useRequest";
const request = useRequest();

export const getCatCategories = () => {
  const path = `categories`;
  return request.get(path);
};

export const getCatImagesByCategoryId = (
  categoryId: number | undefined,
  limit: string
) => {
  const path = `images/search`;
  return request.get(path, {
    category_ids: categoryId,
    limit: limit,
  });
};
