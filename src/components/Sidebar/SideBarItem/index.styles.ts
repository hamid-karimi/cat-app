import styled from "styled-components";

export const SidebarItemWrapper = styled.li`
  height: 50px;
  width: 100%;
  padding: 5px 0 5px 5px;
  cursor: pointer;

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    font-weight: bold;
  }

  &:before {
    counter-increment: li;
    content: counter(li, decimal-leading-zero);
    color: red;
    margin-right: 0.25em;
  }
`;
