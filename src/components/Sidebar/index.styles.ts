import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 20%;
  height: 25vh;
  position: sticky;
  top: 5%;
`;

export const SideBarList = styled.ol`
  list-style-type: none;
  counter-reset: li;
  padding: 0 5px;
  margin: 0;
  width: 100%;
`;

export const LoadingIndicator = styled.span`
  display: block;
  text-align: center;
  margin-top: 20px;
`;
