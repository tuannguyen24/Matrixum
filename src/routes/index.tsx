import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Loading } from '../components/molecules/Loading';

const Routes = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <Suspense fallback={<Loading loading={true} />}>
        <Switch>
          {publicRoutes.map((route, idx) => {
            const { component: Component, path, exact } = route;
            return (
              <Route key={path} path={path} exact={exact}>
                <Helmet>
                  <title>{route.metaData || 'MATRIXUM'}</title>
                </Helmet>
                {Component && <Component />}
              </Route>
            );
          })}
        </Switch>
      </Suspense>
    </>
  );
};

export * from './routes';
export default Routes;
