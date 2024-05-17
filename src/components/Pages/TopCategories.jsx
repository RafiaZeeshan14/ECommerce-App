import React from 'react'

const TopCategories = () => {
    return (
        <div>
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl py-10">Top Categories</h2>
            </header >
            <div class="p-1 flex flex-wrap items-center gap-16 justify-center mt-6"> 
                <div class="relative h-[400px] w-[300px] rounded-full overflow-hidden animate-fade-up">
                    <div class="absolute inset-0 bg-black opacity-10 cursor-pointer transition-opacity duration-300 hover:opacity-15 hover:scale-105"></div>
                    <img
                        src="/womfashion.jpg"
                        alt="Women Fashion"
                        class="z-0 h-full w-full object-cover"
                    />
                    <div class="absolute bottom-10 left-20">
                        <h1 class="text-lg font-semibold text-white text-center">Women Fashion</h1>
                    </div>
                </div>

                <div class="relative h-[400px] w-[300px] rounded-full overflow-hidden animate-fade-up">
                    <div class="absolute inset-0 bg-black opacity-10 cursor-pointer transition-opacity duration-300 hover:opacity-15 hover:scale-105"></div>
                    <img
                        src="/men.jpg"
                        alt="Women Fashion"
                        class="z-0 h-full w-full object-cover"
                    />
                    <div class="absolute bottom-10 left-20">
                        <h1 class="text-lg font-semibold text-white text-center">Men Fashion</h1>
                    </div>
                </div>
                <div class="relative h-[400px] w-[300px] rounded-full overflow-hidden animate-fade-up">
                    <div class="absolute inset-0 bg-black opacity-10 cursor-pointer transition-opacity duration-300 hover:opacity-15 hover:scale-105"></div>
                    <img
                        src="/both.jpeg"
                        alt="Women Fashion"
                        class="z-0 h-full w-full object-cover p-1"
                    />
                    <div class="absolute bottom-10 left-20">
                        <h1 class="text-lg font-semibold text-white text-center ">Men & Women </h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopCategories
