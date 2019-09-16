import React from 'react';
import {Table} from 'antd';
import {useFetcher, useResource} from "rest-hooks";
import {ManagedUser} from "../../resources/managed-user";
import {PrimaryButton} from "../buttons";

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
  const refresh = useFetcher(ManagedUser.listShape());

  return (
      <>
        <PrimaryButton label="Refresh" onClick={() => refresh({}, {})} />
        <Table rowKey="id" size="middle" columns={usersTableColumns} dataSource={users} />
      </>
  );
};
