import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useGetStore } from '@/hooks';

const Test = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

const Home: NextPage = () => {
  const { test } = useGetStore.home();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Test></Test>
      <div>hello this is test {`${test}`}</div>
    </div>
  );
};

export default Home;
