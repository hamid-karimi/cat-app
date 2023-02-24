import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCategoryId } from "@/store/slices/categorySlice";
import { revertAll } from "@/store/slices/imageSlice";
import { useFetchCategory } from "@/services/useFetchCatgory";

interface Category {
  id: string;
  name: string;
}

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

const SidebarItemWrapper = styled.li`
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

const SidebarItem = ({
  category,
  onClick,
}: {
  category: Category;
  onClick: () => void;
}) => {
  return (
    <SidebarItemWrapper onClick={onClick}>
      <span>
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </span>
    </SidebarItemWrapper>
  );
};

export const Sidebar = () => {
  const { data, isLoading, error } = useFetchCategory();

  const dispatch = useDispatch();

  const selectCategory = (id: string) => {
    dispatch(revertAll());
    dispatch(setCategoryId(id));
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <SidebarWrapper>
      <SideBarList>
        {data &&
          data.map((category: Category) => (
            <SidebarItem
              key={category.id}
              category={category}
              onClick={() => selectCategory(category.id)}
            />
          ))}
      </SideBarList>
    </SidebarWrapper>
  );
};
