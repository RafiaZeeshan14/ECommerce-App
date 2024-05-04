import React from 'react'
import Navbar from '../Common/Navbar'
import Signup from '../Auth/Signup'
import Scroll from '../Scroll/Scroll'
import About from './About'
import '../Components.css';
import Information from './Collection'
import ProductCard from '../Products/ProductCard'
import { ProductsProvider } from '../../context/ProductsContext'
import Footer from '../Common/Footer'
import BestSeller from '../Products/BestSeller'
import HeroSlider from './HeroSlider'
import NewsLetter from '../Common/NewsLetter'


const Home = () => {
  return (
    <div className=''>
      <div className=' poppins-medium '>
        {/* <Navbar /> */}
        {/* <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div class="absolute inset-0 bg-cover">
            <img src="/images/bg-white.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black/15"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center -mt-8">
            <h1 class="text-5xl font-bold leading-tight mb-4 text-gray-800">Welcome to Our Awesome Website</h1>
            <p class="text-lg text-gray-700 mb-8">Discover amazing features and services that await you.</p>
            <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
          </div>
        </div> */}
        {/* <Slider/> */}
        <HeroSlider/>
        <div className='mx-8 bg-slate-50'>
          <br /><br />
          
          <br />
          <Scroll />
          <hr />
          <About />
          
            <ProductCard />
        
          <br /><br /><br /><br /><br />
          <Information />
          <br /><br />
          {/* <NewsLetter/> */}
          <br /><br/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
