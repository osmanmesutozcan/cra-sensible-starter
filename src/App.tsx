import React from "react";
import {CacheProvider} from "rest-hooks";
import {BrowserRouter, Route, RouteProps, Redirect} from "react-router-dom";

import {RouterContext} from "./base/hooks";
import {Dashboard} from "./pages/dashboard";
import {Auth} from "./pages/auth";


/**
 * Here we create a higher order component (HOC) to grab react-router props.
 * React router props will contain url related information and we can use that
 * information to render specific content based on currently viewed url.
 * 
 * Here we use context api because we want to access to router values
 * in any level of nested components. We could pass these values via props but,
 * that would mean all the components in the tree needs to be aware of these props
 * even if they don't need it.
 * 
 * Extra resouces to follow:
 *  - https://reactjs.org/docs/context.html
 */
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

/**
 * This is a variance of react-router Route component.
 * 
 * If we want to have authentication in our app and we want to prevent a page
 * to load without authentication we can use this component.
 */
const PrivateRoute: React.FC<RouteProps> = ({component, ...rest}) => {
  const Component = component as any;
  const render = (props: any) =>
      // Here we would actually check if we are authenticated or not.
      // Just omitting that part for now (Feel free to open a PR :) \).

      // Optimally, we should have a loading component and render it when
      // validating authentication status. Like just a loading icon in the
      // middle of the page.
      (true)
          ? (<Component {...props} />)
          : (<Redirect to={"/auth"} />);

  return <Route {...rest} render={render} />
};

/**
 * This is where we have out top level components.
 * 
 * Here we can have some context providers or Master layouts and
 * what not.
 * 
 * Check how we use react-router here to setup some pages for our app.
 * 
 * Extra resources to check:
 *  - https://reacttraining.com/react-router/web/guides/quick-start/example-basic-routing
 * 
 */
const App: React.FC = () => {
  return (
    // Ignore cache stuff for now. But if interested here is
    // a link https://reacttraining.com/react-router/web/guides/quick-start/example-basic-routing
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
