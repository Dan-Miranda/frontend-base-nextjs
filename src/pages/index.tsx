import React from 'react';
import Head from 'next/head';
import Home from '../components/templates/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Base Front NextJS</title>
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
