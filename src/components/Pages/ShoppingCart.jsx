import React, { useContext } from 'react';
import Navbar from '../Common/Navbar'
import { CartContext } from '../../context/CartContext';
import { AiOutlineDelete } from 'react-icons/ai';

const ShoppingCart = () => {
    const { state, dispatch } = useContext(CartContext);
    const incrementQuantity = (itemId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
    };

    const decrementQuantity = (itemId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: itemId });
    };
    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };
    return (
        <div>
            <Navbar />
            <section
                class="poppins-medium relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
                <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                    <div class="grid grid-cols-12">
                        <div
                            class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                                <h2 class="font-manrope font-bold text-3xl leading-10 text-black ">Shopping Cart</h2>
                                <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">{state.cartItems.length}</h2>
                            </div>
                            <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                                <div class="col-span-12 md:col-span-7">
                                    <p class="font-normal text-lg leading-8 text-gray-400 teachers-FONT">Product Details</p>
                                </div>
                                <div class="col-span-12 md:col-span-5">
                                    <div class="grid grid-cols-5">
                                        <div class="col-span-3">
                                            <p class="font-normal text-lg leading-8 text-gray-400 text-center teachers-FONT">Quantity</p>
                                        </div>
                                        <div class="col-span-2">
                                            <p class="font-normal text-lg leading-8 text-gray-400 text-center teachers-FONT">Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {state.cartItems.map(item => (
                                <div key={item.id} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                                    <div className="w-full md:max-w-[126px]">
                                        <img src={item.image} alt={item.name} className="mx-auto" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div className="md:col-span-2">
                                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 className="font-semibold text-base leading-7 text-black">{item.title}</h6>
                                                <h6 className="font-normal text-base leading-7 text-gray-500">{item.category}</h6>
                                                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-teal-600">${item.price.toFixed(2)}</h6>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button
                          className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          // onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}
                        >
                          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                        <input type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          // onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}
                        >
                          <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                    </div> */}
                                        <div class=" flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div class="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                                                <button
                                                    class="text-heading hover:bg-heading flex cursor-pointer h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                                    onClick={() => incrementQuantity(item.id)}
                                                   
                                                >
                                                    +
                                                </button>
                                                <span class="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                                                    1
                                                </span>
                                                <button onClick={() => decrementQuantity(item.id)}
                                                    disabled={item.quantity <= 1} class="text-heading cursor-pointer hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                                                    -
                                                </button>
                                            </div>
                                           
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                            <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-teal-600">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <div className="cursor-pointer py-2" onClick={() => removeFromCart(item.id)}>
                                            <AiOutlineDelete className="text-gray-500  hover:text-red-500" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div class="flex items-center justify-end mt-8">
                                <button
                                    class="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-md leading-8 text-teal-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-teal-700">
                                    Add Coupon Code
                                    <svg class="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                        fill="none">
                                        <path
                                            d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                            stroke="#00796B" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                            <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                                Order Summary</h2>
                            <div class="mt-8">
                                <div class="flex items-center justify-between pb-6">
                                    <p class="font-normal text-lg leading-8 text-black">{state.cartItems.length} Items </p>
                                    <p class="font-medium text-lg leading-8 text-teal-700">${state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                                </div>
                                <form>
                                    <label class="flex  items-center mb-1.5 text-gray-600 text-sm font-medium ">Shipping
                                    </label>
                                    <div class="flex pb-6">
                                        <div class="relative w-full">
                                            <div class=" absolute left-0 top-0 py-3 px-4">
                                                <span class="font-normal text-base text-gray-300">Second Delivery</span>
                                            </div>
                                            <input type="text"
                                                class="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                                                placeholder="$5.00" />
                                        </div>
                                    </div>
                                    <label class="flex items-center mb-1.5 text-gray-400 text-sm font-medium ">Promo Code
                                    </label>
                                    <div class="flex pb-4 w-full">
                                        <div class="relative w-full ">
                                            <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                                            </div>
                                            <input type="text"
                                                class="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                                placeholder="xxxx xxxx xxxx" />

                                        </div>
                                    </div>
                                    <div class="flex items-center border-b border-gray-200 py-4 ">
                                        <button
                                            class="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Apply</button>
                                    </div>
                                    <div class="flex items-center justify-between py-8">
                                        <p class="font-medium text-xl leading-8 text-black">{state.cartItems.length} Items</p>
                                        <p class="font-semibold text-xl leading-8 text-teal-700">${state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                                    </div>
                                    <button class="w-full text-center bg-gradient-to-r from-teal-700 to-teal-400 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-teal-900 hover:bg-opacity-80 hover:shadow-xl">Checkout</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ShoppingCart



