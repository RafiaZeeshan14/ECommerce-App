import React, { useEffect, useState } from 'react'
import { useProducts } from '../../context/ProductsContext';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';


const ProductCard = () => {
    const { sellerProducts, menProducts, womenProducts } = useProducts();
    const [showAllProducts, setShowAllProducts] = useState(false);
    const displayedProducts = showAllProducts ? sellerProducts : sellerProducts.slice(0, 4);
    const [showToast, setShowToast] = useState(false);
    const [toastStyle, setToastStyle] = useState({ visibility: 'hidden', opacity: 0 });
    const [showToastMessage, setShowToastMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClick = () => {
        navigate('/bestseller');
    };

    // Combine all products into a single array
    const allProducts = [...sellerProducts, ...menProducts, ...womenProducts];

    // Filter the product based on the id
    const product = allProducts.filter((item) => item.id == id);
    const { dispatch } = React.useContext(CartContext);

    const handleAddToCart = (product) => {
        console.log("Adding to cart: ", product);
        dispatch({ type: 'ADD_TO_CART', payload: product });
        setShowToast(true);
        setShowToastMessage('Item added to Cart.');
    };
    const handleAddToWishlist = (product) => {
        console.log("Adding to wishlist: ", product);
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
        setShowToast(true);
        setShowToastMessage('Item added to Wishlist.');
    };
    useEffect(() => {
        let timer;
        if (showToast) {
            setToastStyle({ visibility: 'visible', opacity: 1 });
            timer = setTimeout(() => {
                setShowToast(false);
                setToastStyle({ visibility: 'hidden', opacity: 0 });
            }, 3000); // 2 seconds
        }

        return () => clearTimeout(timer);
    }, [showToast]);
    return (
        <>
            <style>
                {`
                    /* Hide the scrollbar for the entire page */
                    body {
                        scrollbar-width: none; /* Firefox */
                        -ms-overflow-style: none; /* Internet Explorer 10+ */
                    }

                    /* Hide the scrollbar for the product card container */
                    .overflow-x-auto::-webkit-scrollbar {
                        display: none; /* Safari and Chrome */
                    }
                `}
            </style>
            <div className='flex justify-between'>
                <h1 className='sm:text-xl text-md font-medium  text-black m-6'>
                    Our Best Seller
                </h1>
                <h1
                    className='sm:text-md lg:text-lg text-xs hidden lg:block font-medium text-black m-6 hover:text-teal-600 cursor-pointer'
                    onClick={handleClick}
                >
                    VIEW ALL BEST SELLER
                </h1>
            </div>
            <div className='overflow-x-auto whitespace-nowrap mx-4 justify-items-center '>
                <div className='flex space-x-8'>
                    {displayedProducts.map((product) => (
                        <div key={product.id} className='inline-block'>
                            <div className='group relative sm:h-[350px] sm:w-[300px] h-[300px] w-[250px]   rounded-md overflow-hidden cursor-pointer'>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className='absolute top-0 right-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-105'
                                />

                                <div className='absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0'>
                                    {/* Wishlist-svg */}
                                    <button onClick={() => handleAddToWishlist(product)} className='flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700'>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                                            <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
                                        </svg>
                                    </button>
                                    {/* Shop-svg */}
                                    <button onClick={() => handleAddToCart(product)} className='flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700'>
                                        <svg xmlns='http://www.w3.org/2000/svg' className='mr-2 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                                            <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className='bottom-4 left-4 text-left max-w-68 mt-5'>
                                <div className='flex justify-between'>
                                    <h1 className='text-sm sm:text-lg font-semibold text-black'>{product.title}</h1>
                                    <p className='text-gray-900 text-sm sm:text-lg  '><b>$</b>{product.price}</p>
                                </div>
                                <Link to={`/productoverview/${product.id}`}>
                                    <button className='mt-2 inline-flex hover:text-teal-600 cursor-pointer items-center text-xs font-semibold text-gray-600'>
                                        Shop Now &rarr;
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-center items-center mt-4  mr-5 p-2 lg:hidden '>
                        <button
                            onClick={handleClick}
                            className='text-sm font-medium text-black hover:text-teal-600 cursor-pointer border border-teal-600 rounded-lg px-4 py-2'
                            style={{ borderStyle: 'solid', borderWidth: '1px', padding: '8px', height: 'auto' }}
                        >
                            View All
                        </button>
                    </div>
                </div>

                {showToast && (
                    <div id="toast-success" className="transition-opacity duration-300 ease-in-out ml-4 fixed bottom-5 inset-x-0 flex items-center justify-center w-full max-w-xs p-4 mb-4 text-gray-800 bg-slate-50 rounded-lg shadow-lg " style={toastStyle} role="alert">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">{showToastMessage}</div>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => setShowToast(false)} aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                )}
            </div>
        </>
    );
}

export default ProductCard;

