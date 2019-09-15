import React from 'react';
import {Layout, Menu} from "antd";

import {FullArea} from "../components/pagelayouts";

export const Dashboard: React.FC = () => {
  const { Sider, Content, Header } = Layout;

  return (
      <FullArea>
        <Layout>

          <Header />

          <Layout>
            <Sider style={{background: '#fff'}}>
              <Menu
                  style={{height: '100%', paddingTop: '21px'}}
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
              >
                <Menu.Item key="1">Menu 1</Menu.Item>
                <Menu.Item key="2">Menu 2</Menu.Item>
              </Menu>
            </Sider>

            <Content style={{padding: '25px'}}>
              <FullArea style={{background: '#fff'}} centered={true}>
                CONTENT
              </FullArea>
            </Content>
          </Layout>
        </Layout>
      </FullArea>
  );
};
