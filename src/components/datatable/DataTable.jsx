import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource";


const DataTable = () => {

    return ( 
        <section className="dataTable">
          <DataGrid
          className="datagrid"
          rows={userRows}
          columns={ userColumns}
          pageSize={12}
          rowsPerPageOptions={[12]}
          checkboxSelection
      />
        </section>
     );
}
 
export default DataTable;