import backgroundImageAddress from "@/assets/images/lost.png";
import { useNavigate } from "react-router-dom";
import * as Styled from "./index.styles";

const ErrorPage = () => {
  document.title = "Error";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Styled.Background imageSrc={backgroundImageAddress}>
      <div>
        <span>YOU ARE LOST!!!</span>
        <span>Something goes wrong</span>
        <a href='' onClick={handleClick}>
          Back to Home
        </a>
      </div>
    </Styled.Background>
  );
};

export default ErrorPage;
