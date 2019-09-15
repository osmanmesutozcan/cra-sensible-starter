import React from 'react';
import {BrowserRouter, Route, RouteProps, Redirect} from 'react-router-dom'

import './App.css';
import {Home} from "./pages/Home";
import {Auth} from "./pages/Auth";

const PrivateRoute: React.FC<RouteProps> = ({component, ...rest}) => {
  const Component = component as any;
  const render = (props: any) =>
      (false)
          ? (<Component {...props} />)
          : (<Redirect to={"/auth"} />);

  return <Route {...rest} render={render} />
};

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <PrivateRoute path="/" exact={true} component={Home} />
        <Route path="/auth" exact={true} component={Auth} />
      </BrowserRouter>
  );
};

export default App;
