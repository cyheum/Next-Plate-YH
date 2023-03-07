import { NextPage } from 'next';
import { ErrorProps } from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components';
import { mixins } from '@/styles';

const STDContainer = styled.div`
  ${mixins.flexSet()}
  flex-direction: column;
  padding-top: 5rem;

  .title {
    font-size: 1.25rem;
  }
`;

const Custom404Page: NextPage<ErrorProps> = () => {
  const router = useRouter();

  return (
    <STDContainer>
      <p className="title">잘못된 경로입니다.</p>
      <Button text="돌아가기" onClick={() => router.back()} />
    </STDContainer>
  );
};

export default Custom404Page;
