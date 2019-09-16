import React from 'react';
import {useFetcher} from "rest-hooks/lib/react-integration/hooks";
import {ManagedUser} from "../../resources/managed-user";
import {PrimaryButton, UploadButton} from "../buttons";
import {Divider, Icon} from "antd";
import {UsersTable} from "../tables/users";
import {RestLoadingBoundary} from "../boundaries";

export const UsersContent: React.FC = () => {
  const refresh = useFetcher(ManagedUser.listShape());

  return (
      <>
        <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>
          <PrimaryButton label={<Icon type={"sync"} />} onClick={() => refresh({}, {})} />
          <Divider type="vertical" />
          <UploadButton />
        </div>
        <RestLoadingBoundary>
          <UsersTable />
        </RestLoadingBoundary>
      </>
  );
};
