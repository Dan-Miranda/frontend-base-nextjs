import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Theme from '../bootstrap/Theme';

function MyApp(props: AppProps) {
  const { Component, pageProps } = { ...props };
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
export default MyApp;
