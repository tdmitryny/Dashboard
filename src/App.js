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
import { userInputs } from './formSourse';
import { productInputs } from './formSourse';


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
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>
      {/* Users */}
      <Route path='products'>
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
