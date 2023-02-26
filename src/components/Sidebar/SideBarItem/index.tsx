import {Category} from './index.types';
import * as Styled from './index.styles';

export const SidebarItem = ({
  category,
  onClick,
}: {
  category: Category;
  onClick: () => void;
}) => {
  return (
    <Styled.SidebarItemWrapper onClick={onClick}>
      <span>
        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
      </span>
    </Styled.SidebarItemWrapper>
  );
};
