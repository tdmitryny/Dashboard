import './App.css';
import {Home} from '../src/pages/home/Home';
import {Login} from '../src/pages/login/Login';
import {List} from '../src/pages/list/List';
import {New} from '../src/pages/new/New';
import {Single} from '../src/pages/single/Single';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        {/* Users */}
        <Route path='users'>
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
      {/* Users */}
      <Route path='products'>
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
