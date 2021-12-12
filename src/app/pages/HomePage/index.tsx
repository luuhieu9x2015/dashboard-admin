import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from 'app/layouts/Header';
import MainHome from 'app/layouts/MainHome';
import Footer from 'app/layouts/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Apple</title>
        <meta name="description" content="Apple" />
      </Helmet>
      <MainHome />
      <Header />
      <Footer />
    </>
  );
}

export default HomePage;
