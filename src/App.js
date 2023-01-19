import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Home from './pages/user/Home';
import ProductComp from './pages/user/ProductComp';
import Blog from './pages/user/Blog';
import TestimonialComp from './pages/user/Testimonials';
import Gallery from './pages/user/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<ProductComp/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/testimonials' element={<TestimonialComp/>}/>
            <Route path='/gallery' element={<Gallery/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
