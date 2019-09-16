import React, {ReactElement} from 'react';
import {Button, Icon, Upload} from "antd";
import {UploadProps} from "antd/es/upload";

export interface SharedButtonProps {
  label: string | ReactElement;
  onClick: React.MouseEventHandler<HTMLElement>
}

export const GhostButton: React.FC<SharedButtonProps> = (props) => {
  const { label } = props;
  return (
      <Button {...props}>{label}</Button>
  );
};

export const PrimaryButton: React.FC<SharedButtonProps> = (props) => {
  const { label } = props;
  return (
      <Button type="primary" {...props}>{label}</Button>
  );
};

export const UploadButton: React.FC<UploadProps> = (props) => {
  return (
    <Upload showUploadList={props.showUploadList || false}>
      <GhostButton
          {...props as SharedButtonProps}
          label={<><Icon type="upload" /> Click to Upload</>}
      />
    </Upload>
  );
};
