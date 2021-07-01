import React from 'react';
import { AppProps } from 'next/app';
import storeWrapper from '../store';

import '../bootstrap/Theme/globals.scss';
import Theme from '../bootstrap/Theme';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = { ...props };
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default storeWrapper.withRedux(MyApp);
