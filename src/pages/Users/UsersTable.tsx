import { Avatar, Switch } from "@mui/material";
import { getUsers } from "api/users";
import { tableInitialCredentials } from "components/table/constants";
import Table from "components/table/Table";
import { columns, filters } from "pages/Users/constants";
import { useEffect, useState } from "react";
import { formatDate, toFieldSet } from "utils/Utils";

const UsersTable = (): React.ReactElement => {
  const [rows, setRows] = useState([]);
  const [pageData, setPageData] = useState({
    page: 0,
    limit: 10,
    totalCount: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    const { page, limit } = params;

    if (params.fieldSet === null && filters.length > 0) {
      params = { ...params, fieldSet: toFieldSet(filters) };
    }

    const { phoneNumber, name, email } = params.fieldSet;

    setLoading(true);

    await getUsers(page + 1, limit, phoneNumber, name, email)
      .then((response) => {
        if (response) {
          const contents = response.response.items.map((row) => {
            row.dateOfBirth = row.dateOfBirth
              ? formatDate(row.dateOfBirth)
              : "";
            row.imagePath = <Avatar src={row.imagePath} alt="avatar" />;
            row = Object.assign(
              {
                actions: (
                  <Switch
                    checked={row.isActive}
                    onChange={(e) => {}}
                    color={"warning"}
                  />
                ),
              },
              row
            );
            return row;
          });

          setRows(contents);
          setPageData({
            page,
            limit,
            totalCount: response.count,
          });
        } else {
          setRows([]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(tableInitialCredentials);
  }, []);

  return (
    <>
      <Table
        columns={columns}
        rows={rows}
        pageData={pageData}
        filters={filters}
        showSearch={true}
        showSearchDrawer={true}
        fetchData={fetchData}
      />
    </>
  );
};

export default UsersTable;
