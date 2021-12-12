import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from 'app/layouts/Header';
import Footer from 'app/layouts/Footer';
import MainStore from 'app/layouts/MainStore'

function Store() {
  return (
    <>
      <Helmet>
        <title>Apple Store</title>
        <meta name="description" content="Apple Store" />
      </Helmet>
      <Header />
      <MainStore />
      <Footer />
    </>
  );
}

export default Store;
