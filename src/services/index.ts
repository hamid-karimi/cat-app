import LRUCache from "lru-cache";
import { useRequest } from "@/hooks/useRequest";

const request = useRequest();

const cache = new LRUCache({
  max: 100,
  ttl: 1000 * 60 * 60, // cache for 1 hour
});

export const fetchData = async (
  url: string,
  category_ids?: string,
  limit?: string
) => {
  const cachedData = cache.get(url);
  if (cachedData) {
    return cachedData;
  }

  try {
    const { data } = await request.get(url, {
      category_ids: category_ids,
      limit: limit,
    });
    cache.set(url, data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

export const getCatCategories = async () => {
  const url = `categories`;
  return await fetchData(url);
};

export const getCatImagesByCategoryId = async (
  categoryId: string,
  limit: string
) => {
  const url = `images/search`;
  return await fetchData(url, categoryId, limit);
};
