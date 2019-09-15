import React from 'react';
import {Layout} from "antd";

import {FullArea} from "../components/pagelayouts";

export const Dashboard: React.FC = () => {
  const { Sider, Content, Header } = Layout;

  return (
      <FullArea>
        <Layout>
          <Header />
          <Layout>
            <Sider style={{background: '#fff'}} />
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
