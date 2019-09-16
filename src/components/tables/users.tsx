import React from 'react';
import {Table} from 'antd';
import {useResource} from "rest-hooks";

import {ManagedUser} from "../../resources/managed-user";

const usersTableColumns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
];

export const UsersTable: React.FC = () => {
  const users = useResource(ManagedUser.listShape(), {});
  return <Table rowKey="id" size="middle" columns={usersTableColumns} dataSource={users} />;
};
