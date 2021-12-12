// import { Counter } from '../features/counter/Counter';
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import FeatureIphone13Pro from './pages/FeatureIphone13Pro';
import Store from './pages/Store';

// Style
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyle } from '../styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"> <Store /> </Route>
        <Route path="/iphone-13-pro"> <FeatureIphone13Pro /> </Route>
        <Route path="/home"> <HomePage /> </Route>
        <Route path="*"> <NotFoundPage /> </Route>
      </Switch>
      <CssBaseline />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
