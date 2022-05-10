import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
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
          <p className="title">MAIN</p>
          <li><DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li><GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          <li><CreditCardIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li><LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFULL LINKS</p>
          <li><BarChartIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li><NotificationsActiveOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li><HealthAndSafetyOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li><PsychologyOutlinedIcon className='icon'/>
           <span>Logs</span>
          </li>
          <li><SettingsApplicationsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className='icon'/>
           <span>Profile</span>
          </li>
          <li><ExitToAppOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
        </div>
      <div className='bottom__sidebar'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        
      </div>
    </div>
  )
}

export default Sidebar