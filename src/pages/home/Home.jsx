import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className='homeContainer'>Container</div>
    </div>
  )
}

export default Home