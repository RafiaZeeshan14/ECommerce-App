import React, { useEffect } from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

const HelpCenter = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className='poppins-medium'> 
            <Navbar backgroundColor="#eeeeee" />
            <div class="relative flex mt-28">
                <div class=" h-56   bg-cover bg-center w-full bg-no-repeat lg:h-70" style={{ backgroundImage: "url(/bg.png)" }}></div>
                <div class="c-hero-gradient-bg absolute top-0 left-0 h-56 w-full bg-cover bg-no-repeat lg:h-68">
                    <div class="py-20 px-6 sm:px-12 lg:px-20">
                        <h1 class=" text-2xl text-white sm:text-3xl md:text-4.5xl lg:text-5xl">
                            Help Center
                        </h1>
                        <div class="flex pt-2">
                            <a href="/" class=" text-base text-white transition-colors hover:text-primary">Home</a>
                            <span class="px-2  text-base text-white">.</span>
                            <span class=" text-base text-white">Help Center</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-8 py-8 lg:py-16  mt-12">
                <div class="container mx-auto text-center">
                    <h5
                        class="block antialiased tracking-normal  font-semibold leading-snug text-blue-gray-900 mb-4 !text-base lg:!text-2xl"
                    >
                        Customer Care
                    </h5>
                    <h1
                        class="block antialiased tracking-normal font-semibold leading-tight text-blue-gray-900 mb-4 !text-3xl lg:!text-5xl"
                    >
                        We're Here to Help
                    </h1>
                    <p
                        class="block antialiased  leading-relaxed text-inherit mb-10 font-normal !text-md lg:mb-10 mx-auto max-w-3xl !text-gray-500"
                    >
                        Whether it's a question about our services, a request for technical
                        assistance, or suggestions for improvement, our team is eager to hear from
                        you.
                    </p>
                    <div class="flex justify-center mb-20 ">
                        <div class="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Describe issue"
                                class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-gray-900 placeholder-gray-400 text-sm"
                            />
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
                            </svg>
                        </div>
                    </div>


                    <div class="mb-20">
                        <h2 class="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
                            Frequently Asked Questions !
                        </h2>
                        <div class="text-center max-w-2xl mx-auto">
                            <details class="mb-4 bg-gray-50 p-4 rounded-md">
                                <summary class="text-md lg:text-lg font-medium text-gray-800 cursor-pointer">
                                    How do I reset my password?
                                </summary>
                                <p class="text-gray-600 text-sm lg:text-md mt-2">
                                    You can reset your password by going to the account settings and clicking on "Reset Password". </p>
                            </details>
                            <details class="mb-4 bg-gray-50 p-4 rounded-md">
                                <summary class="text-md  lg:text-lg font-medium text-gray-800 cursor-pointer">
                                    Where can I find my order history?
                                </summary>
                                <p class="text-gray-600 mt-2 text-sm lg:text-md">
                                    Your order history can be found under the "Orders" section in your account.  </p>
                            </details>
                            <details class="mb-4 bg-gray-50 p-4 rounded-md">
                                <summary class="text-md lg:text-lg  font-medium text-gray-800 cursor-pointer">
                                    How do I contact customer support?
                                </summary>
                                <p class="text-gray-600 mt-2 text-sm lg:text-md">
                                    You can contact customer support by clicking on the "Contact Us" link at the bottom of the page. </p>
                            </details>
                        </div>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start"
                    >
                        <img
                            src="map.svg"
                            alt="map"
                            class="w-full h-full lg:max-h-[510px]"
                        />
                        <form action="#" class="flex flex-col gap-4 lg:max-w-sm">
                            <p
                                class="block antialiased  text-sm leading-normal text-inherit text-left !font-semibold !text-gray-600"
                            >
                                Select Options for Business Engagement
                            </p>
                            <div class="flex gap-4">
                                <button
                                    class="align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] max-w-fit"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    General inquiry</button
                                ><button
                                    class="align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] max-w-fit"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    Product Support
                                </button>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <p
                                        class="block antialiased text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900"
                                    >
                                        First Name
                                    </p>
                                    <div class="relative w-full h-11 !min-w-full">
                                        <input
                                            placeholder="First Name"
                                            name="first-name"
                                            class="peer w-full h-full bg-transparent  font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        /><label
                                            class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"
                                        >
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="block antialiased text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900"
                                    >
                                        Last Name
                                    </p>
                                    <div class="relative w-full h-11 !min-w-full">
                                        <input
                                            placeholder="Last Name"
                                            name="last-name"
                                            class="peer w-full h-full bg-transparent font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        /><label
                                            class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"
                                        >
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p
                                    class="block antialiased  text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900"
                                >
                                    Your Email
                                </p>
                                <div class="relative w-full h-11 !min-w-full">
                                    <input
                                        placeholder="name@email.com"
                                        name="email"
                                        class="peer w-full h-full bg-transparent  font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                    /><label
                                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"
                                    >
                                    </label>
                                </div>
                            </div>
                            <div>
                                <p
                                    class="block antialiased  text-sm leading-normal text-inherit mb-2 text-left font-medium !text-gray-900"
                                >
                                    Your Message
                                </p>
                                <div class="relative w-full !min-w-full">
                                    <grammarly-extension
                                        data-grammarly-shadow-root="true"
                                        class="dnXmp"
                                    ></grammarly-extension
                                    ><grammarly-extension
                                        data-grammarly-shadow-root="true"
                                        class="dnXmp"
                                    ></grammarly-extension
                                    ><textarea
                                        rows="6"
                                        placeholder="Message"
                                        name="message"
                                        class="peer w-full h-full min-h-[100px] bg-transparent font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !resize-none !border !border-gray-300 text-gray-900 placeholder:!text-gray-500 focus:!border-gray-900 focus:!border-2 focus:border-t-gray-900"
                                        spellcheck="false"
                                    ></textarea
                                    ><label
                                        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden"
                                    ></label>
                                </div>
                            </div>
                            <button
                                class="align-middle select-none  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 w-full"
                                type="button"
                                data-ripple-light="true"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section >
            <Footer />
        </div>
    )
}

export default HelpCenter
