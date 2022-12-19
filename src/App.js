import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Home from './pages/user/Home';
import ProductComp from './pages/user/ProductComp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<ProductComp/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
