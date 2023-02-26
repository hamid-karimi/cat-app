import {ReactNode} from 'react';

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled: boolean;
  dataTestId: string;
}
