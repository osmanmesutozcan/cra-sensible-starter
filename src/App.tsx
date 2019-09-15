import React from 'react';
import {BrowserRouter, Route, RouteProps, Redirect} from 'react-router-dom'

import {Dashboard} from "./pages/dashboard";
import {Auth} from "./pages/auth";

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
      <BrowserRouter>
        <PrivateRoute path="/" exact={true} component={Dashboard} />
        <Route path="/auth" exact={true} component={Auth} />
      </BrowserRouter>
  );
};

export default App;
