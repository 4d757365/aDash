import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../data';
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: () => {
      return (
        <div className='action'>
          <Link to='/users/test' style={{textDecoration:"none"}}>
            <div className="view">
              View
            </div>
          </Link>
          <div className="delete">Delete</div>
        </div>
      )
    }
  }];
  return (
    <div className='datatable'>
      <div className="title">
        Add New User 
        <Link to='/users/new' style={{textDecoration:"none"}} className="link">
          Add New
        </Link>
      </div>
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