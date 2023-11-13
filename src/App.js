import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import ProductPage from './Components/ProductPage';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <Routes>
        <Route path='/'   element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='product/:productId' element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
