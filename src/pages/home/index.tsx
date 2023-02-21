import { getCatCategories, getCatImagesByCategoryId } from "@/services";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const {
    isLoading: catCategoriesLoading,
    isError: catCategoriesError,
    data: catCategoriesData,
    isPreviousData: catCategoriesPerivousData,
  } = useQuery(["catCategories"], getCatCategories);

  const categoryId = "1",
    limit = "10";

  const {
    isLoading: catImagesLoading,
    isError: catImagesError,
    data: catImagesData,
    isPreviousData: catImagesPreviousData,
  } = useQuery(["catImages", categoryId, limit], () =>
    getCatImagesByCategoryId(categoryId, limit)
  );

  if (catCategoriesData && catImagesData) {
    console.log("CATEGORIES", catCategoriesData);
    console.log("IMAGES", catImagesData);
  }

  return (
    <div>
      <h1>asghar</h1>
    </div>
  );
};

export default HomePage;
