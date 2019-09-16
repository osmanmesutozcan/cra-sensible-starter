import React from 'react';
import {Button} from "antd";

export interface SharedButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLElement>
}

export const PrimaryButton: React.FC<SharedButtonProps> = (props) => {
  const { label, onClick } = props;
  return (
      <Button onClick={onClick} type="primary">{label}</Button>
  );
};
