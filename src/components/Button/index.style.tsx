import styled from 'styled-components';

import { color, mixins } from '@/styles';

export const Container = styled.button`
  ${mixins.flexSet()}
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 1.875rem;
  border: 0.0625rem solid ${color.gray[850]};
  ${mixins.buttonTransition()}
`;
