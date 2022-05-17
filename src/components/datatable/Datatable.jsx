import './datatable.css';
import {userColumns, userRows} from '../../datatablesource';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export const Datatable = ()=> {
const [data,setData] = useState(userRows);

const removeRow = (id) =>{
  setData(data.filter((row) => row.id !== id) )
}

const actionColumn = [{field: 'action', headerName: 'Action', width: 200, renderCell:(params)=>{
  return (
    <div className='cellAction'>
      <Link to="/users/test" style={{textDecoration:"none"}}>
      <div className='viewButton'>View</div>
      </Link>
      <div className='deleteButton' onClick={()=>removeRow(params.row.id)}>Delete</div>
    </div>
  )
},
},
];

  return (
    <div className='datatable'>
      <div className="datatableTitle">
       Add New User
       <Link to="/users/new" style={{textDecoration:"none"}} className="LinkData">
         Add New
       </Link>



      </div>
        <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable