import * as React from 'react';
// import { P } from './styled/P';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <h1>Not Found 404</h1>
    </>
  );
}

export default NotFoundPage;
