import React, { forwardRef } from 'react';
import * as S from './index.style';

interface IProps {
  text?: string;
  onClick?(): void;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ text, onClick }, ref) => {
    return (
      <S.Container ref={ref} onClick={onClick}>
        {text}
      </S.Container>
    );
  }
);

export default Button;
