import React from 'react';
import {CacheProvider} from "rest-hooks";
import {BrowserRouter, Route, RouteProps, Redirect} from 'react-router-dom'

import {RouterContext} from "./base/hooks";
import {Dashboard} from "./pages/dashboard";
import {Auth} from "./pages/auth";


const CustomBrowserRouter: React.FC = ({ children }) => (
    <BrowserRouter>
      <Route>
        {(routeProps) => (
            <RouterContext.Provider value={routeProps}>
              {children}
            </RouterContext.Provider>
        )}
      </Route>
    </BrowserRouter>
);

const PrivateRoute: React.FC<RouteProps> = ({component, ...rest}) => {
  const Component = component as any;
  const render = (props: any) =>
      (true)
          ? (<Component {...props} />)
          : (<Redirect to={"/auth"} />);

  return <Route {...rest} render={render} />
};

const App: React.FC = () => {
  return (
      <CacheProvider>
          <CustomBrowserRouter>
            {/* EXACT ROUTES */}
            <Route path="/auth" exact={true} component={Auth} />

            {/* CATCH ALL ELSE */}
            <PrivateRoute path="/" component={Dashboard} />
          </CustomBrowserRouter>
      </CacheProvider>
  )
};

export default App;
