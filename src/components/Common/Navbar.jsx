import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../components/Components.css';
import { MdClose, MdFilterList } from 'react-icons/md';
import { CartContext } from '../../context/CartContext';
import { BiLinkAlt } from 'react-icons/bi';

const Navbar = ({backgroundColor}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleSidebarClick = () => {
        if (location.pathname === '/') {
            setIsSidebarOpen(!isSidebarOpen);
        } else {
            navigate('/');
        }
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust this value as needed
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const { state } = useContext(CartContext);

    return (
        <div>
            <section
                className={`flex z-20 items-center flex-wrap justify-center gap-4 py-3 sm:px-10 px-4 min-h-[70px] fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`}
                style={{ backgroundColor: isScrolled ? backgroundColor : 'transparent' }}
            >
                {/* *************** Side-Bar Logo  ****************/}
                {!isSidebarOpen && (
                    <div className='left-0 sm:left-10 absolute z-50 px-4 py-3' onClick={handleSidebarClick}>
                        <MdFilterList className='fill-[#09998b] w-8 h-8  cursor-pointer' />
                    </div>
                    // style={{ width: '2em', cursor: 'pointer', height: '2em' }} 
                )}
                {/* *************** Side-Bar Code  ****************/}
                {isSidebarOpen && (
                    <nav
                        class="bg-white shadow-lg z-10 h-screen fixed top-0 left-0 w-[280px] py-6 px-6 poppins-medium flex flex-col overflow-auto">
                        <div class="flex flex-wrap items-center cursor-pointer">
                            {/* *************** Close-Btn  ****************/}
                            <button className="absolute top-3 right-3" onClick={closeSidebar}>
                                <MdClose style={{ width: '1.5em', height: '1.5em' }} className='fill-[#777474f3] ' />
                            </button>
                            {/* *************** Logo IN sidebar  ****************/}
                            <img src="/HomeImg/logo-regular.png" alt="logo" class='w-[140px] sm:' />
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
                                <Link  to={'/mencollection'} class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
                                    <span>Men</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link  to={'/womencollection'} class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
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
                                <Link to={"/about"} class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">
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
                                <Link to={"/helpcenter"} class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">

                                    <span>Help Center</span>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to={"/contact"} class="text-[#09998b] font-semibold text-sm flex items-center rounded-md left-0 hover:left-2 relative transition-all duration-300">

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
                    <img src="/HomeImg/logo-regular.png" alt="logo" className='ml-[65%] md:w-[170px] w-24 sm:w-36 sm:ml-[70%] lg:ml-0 ' />
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

