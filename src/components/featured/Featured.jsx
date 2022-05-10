import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
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
                {/* https://www.npmjs.com/package/react-circular-progressbar */}
                
            </div>
        </div>
    </div>
  )
}

export default Featured

