import React from 'react'
import Header from '../components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../components/Home";
import Cart from "../components/Cart";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/cart' Component={Cart} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App