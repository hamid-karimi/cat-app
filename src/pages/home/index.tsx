import { createContext, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CatImages } from "@/components/Images";

interface MyContextType {
  value: string;
  updateCategoryValue: (newValue: string) => void;
  limit: string;
  updateLimit: (newValue: string) => void;
}

export const MyContext = createContext<MyContextType>({
  value: "",
  updateCategoryValue: () => {},
  limit: "10",
  updateLimit: () => {},
});

const HomePage = () => {
  const [value, setValue] = useState<string>("1");
  const [limit, setLimit] = useState<string>("10");

  const updateCategoryValue = (newValue: string) => {
    setValue(newValue);
  };

  const updateLimit = (newValue: string) => {
    setLimit(newValue);
  };

  return (
    <div>
      <MyContext.Provider
        value={{ value, updateCategoryValue, limit, updateLimit }}>
        <Sidebar />
        <CatImages />
      </MyContext.Provider>
    </div>
  );
};

export default HomePage;
