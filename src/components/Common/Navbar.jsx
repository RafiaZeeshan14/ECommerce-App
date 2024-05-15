import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../components/Components.css';
import { MdClose, MdFilterList } from 'react-icons/md';
import { CartContext } from '../../context/CartContext';
import { BiLinkAlt } from 'react-icons/bi';


// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };
//     return (
//         <>
//             <header class=' font-sans min-h-[60px] px-10 py-2 relative text-white poppins-medium'>
//                 <div class=' flex flex-wrap items-center max-lg:gap-y-4 max-sm:gap-x-4'>
//                     <a href="javascript:void(0)"><img src="/logo-regular.png" alt="logo" class='w-32' /></a>
//                     <div class='flex items-center ml-auto lg:order-1'>
//                         {/* ********** Heart-Svg************ */}
//                         <div
//                             class="bg-gray-100 border mr-6 focus-within:border-blue-500 flex px-6 rounded-full h-9 lg:w-[60%] mt-1 mx-auto ">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
//                                 class="fill-gray-600 mr-3 rotate-90">
//                                 <path
//                                     d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
//                                 </path>
//                             </svg>

//                             <input type='email' placeholder='Search...'
//                                 class="w-full  bg-transparent text-gray-600 font-semibold text-[15px]" />
//                         </div>
//                         {/* <span class="relative mr-8">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20px"
//                                 class="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
//                                 <path
//                                     d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
//                                     data-original="#000000" />
//                             </svg>
//                             <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
//                         </span> */}
//                         {/* ********** Basket-Svg************ */}
//                         <Link to={"/shoppingcart"}>

//                             <span class="relative mr-3 ml-6" >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
//                                     class="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
//                                     <path
//                                         d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
//                                         data-original="#000000"></path>
//                                 </svg>
//                                 <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
//                             </span>
//                         </Link>

//                         <div class="relative poppins-light w-max mx-auto">
//                             {/* ********** Avatar-Img************ */}
//                             <div class="relative inline-block cursor-pointer" onClick={toggleDropdown}>
//                                 <img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
//                                 <span class="absolute bottom-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
//                             </div>
//                             {/* ********** Avatar-Dropdown************ */}
//                             {isDropdownOpen && (
//                                 // <ul class='absolute shadow-lg  bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto right-0'>
//                                 //     <Link to="/login">
//                                 //         <li class='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'>
//                                 //             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-3" viewBox="0 0 512 512">
//                                 //                 <path
//                                 //                     d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
//                                 //                     data-original="#000000"></path>
//                                 //             </svg>
//                                 //             Login
//                                 //         </li>
//                                 //     </Link>
//                                 //     <Link to='/signup'>
//                                 //         <li class='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'>
//                                 //             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-3" viewBox="0 0 512 512">
//                                 //                 <path
//                                 //                     d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
//                                 //                     data-original="#000000"></path>
//                                 //             </svg>
//                                 //             Register
//                                 //         </li>
//                                 //     </Link>
//                                 //     <li class='py-2.5 px-6 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer'>
//                                 //         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-3"
//                                 //             viewBox="0 0 6.35 6.35">
//                                 //             <path
//                                 //                 d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
//                                 //                 data-original="#000000"></path>
//                                 //         </svg>
//                                 //         Logout
//                                 //     </li>
//                                 // </ul>
//                                 <ul>

//                                         <div class="bg-slate-100 z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
//                                             <h6 class="font-semibold text-[15px] text-black font-semibold">Welcome</h6>
//                                             <p class="text-sm text-gray-500 mt-1">To access account and manage orders</p>
//                                             <button type='button'
//                                                 class="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold">LOGIN
//                                                 / SIGNUP</button>
//                                             <hr class="border-b-0 my-4" />
//                                             <ul class="space-y-1.5">
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Order</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Wishlist</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Gift Cards</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
//                                             </ul>
//                                             <hr class="border-b-0 my-4" />
//                                             <ul class="space-y-1.5">
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Coupons</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Credits</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
//                                                 <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Addresses</a></li>
//                                             </ul>
//                                         </div>

//                                 </ul>
//                             )}
//                         </div>
//                         {/* ********** Toggle-Btn Small Device************ */}
//                         <button id="toggle" class='lg:hidden ml-7'>
//                             <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd"
//                                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                     clip-rule="evenodd"></path>
//                             </svg>
//                         </button>
//                     </div>
//                     {/* ********** Nav-Links ************ */}
//                     <ul id="collapseMenu"
//                         class='text-white  lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 lg:absolute lg:left-[38%] lg:-translate-x-1/2'>
//                         <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
//                             class='hover:text-teal-600 text-[15px] text-teal-500 block font-bold'>Home</a></li>
//                         <li class='group max-lg:border-b max-lg:py-2 relative'>
//                             <a href='javascript:void(0)'
//                                 class='hover:text-[#007bff]  text-[15px] font-bold lg:hover:fill-[#007bff] block'>Categories<svg
//                                     xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
//                                     <path
//                                         d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
//                                         data-name="16" data-original="#000000" />
//                                 </svg>
//                             </a>
//                             <ul
//                                 class='absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-10'>
//                                 <li class='border-b py-2 '><a href='javascript:void(0)'
//                                     class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
//                                 <li class='border-b py-2 '><a href='javascript:void(0)'
//                                     class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
//                                 <li class='border-b py-2 '><a href='javascript:void(0)'
//                                     class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Login</a></li>

//                             </ul>
//                         </li>
//                         <li class='group max-lg:border-b max-lg:py-2 relative'>
//                             <a href='javascript:void(0)'
//                                 class='hover:text-[#007bff]  font-bold text-[15px] lg:hover:fill-[#007bff] block'>
//                                 Featured
//                             </a>
//                         </li>
//                         <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
//                             class='hover:text-[#007bff]  font-bold text-[15px] block'>Contact</a></li>
//                     </ul>

//                 </div>
//                 {/* <div
//                     class="bg-gray-100 border border-transparent focus-within:border-blue-500 flex px-6 rounded-full h-9 lg:w-1/3 mt-3 mx-auto max-lg:mt-6">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
//                         class="fill-gray-600 mr-3 rotate-90">
//                         <path
//                             d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
//                         </path>
//                     </svg>

//                     <input type='email' placeholder='Search...'
//                         class="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]" />
//                 </div> */}
//             </header>
//         </>

//     );
// }

// export default Navbar;


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const { state } = useContext(CartContext);
    return (
        <div>
            <section
                class='flex items-center flex-wrap justify-center gap-4 py-3 sm:px-10 px-4  min-h-[75px]'>

                {/* *************** Side-Bar Logo  ****************/}
                {!isSidebarOpen && (
                    <div className='left-10 absolute z-50 px-4 py-3' onClick={toggleSidebar}>
                        <MdFilterList style={{ width: '2em', cursor: 'pointer', height: '2em' }} className='fill-[#09998b]' />
                    </div>
                )}
                {/* *************** Side-Bar Code  ****************/}
                {isSidebarOpen && (
                    <nav
                        class="bg-white shadow-lg z-10 h-screen fixed top-0 left-0 w-[280px] py-6 px-6 font-[sans-serif] flex flex-col overflow-auto">
                        <div class="flex flex-wrap items-center cursor-pointer">
                            {/* *************** Close-Btn  ****************/}
                            <button className="absolute top-3 right-3" onClick={closeSidebar}>
                                <MdClose style={{ width: '1.5em', height: '1.5em' }} className='fill-[#777474f3]' />
                            </button>
                            {/* *************** Logo IN sidebar  ****************/}
                            <img src="/logo-regular.png" alt="logo" class='w-[140px] ' />
                        </div>
                        {/* *************** Search-Box  ****************/}
                        <div class="relative bg-gray-100 px-4 py-3 rounded-md mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#777474f3" class="w-4 mr-4 inline" viewBox="0 0 118.783 118.783">
                                <path
                                    d="M115.97 101.597 88.661 74.286a47.75 47.75 0 0 0 7.333-25.488c0-26.509-21.49-47.996-47.998-47.996S0 22.289 0 48.798c0 26.51 21.487 47.995 47.996 47.995a47.776 47.776 0 0 0 27.414-8.605l26.984 26.986a9.574 9.574 0 0 0 6.788 2.806 9.58 9.58 0 0 0 6.791-2.806 9.602 9.602 0 0 0-.003-13.577zM47.996 81.243c-17.917 0-32.443-14.525-32.443-32.443s14.526-32.444 32.443-32.444c17.918 0 32.443 14.526 32.443 32.444S65.914 81.243 47.996 81.243z"
                                    data-original="#000000" />
                            </svg>
                            <input class="text-sm text-gray-500 outline-none bg-transparent px-1 max-w-[130px]" placeholder="Search..." />
                        </div>
                        {/* *************** Side-Bar Links ****************/}
                        <ul class="space-y-4 pl-3 flex-1 mt-10">
                            <li>
                                <Link href="" class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>Men</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>Women</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>Men & Women</span>
                                </Link>
                            </li><hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>LookBook</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>Special Price</span>
                                </Link>
                            </li>
                            <hr />
                        </ul>
                        <ul class="space-y-4 pl-3 mt-5">

                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">

                                    <span>Help Center</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">

                                    <span>Contact Us</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">

                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
                {/* ***************** Brand-Logo ************* */}
                <a href="/" className="shrink-0  md:text-center">
                    <img src="/logo-regular.png" alt="logo" className='ml-[60%] md:w-[170px] w-36 sm:ml-[70%] lg:ml-0 ' />
                </a>


                <div class="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
                    <span class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px"
                            class="cursor-pointer fill-[#009688] hover:fill-[#00897B] inline-block" viewBox="0 0 64 64">
                            <path
                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                data-original="#000000" />
                        </svg>
                        <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">1</span>
                    </span>
                    {/* ********** Basket -Img************ */}
                    <Link to={'/shoppingcart'} class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="23px"
                            class="cursor-pointer fill-[#009688] hover:fill-[#00897B] inline-block" viewBox="0 0 512 512">
                            <path
                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                data-original="#000000"></path>
                        </svg>
                        {/* ********** Basket -Badge************ */}
                        {state.totalQuantity > 0 && (
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">{state.totalQuantity}</span>
                        )}
                    </Link>
                    <div class="relative poppins-light w-max mx-auto">
                        {/* ********** Avatar-Img************ */}
                        <div class="relative inline-block cursor-pointer mt-2" onClick={toggleDropdown}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer fill-[#028f81] hover:fill-[#018073] "
                                viewBox="0 0 512 512">
                                <path
                                    d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                                    data-original="#000000" />
                            </svg>    </div>
                        {/* ********** Avatar-Dropdown************ */}
                        {isDropdownOpen && (
                            <ul>
                                <div class="bg-slate-100 rounded-md z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
                                    <h6 class="text-[15px] text-black font-semibold">Welcome</h6>
                                    <p class="text-sm text-gray-500 mt-1">To access account and manage orders</p>
                                    <button type='button'
                                        class="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold">LOGIN
                                        / SIGNUP</button>
                                    <hr class="border-b-0 my-4" />
                                    <ul class="space-y-1.5">
                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Order</a></li>
                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Wishlist</a></li>
                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Gift Cards</a></li>

                                    </ul>
                                    <hr class="border-b-0 my-4" />
                                    <ul class="space-y-1.5">
                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Coupons</a></li>
                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Credits</a></li>

                                        <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Addresses</a></li>
                                    </ul>
                                </div>

                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar

