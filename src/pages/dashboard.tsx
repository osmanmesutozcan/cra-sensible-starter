import React from 'react';
import {Layout, Menu} from "antd";
import {RouterProps} from "react-router";

import {FullArea} from "../components/pagelayouts";
import {useRouter} from "../base/hooks";
import {UsersContent} from "../components/contents/users";

/**
 * Here we render the content section of the dashboard.
 * 
 * It uses `useRouter` hook we build. useRouter will
 * use Context API to pass these router values down the
 * component tree. We set the Context stuff in `App.tsx` and
 * `src/base/hooks.ts`.
 */
const DashboardContent: React.FC = () => {
  const router = useRouter();
  const { Content } = Layout;

  const ContentComponents: any = {
    '/': <UsersContent />,
    '/users': <UsersContent />,
  };

  return (
      <Content style={{padding: '25px'}}>
        <FullArea style={{background: '#fff', padding: '10px'}} orientation="vertical">
          {ContentComponents[router.location.pathname]}
        </FullArea>
      </Content>
  );
};

const DashboardSider: React.FC<RouterProps> = ({history}) => {
  const router = useRouter();
  const { Sider } = Layout;

  return (
      <Sider style={{background: '#fff'}}>
        <Menu
            style={{height: '100%', paddingTop: '21px'}}
            theme="dark"
            mode="inline"
            selectedKeys={[router.location.pathname]}
            defaultSelectedKeys={[router.location.pathname]}
            onSelect={({key}) => history.push(key)}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/users">Users</Menu.Item>
        </Menu>
      </Sider>
  );
};

/**
 * We are just using antdesign layout here. It is a very high level component
 * library to get started prototyping very fast. Once we get our application
 * going we can start adding custom components and theming antd on the go.
 * 
 * Extra resources to check:
 *  - https://ant.design/components/layout/#components-layout-demo-basic
 */
export const Dashboard: React.FC<RouterProps> = ({history}) => {
  const { Header } = Layout;

  return (
      <FullArea>
        <Layout>
          <Header />
          <Layout>
            <DashboardSider history={history} />
            <DashboardContent />
          </Layout>
        </Layout>
      </FullArea>
  );
};
