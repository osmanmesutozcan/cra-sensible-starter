import React from 'react';
import {Icon, Table} from 'antd';
import {useFetcher, useResource} from "rest-hooks";

import {ManagedUser} from "../../resources/managed-user";
import {GhostButton, PrimaryButton, UploadButton} from "../buttons";

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <UploadButton />
          <GhostButton label={<Icon type={"sync"} />} onClick={() => refresh({}, {})} />
        </div>
        <Table rowKey="id" size="middle" columns={usersTableColumns} dataSource={users} />
      </>
  );
};
