import Charts from '../../components/charts/Charts';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import {TableOne} from '../../components/table/TableOne';
import './single.css';

export const Single = () => {
  return (
    <div className='single__page'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top__item">
          <div className="left__item">
            <div className="editButton">Edit</div>
            <h1 className="title__single">Information</h1>
            <div className="item__user">
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="item__image" />
              <div className="details">
                <h1 className="itemTitles">Jane Doe</h1>
                <div className="detailItem">
                  <div className="itemKeys">Email:</div>
                  <div className="itemValue">jane@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKeys">Phone:</div>
                  <div className="itemValue">+1 201 455 34 54</div>
                </div>
                <div className="detailItem">
                  <div className="itemKeys">Address:</div>
                  <div className="itemValue">Elton st. 234 Garden yr. New York</div>
                </div>
                <div className="detailItem">
                  <div className="itemKeys">Country:</div>
                  <div className="itemValue">United States</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right__item">
            <Charts aspect={3/1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
       
          <TableOne />

        </div>
      </div>
    </div>
  )
}

export default Single