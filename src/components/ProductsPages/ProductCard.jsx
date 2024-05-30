import React, { useContext, useState } from 'react'
import { ProductsContext, useProducts } from '../../context/ProductsContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ProductCard = () => {
    // const { bestProducts } = useContext(ProductsContext);
    const { sellerProducts, menProducts, womenProducts } = useProducts();
    const [showAllProducts, setShowAllProducts] = useState(false);
    const displayedProducts = showAllProducts ? sellerProducts : sellerProducts.slice(0, 4);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/bestseller');
    };
    const { id } = useParams();
    console.log("🚀 ~ ProductOverview ~ id:", id)
    
    // Combine all products into a single array
    const allProducts = [...sellerProducts, ...menProducts, ...womenProducts];

    // Filter the product based on the id
    const product = allProducts.filter((item) => item.id == id);
    const { dispatch } = React.useContext(CartContext);

    const handleAddToCart = (product) => {
        console.log("Adding to cart: ", product);
        dispatch({ type: 'ADD_TO_CART', payload: product });
      };
      
    return (
        <>

            <div className='flex justify-between '>
                <h1 className='sm:text-xl text-md font-medium text-black m-6 '>
                    Our Best Seller
                </h1>
                <h1
                    className='sm:text-md lg:text-lg text-xs font-medium text-black m-6 hover:text-teal-600 cursor-pointer'
                    onClick={handleClick}
                >
                    VIEW ALL BEST SELLER
                </h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center px-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10' >
                {displayedProducts.map(product => (
                    <div key={product.id} >
                        <div className="group relative h-[350px] w-[300px] rounded-md overflow-hidden cursor-pointer  ">
                            <img
                                src={product.image}
                                alt="AirMax Pro"
                                className="absolute top-0 right-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-105"
                            />

                            {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div> */}
                            <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                           {/* Shop-svg */}
                                <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button  onClick={() => handleAddToCart(product)} class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className=" bottom-4 left-4 text-left max-w-68 mt-5">
                            <div className='flex justify-between '>
                                <h1 className="text-lg font-semibold text-black">{product.title}</h1>
                                <p className='text-gray-900 '><b>$</b>{product.price}</p>
                            </div>
                            <Link to={`/productoverview/${product.id}`}>
                                <button className="mt-2 inline-flex hover:text-teal-600 cursor-pointer items-center text-xs font-semibold text-gray-600">
                                    Shop Now &rarr;
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default ProductCard;

