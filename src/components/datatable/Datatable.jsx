import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {columns, rows} from '../../data';

const Datatable = () => {
    const actionColumn = [{field:'action', headerName:'Action', width: 200, renderCell:()=>{
        return(
            <div className='action'>
                <div className="view">View</div>
                <div className="delete">Delete</div>
            </div>
        )
    }}];
  return (
    <div className='datatable'>
        <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable