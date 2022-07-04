import React from 'react';
import styled from 'styled-components';
import { useGetStore } from '@/hooks';

const STDContainer = styled.div`
  height: 100vh;
  background-color: blue;
`;

const test = () => {
  const { test } = useGetStore.home();

  return <STDContainer>test {`${test}`}</STDContainer>;
};

export default test;
