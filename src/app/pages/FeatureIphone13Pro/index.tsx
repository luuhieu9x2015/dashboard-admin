import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from 'app/layouts/Header';
import Footer from 'app/layouts/Footer';
import MainIp13Pro from 'app/layouts/MainIp13pro';
import NavIp13Pro from 'app/layouts/NavIp13Pro';

function FeatureIphone13Pro() {
  return (
    <>
      <Helmet>
        <title>iPhone 13 Pro and iPhone 13 Pro Max - Apple</title>
        <meta
          name="description"
          content="iPhone 13 Pro and iPhone 13 Pro Max - Apple"
        />
      </Helmet>
      <Header />
      <NavIp13Pro />
      <MainIp13Pro />
      <Footer />
    </>
  );
}

export default FeatureIphone13Pro;
