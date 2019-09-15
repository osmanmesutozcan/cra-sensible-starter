import React from 'react';
import {Form, Input} from "antd";

export interface FormInputItemProps {
  gfc: any; // getFieldDecorator

  type?: 'password';
  prefix?: any;
  placeholder?: string;

  name: string;
  rules?: any[]
  extras?: any;
}

export const FormInputItem: React.FC<FormInputItemProps> = (props) => {
  const { gfc } = props;

  return (
      <Form.Item {...props}>
        {
          gfc(props.name, {rules: props.rules, ...props.extras})(
              <Input
                  autoComplete='off'
                  type={props.type}
                  prefix={props.prefix}
                  placeholder={props.placeholder}
              />
          )
        }
      </Form.Item>
  );
};
