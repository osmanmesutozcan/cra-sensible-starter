import React, {useContext} from "react";
import {RouteComponentProps} from "react-router";

export const RouterContext = React.createContext({});
export const useRouter = () => {
  return useContext<RouteComponentProps>(RouterContext as any);
};
