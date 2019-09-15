import React from 'react';

import {LoginForm} from "../components/forms/authentication";
import {FullArea} from "../components/pagelayouts";

export const Auth: React.FC = () => {
  return (
      <FullArea centered={true} orientation="vertical">
        <LoginForm />
      </FullArea>
  );
};
