import styled from "styled-components";
import { BackgroundProps } from "./index.types.d";

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  background-color: black;
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.8);

    > span {
      margin-bottom: 5px;
    }

    > a {
      color: #0f9d58;
      cursor: pointer;
      padding: 2px;
      transition: color 0.2s ease;

      &:hover {
        color: #1a73e8;
      }
    }

    @media only screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;
