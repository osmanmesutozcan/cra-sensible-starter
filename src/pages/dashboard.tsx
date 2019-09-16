import React from 'react';
import {Layout, Menu} from "antd";

import {FullArea} from "../components/pagelayouts";
import {UsersTable} from "../components/tables/users";
import {NetworkErrorBoundary} from "rest-hooks";
import {useRouter} from "../base/hooks";
import {RouterProps} from "react-router";

const DashboardContent: React.FC<RouterProps> = ({history}) => {
  const { Content } = Layout;

  return (
      <NetworkErrorBoundary>
        <Content style={{padding: '25px'}}>
          <FullArea style={{background: '#fff', padding: '10px'}} orientation="vertical">
            <UsersTable />
          </FullArea>
        </Content>
      </NetworkErrorBoundary>
  );
};

const DashboardSider: React.FC<RouterProps> = ({history}) => {
  const router = useRouter();
  console.log(router);
  const { Sider } = Layout;

  return (
      <Sider style={{background: '#fff'}}>
        <Menu
            style={{height: '100%', paddingTop: '21px'}}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[router.location.pathname]}
            onSelect={({key}) => history.push(key)}
        >
          <Menu.Item key="/">Menu 1</Menu.Item>
          <Menu.Item key="/users">Menu 2</Menu.Item>
        </Menu>
      </Sider>
  );
};

export const Dashboard: React.FC<RouterProps> = ({history}) => {
  const { Header } = Layout;

  return (
      <FullArea>
        <Layout>
          <Header />
          <Layout>
            <DashboardSider history={history} />
            <DashboardContent history={history} />
          </Layout>
        </Layout>
      </FullArea>
  );
};
