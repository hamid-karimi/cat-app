import { getCatCategories } from "@/services";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategoryId } from "@/store/slices/categorySlice";
import { revertAll } from "@/store/slices/imageSlice";
import { useEffect, useState } from "react";
import { useFetchCategory } from "@/services/useFetchCatgory";

const SidebarWrapper = styled.aside`
  width: 20%;
  height: 25vh;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
`;

const SideBarList = styled.ol`
  list-style-type: none;
  counter-reset: li;
  padding: 0 5px;
  margin: 0;
  width: 100%;
`;

const SidebarItem = styled.li`
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    font-weight: bold;
  }

  height: 50px;
  width: 100%;
  padding: 5px 0 5px 5px;
  cursor: pointer;
  &:before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero);
    color: red;
    margin-right: 0.25em;
  }
`;

export const Sidebar = () => {
  const { data, isLoading } = useFetchCategory();

  const dispatch = useDispatch();
  const selectCategory = (id: string) => {
    dispatch(revertAll());
    dispatch(setCategoryId(id));
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <SidebarWrapper>
      <SideBarList>
        {data?.length > 0 &&
          data?.map((category: any) => (
            <SidebarItem
              key={category.id}
              onClick={() => selectCategory(category.id)}>
              <span>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </span>
            </SidebarItem>
          ))}
      </SideBarList>
    </SidebarWrapper>
  );
};
