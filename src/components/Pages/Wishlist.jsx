import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Navbar from '../Common/Navbar';
import { useCart } from '../../context/CartContext';
import Footer from '../Common/Footer'

const Wishlist = () => {
    const { state, dispatch } = useCart();
    const { wishlistItems } = state;

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
                                <th className="p-2">Product</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Action</th>
                                <th className="p-2">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="p-2 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-18 sm:h-20  rounded mr-4" />
                                        <div>
                                            <div className="font-semibold text-xs sm:text-sm">{item.title}</div>
                                            <div className="text-xs text-gray-600">{item.category}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 text-xs sm:text-sm">{item.price}</td>
                                    <td className="p-2">
                                        <button
                                            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded text-xs md:text-sm"
                                            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
                                        >
                                            Add to Cart
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
                        </tbody>
                    </table>
                </div>
            </div>
            <br/><br/>
            <Footer />
        </div>
    );
};

export default Wishlist;



