import {Sidebar} from '../../components/sidebar/Sidebar';
import {Navbar} from '../../components/navbar/Navbar';
import {Datatable} from '../../components/datatable/Datatable';
import './list.css'

export const List = () => {
  return (
    <div className='lists'>
      <Sidebar />
      <div className="listContainers">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List