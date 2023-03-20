import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components';
import { useGetStore } from '@/hooks';

const Home: NextPage = () => {
  const { isLoading } = useGetStore.home();

  console.log(isLoading);

  return (
    <div>
      <Head>
        <title>Main Page</title>
      </Head>
      <Button text="Button" />
      <Link href="/temp">Temp</Link>
      <div>hello this is Next + Redux + Redux-saga</div>
      <p>Test</p>
    </div>
  );
};

export default Home;
