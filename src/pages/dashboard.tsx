import React from 'react';
import {Layout, Menu} from "antd";
import {RouterProps} from "react-router";

import {FullArea} from "../components/pagelayouts";
import {useRouter} from "../base/hooks";
import {UsersContent} from "../components/contents/users";

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
            defaultSelectedKeys={[router.location.pathname]}
            onSelect={({key}) => history.push(key)}
        >
          <Menu.Item key="/">Home</Menu.Item>
          <Menu.Item key="/users">Users</Menu.Item>
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
            <DashboardContent />
          </Layout>
        </Layout>
      </FullArea>
  );
};
