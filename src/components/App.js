import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Loader from 'react-loader-spinner';
import NotFoundPage from '../pages/NotFoundPage';
import routes from '../routes';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MoviesDetailPage = lazy(() =>
  import('../pages/MoviesDetailPage' /* webpackChunkName: "movie-details" */),
);

const App = () => (
  <>
    <NavBar />
    <Suspense
      fallback={<Loader type='Oval' color='#3f51b5' height={280} width={280} />}
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MoviesDetailPage} />
        <Redirect to={routes.home} />;
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
