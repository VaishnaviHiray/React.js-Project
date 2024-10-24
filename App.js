import { useState } from 'react';
import './App.css';
import AddProduct from './Component/AddProduct';
// import MyModel from './Component/MyModel/MyModel';
import Product from './Component/Product';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Categories from './Component/Categories';
import { Routes, Route } from 'react-router-dom';
// import Signup from './Component/Sighup';

function App() {
  let [addFlag, setAddFlag] = useState(false);
  function funNewProd() {
    setAddFlag(!addFlag);
  }
  return (
    <div className='container'>
      {/* <MyModel/> */}
      <Routes>
        <Route>
          <Route path="/" Component={Home} > </Route>
          <Route path="/Categories" Component={Categories}></Route>
          <Route path="/Product" Component={Product}></Route>
        </Route>
      </Routes>
      <input type='button' value="AddProduct" onClick={funNewProd} className='styling' />
      {
        addFlag && <AddProduct />
      }

      <Navigation />
      <div className='IMG'>
  <img src='/images/logo192.png' alt='img' />
</div>

{/* <Signup/> */}
    </div>
  );
}

export default App;
