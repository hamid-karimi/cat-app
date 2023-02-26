import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: #ff4081;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 20px 0;
  width: 70%;

  @media only screen and (max-width: 600px) {
    padding: 0.5rem;
  }

  &:hover {
    background-color: #f50057;
  }
`;
