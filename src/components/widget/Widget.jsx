import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './widget.css';

export const  Widget = ()=> {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">2134</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpOutlinedIcon/>
                20%</div>
                <PersonOutlineOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget