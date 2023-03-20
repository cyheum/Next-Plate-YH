import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const TempPage: NextPage = () => {
  return (
    <div>
      <h1>Temp Page</h1>
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default TempPage;
