import React from 'react';
import {Button, Form} from "antd";
import {FormComponentProps} from "antd/lib/form";

import {FormInputItem} from "./shared";

const _LoginForm: React.FC<FormComponentProps> = (props) => {
  const { getFieldDecorator } = props.form;

  return (
      <Form>
        <FormInputItem
            name="username"
            placeholder="Username"
            rules={[{required: true}]}
            gfc={getFieldDecorator}
        />

        <FormInputItem
            name="password"
            placeholder="Password"
            type="password"
            rules={[{required: true}]}
            gfc={getFieldDecorator}
        />

        <Button type="primary">Login</Button>
      </Form>
  );
};

export const LoginForm = Form.create()(_LoginForm);
