// import React from 'react'
// import Navbar from '../Common/Navbar'

// const HeroSlider = () => {
//   return (
//     <div>
//       <div class="w-screen h-screen overflow-hidden">
//         <div class="relative" id="relative">
//           <header>
//             <div class="absolute top-0 z-50 w-full sm:px-12  py-4 shadow-2xl bg-opacity-10">
//               <div class="flex items-center space-x-2">
//                 {/* <button>
//             <img src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png" alt="Logo" class="w-10"/>
//           </button> */}
//               </div>
//               {/* <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
//                 <button class="rounded bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"> Sign Up </button>
//               </nav> */}
//               <Navbar />
//             </div>
//             <div id="indicators-carousel" class="relative" data-carousel="static">
//               <div class="overflow-hidden relative h-screen ">
//                 <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
//                   data-carousel-item="active">
//                   <video src="/public/herovideo.mp4 autoplay loop muted"
//                     class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//                   <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Fast & Easy Booking</div>
//                 </div>
//                 <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
//                   data-carousel-item="">
//                   <img src="https://images.pexels.com/photos/4489729/pexels-photo-4489729.jpeg"
//                     class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//                   <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Many Pickup Location</div>
//                 </div>
//                 <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
//                   <img src="https://images.pexels.com/photos/4488654/pexels-photo-4488654.jpeg"
//                     class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//                   <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Statified Customers</div>
//                 </div>
//                 <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
//                   <img src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg"
//                     class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//                   <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Advanced Engine Services</div>
//                 </div>
//                 <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
//                   data-carousel-item="">
//                   <img src="https://images.pexels.com/photos/6872599/pexels-photo-6872599.jpeg"
//                     class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
//                   <div class="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">Professional Car Wash</div>
//                 </div>
//               </div>
//               <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//                 <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true"
//                   aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button"
//                   class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//                   aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button"
//                   class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//                   aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button"
//                   class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//                   aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button"
//                   class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//                   aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//               </div>
//               <button type="button"
//                 class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//                 data-carousel-prev="">
//                 <span
//                   class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
//                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
//                   </svg>
//                   <span class="hidden">Previous</span>
//                 </span>
//               </button>
//               <button type="button"
//                 class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//                 data-carousel-next="">
//                 <span
//                   class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                   <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
//                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
//                   </svg>
//                   <span class="hidden">Next</span>
//                 </span>
//               </button>
//             </div>
//           </header>
//         </div>
//       </div>





//     </div>
//   )
// }

// export default HeroSlider
import React from 'react';
import Navbar from '../Common/Navbar';
import { FaAngleDown } from 'react-icons/fa'; // Import down arrow icon from react-icons library

const HeroSlider = () => {
  // Function to handle scroll down
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the height of the viewport
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <div className="w-full h-screen overflow-x-hidden">
        <div className="relative">
          <header>
            <div className="absolute top-0 z-50 w-full sm:px-12 py-4 shadow-5xl bg-opacity-10">
              <div className="flex items-center space-x-2">
                {/* <button>
                  <img src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png" alt="Logo" className="w-10"/>
                </button> */}
              </div>
              {/* <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
                <button className="rounded bg-blue-600 px-3 py-2 text-white transition hover:bg-blue-700"> Sign Up </button>
              </nav> */}
               {/* <div className="absolute inset-0 border-b-2 border-black bg-black opacity-10"></div> */}
               <Navbar backgroundColor="#eeeeee" />
            </div>
            <div >
              {/* Video Slide */}
              <div className="overflow-hidden  relative h-screen">
                <div className="absolute inset-0 bg-black opacity-500"></div>
                <video
                  src="/herovideo.mp4"
                  autoPlay
                  loop
                  muted
                  className="block absolute top-0 left-0 w-full h-full object-cover opacity-80"
                  alt="Hero Video"
                />
                 {/* <div class="relative  flex flex-col justify-center items-center h-full text-center mt-2">
            <h1 class="text-5xl font-bold leading-tight mb-4 text-white">Welcome to Our Awesome Website</h1>
            <p class="text-lg text-gray-700 mb-8">Discover amazing features and services that await you.</p>
            <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
          </div> */}
                {/* Add scroll down arrow */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                 
                  <FaAngleDown className="text-white text-4xl cursor-pointer" onClick={handleScrollDown} />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

