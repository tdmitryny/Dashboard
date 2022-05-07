import DashboardIcon from '@mui/icons-material/Dashboard';
import { red } from '@mui/material/colors';
import './sidebar.css';

export const Sidebar = ()=> {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className="logo">EcomAdmin</div>
        </div>
        <hr/>
      <div className='center'>
        <ul>
          <li><DashboardIcon/><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
          <li><span>Dashboard</span></li>
        </ul>
        </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar