import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import Home from './components/Pages/Home'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import ShoppingCart from './components/Pages/ShoppingCart'
import BestSeller from './components/ProductsPages/BestSeller'
import MenCollection from './components/ProductsPages/MenCollection'
import WomenCollection from './components/ProductsPages/WomenCollection'
import ProductOverview from './components/ProductsPages/ProductOverview'
import Contact from './components/Pages/Contact'


const AppRoutes = () => {
  return (
    <div>
    
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/signup' element={<Signup/>} />
        {/* {/* <Route path='/blog' element={<BlogCard blogdata={blogs} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/productoverview/:id' element={<ProductOverview/>}/>
        <Route path='/bestseller' element={<BestSeller/>}/>
        <Route path='/mencollection' element={<MenCollection/>}/>
        <Route path='/womencollection' element={<WomenCollection/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </div>
  )
}

export default AppRoutes