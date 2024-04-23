import React, { ReactElement, Suspense } from "react";
import { Route, useMatch, BrowserRouter, Navigate } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

interface RouteConfig {
  path: string;
  component: ReactElement;
}

interface PageRouterProps {
  routes: RouteConfig[];
  from: string;
  to: string;
  align?: string;
  cover?: boolean;
}

const PageRouter: React.FC<PageRouterProps> = ({ routes, from, to, align, cover }) => {
  const url = useMatch("");
  const loadingProps = { align, cover };

  return (
    <Suspense fallback={<Loading  {...loadingProps} cover="page" />}>
      <BrowserRouter>
        {routes.map((route, idx) => (
          <Route key={idx} path={`${url}/${route.path}`} children={route.component} />
        ))}
        <Navigate to={to} replace={true} />
      </BrowserRouter>
    </Suspense>
  );
}

export default PageRouter;
