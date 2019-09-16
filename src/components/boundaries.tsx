import React, {Suspense} from 'react';
import {NetworkErrorBoundary} from "rest-hooks";

import {Loader} from "./icons";

export const RestLoadingBoundary: React.FC = ({children}) => {
  return (
      <Suspense fallback={<Loader />}>
        <NetworkErrorBoundary>
          {children}
        </NetworkErrorBoundary>
      </Suspense>
  );
};
