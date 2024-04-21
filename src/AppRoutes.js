import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import Home from './components/Pages/Home'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import ShoppingCart from './components/Pages/ShoppingCart'
import ProductOverview from './components/Pages/ProductOverview'


const AppRoutes = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/signup' element={<Signup/>} />
        {/* {/* <Route path='/blog' element={<BlogCard blogdata={blogs} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/productoverview' element={<ProductOverview/>}/>
      </Routes>
    
    </div>
  )
}

export default AppRoutes