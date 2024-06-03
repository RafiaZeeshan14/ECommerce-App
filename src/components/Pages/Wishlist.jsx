import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import Navbar from '../Common/Navbar';
import { useCart } from '../../context/CartContext';
import Footer from '../Common/Footer';

const Wishlist = () => {
    const { state, dispatch } = useCart();
    const { wishlistItems } = state;
    const [showToast, setShowToast] = useState(false);
    const [toastStyle, setToastStyle] = useState({ visibility: 'hidden', opacity: 0 });

    const handleAddToCart = (product) => {
        console.log("Adding to cart: ", product);
        dispatch({ type: 'ADD_TO_CART', payload: product });
        setShowToast(true);
    };

    useEffect(() => {
        let timer;
        if (showToast) {
            setToastStyle({ visibility: 'visible', opacity: 1 });
            timer = setTimeout(() => {
                setShowToast(false);
                setToastStyle({ visibility: 'hidden', opacity: 0 });
            }, 3000); // 3 seconds
        }

        return () => clearTimeout(timer);
    }, [showToast]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='poppins-medium'>
            <Navbar backgroundColor="#eeeeee" />
            <div className="p-6 bg-gray-100 mt-32">
                <h2 className="text-2xl font-semibold mb-4">Your Favorite Items</h2>
                <p className="text-sm text-gray-600 mb-6">There are {wishlistItems.length} products in this list</p>
                <div className="bg-white shadow rounded-lg overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left bg-gray-200">
                                <th className="p-2 text-xs sm:text-sm">Product</th>
                                <th className="p-2 text-xs sm:text-sm">Price</th>
                                <th className="p-2 text-xs sm:text-sm">Action</th>
                                <th className="p-2 text-xs sm:text-sm">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-2 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-18 sm:h-20 rounded mr-4" />
                                        <div  className="w-50 ">
                                            <div className="font-semibold text-xs sm:text-sm ">{item.title}</div>
                                            <div className="text-xs text-gray-600">{item.category}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-xs sm:text-sm">{item.price}</td>
                                    <td className="p-2">
                                        <button
                                            className="hidden md:inline px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded text-xs md:text-sm"
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="md:hidden text-teal-500 hover:text-teal-700"
                                        >
                                            <AiOutlineShoppingCart className="w-5 h-5" />
                                        </button>
                                    </td>
                                    <td className="p-2">
                                        <button
                                            onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.id })}
                                            className="px-4 py-2 text-white rounded"
                                        >
                                            <AiOutlineDelete className="text-gray-500 hover:text-red-500" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {showToast && (
                                <div id="toast-success" className="transition-opacity duration-300 ease-in-out ml-4 fixed bottom-5 inset-x-0 flex items-center justify-center w-full max-w-xs p-4 mb-4 text-gray-800 bg-slate-50 rounded-lg shadow-lg" style={toastStyle} role="alert">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="sr-only">Check icon</span>
                                    </div>
                                    <div className="ms-3 text-sm font-normal">Item Added to Cart.</div>
                                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => setShowToast(false)} aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
};

export default Wishlist;




