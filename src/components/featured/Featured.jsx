import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import 'react-circular-progressbar/dist/styles.css';

import './featured.css'

export const Featured =()=> {
  return (
    <div className='featured'>
        <div className="top__feature">
            <h1 className="titles">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featured__chart">
                <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
            </div>
            <p className='title__circle'>Total sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previous transactions processing.</p>
            <div className="summary">
                <div className="item__chart">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item__chart">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                    <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item__chart">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Featured

