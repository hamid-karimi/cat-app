import * as Styled from "./index.styles";
import { ButtonProps } from "./index.types.d";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  dataTestId,
  disabled,
}) => {
  return (
    <Styled.ButtonWrapper
      data-testid={dataTestId}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </Styled.ButtonWrapper>
  );
};

export default Button;
