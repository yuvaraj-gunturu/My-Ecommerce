import React from 'react'
import {Routes, Route  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'




const App = () => {
  return (
    <>
      
      <div>
      <Navbar/>
        <Routes>
          <Route path = "/"  element = {<Home/>} />
          <Route path = "/collection" element = {<Collection/>} />
          <Route path = "/about" element = {<About/>}  />
          <Route path = "/cart" element = {<Cart/> } />
          <Route path = "/contact" element = {<Contact/> } />
          <Route path = "/login" element = {<Login/> } />
          <Route path = "/orders" element = {<Orders/> } />
          <Route path = "/product/:productid" element = {<Product/> } />
          <Route path = "/place-order" element = {<Placeorder/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
