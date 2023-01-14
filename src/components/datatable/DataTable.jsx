import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource";


const DataTable = () => {

    return ( 
        <div className="dataTable">
          <DataGrid
          className="datagrid"
          rows={userRows}
          columns={ userColumns}
          pageSize={12}
          rowsPerPageOptions={[12]}
          checkboxSelection
      />
        </div>
     );
}
 
export default DataTable;