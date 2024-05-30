import React, { useEffect } from 'react'
import Navbar from '../Common/Navbar';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';
import Footer from '../Common/Footer';


const ProductOverview = () => {
  const { id } = useParams();
  console.log("🚀 ~ ProductOverview ~ id:", id)

  const { sellerProducts, menProducts, womenProducts } = useProducts();

  // Combine all products into a single array
  const allProducts = [...sellerProducts, ...menProducts, ...womenProducts];

  // Filter the product based on the id
  const product = allProducts.filter((item) => item.id == id);


  const { dispatch } = React.useContext(CartContext);

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <>
      <Navbar backgroundColor="#eeeeee" />
      <header className="  poppins-medium text-center mt-40">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pb-12">Product Overview</h2>
      </header>
      {product.map((item) => (
        <div class="poppins-medium mx-auto  max-w-7xl px-4 md:px-8 2xl:px-16 mt-15">
          <div class="block grid-cols-9 items-start lg:gap-x-2 md:gap-x-5 pb-10 pt-7 md:grid lg:pb-4 ">
            <div class="col-span-5 grid grid-cols-1 gap-2.5">
              <div class=" transition duration-150 flex justify-center ease-in hover:opacity-90">
                <img
                  src={item.image}
                  alt="Nike Air Max 95 By You--0"
                  class="md:h-auto lg:h-4/5 w-auto mt-8 lg:mt-0"
                />
              </div>
            </div>
            <div class="col-span-4 pt-8 lg:pt-0">
              <div class="mb-7 border-b border-gray-300 pb-7">
                <h2 class="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                  {item.title}
                </h2>
                <p class=" text-sm leading-6  lg:text-base lg:leading-8">
                  The Nike Air Max 95 By You lets you take inspiration from the human
                  body itself. The midsole represents the spine, graduated panels are
                  the muscles, the lace loops are the shoe&#x27;s ribs and the mesh in
                  the upper is the skin.
                </p>
                <div class="mt-5 flex items-center ">
                  <div class="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                    {item.price}
                  </div>
                  <span class="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                    $50.00
                  </span>
                </div>
              </div>
              <div class="border-b border-gray-300 pb-3  ">
                <div class="mb-4">
                  <h3 class="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                    size
                  </h3>
                  <ul class="colors -mr-3 flex flex-wrap">
                    <li class="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      S
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      M
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      L
                    </li>
                    <li class="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
                      XL
                    </li>
                  </ul>
                </div>

              </div>
              <div class="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  lg:pr-12 2xl:pr-32">
                <button
                  type="button"
                  class="h-11 w-full rounded-md bg-gradient-to-r from-teal-700 to-teal-400 hover:opacity-80 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  class="h-11 w-11 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
                // onClick={() => handleAddToWishlist(item)}
                >
                  {/* Heart icon */}

                  <svg xmlns="http://www.w3.org/2000/svg" width="22px"
                    class="cursor-pointer fill-[#009688] hover:fill-[#00897B] inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000" />
                  </svg>
                </button>
              </div>


              <div class="shadow-sm ">
                <header class="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                  <h2 class="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                    Product Details
                  </h2>
                  <div class="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                    <div class="bg-heading h-0.5 w-full rounded-sm"></div>
                    <div class="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
                  </div>
                </header>
                <div>
                  <div class="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                    Our Customer Experience Team is available 7 days a week and we offer
                    2 ways to get in contact.Email and Chat . We try to reply quickly,
                    so you need not to wait too long for a response!.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  )
}

export default ProductOverview;
