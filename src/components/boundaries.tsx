import React, {Suspense} from 'react';
import {NetworkErrorBoundary} from "rest-hooks";

import {Loader} from "./icons";

/**
 * This is a very cool component. Whenever we have a resthook loading
 * data down the component tree this component will fallback to the
 * Loader component to show a loading icon.
 */
export const RestLoadingBoundary: React.FC = ({children}) => {
  return (
      <Suspense fallback={<Loader />}>
        <NetworkErrorBoundary>
          {children}
        </NetworkErrorBoundary>
      </Suspense>
  );
};
