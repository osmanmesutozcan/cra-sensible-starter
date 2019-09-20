import React from 'react';

import {LoginForm} from "../components/forms/authentication";
import {FullArea} from "../components/pagelayouts";

/**
 * Whole auth page. Just a login form centered in the page.
 */
export const Auth: React.FC = () => {
  return (
      <FullArea centered={true} orientation="vertical">
        <LoginForm />
      </FullArea>
  );
};
