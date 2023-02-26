import {SidebarItem} from './SideBarItem';
import * as Styled from './index.styles';
import {Category} from './SideBarItem/index.types';
import {useDispatch} from 'react-redux';
import {setCategoryId} from '@/store/slices/categorySlice';
import {revertAll} from '@/store/slices/imageSlice';
import {useFetchCategory} from '@/services/useFetchCatgory';

export const Sidebar = () => {
  const {data, isLoading, error} = useFetchCategory();

  const dispatch = useDispatch();

  const selectCategory = (id: number) => {
    dispatch(revertAll());
    dispatch(setCategoryId(id));
  };

  if (isLoading)
    return (
      <Styled.LoadingIndicator>Categories Loading ...</Styled.LoadingIndicator>
    );
  if (error) return <span>Error: {error.message}</span>;

  return (
    <Styled.SidebarWrapper>
      <Styled.SideBarList>
        {data &&
          data?.map((category: Category) => (
            <SidebarItem
              key={category.id}
              category={category}
              onClick={() => selectCategory(category.id)}
            />
          ))}
      </Styled.SideBarList>
    </Styled.SidebarWrapper>
  );
};
