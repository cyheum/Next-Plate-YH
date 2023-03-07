import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Button } from '@/components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Main Page</title>
      </Head>
      <Button text="Button" />
      <div>hello this is Next + Redux + Redux-saga</div>
    </div>
  );
};

export default Home;
