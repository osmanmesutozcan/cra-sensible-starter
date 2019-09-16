import React from 'react';
import {Icon} from "antd";
import {FullArea} from "./pagelayouts";

export const Loader: React.FC = () => {
  return (
      <FullArea centered={true}>
        <Icon style={{fontSize: '2em'}} type="loading" />
      </FullArea>
  );
};
