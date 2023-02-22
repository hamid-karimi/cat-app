import { getCatCategories, getCatImagesByCategoryId } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "@/pages/home";

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: gray; */
  min-height: calc(100vh);
`;

const SidebarItem = styled.div`
  height: 48px;
  width: 100%;
  padding: 0 24px;
  border-bottom: 1px solid blue;
  cursor: pointer;
  &:last-child {
    border-bottom: none !important;
  }
`;

export const Sidebar = () => {
  const { isLoading, isError, isSuccess, data, isPreviousData } = useQuery(
    ["catCategories"],
    getCatCategories
  );

  const myContext = useContext(MyContext);
  function selectCategory(id: string): void {
    myContext?.updateCategoryValue(id);
  }

  return (
    <SidebarWrapper>
      {isSuccess &&
        data.map((category: any) => (
          <SidebarItem
            key={category.id}
            onClick={() => selectCategory(category.id)}>
            <span>{category.name}</span>
          </SidebarItem>
        ))}
    </SidebarWrapper>
  );
};
