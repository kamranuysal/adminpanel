import Table from "components/table/Table";
import { columns, filters } from "./constants";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import Button from "components/buttons/Button";

const GamesTable = (): React.ReactElement => {
  const additionalButtons = (
    <Button
      buttonType={buttonTypes.warning}
      onClick={() => {}}
      variant="contained"
    >
      Add game
    </Button>
  );

  return (
    <Table
      columns={columns}
      rows={[]}
      pageData={{
        page: 1,
        limit: 10,
        totalCount: 0,
      }}
      showSearch={true}
      showSearchDrawer={true}
      filters={filters}
      additionalButtons={additionalButtons}
    />
  );
};

export default GamesTable;
