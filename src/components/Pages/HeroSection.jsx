import React from "react";
import Navbar from "../Common/Navbar";
import { FaAngleDown } from "react-icons/fa";

const HeroSection = () => {
  // Function to handle scroll down
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the height of the viewport
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <div>
      <div className="w-full h-screen overflow-x-hidden">
        <div className="relative">
          <header>
            <div className="absolute top-0 z-50 w-full sm:px-12 py-4 shadow-5xl bg-opacity-10">
              <div className="flex items-center space-x-2"></div>
              <Navbar />
            </div>
            <div>
              {/* Video Slide */}
              <div className="overflow-hidden  relative h-screen">
                {/* Small screen image */}
                <img
                  src="/HomeImg/smimg.jpeg"
                  className="absolute h-screen w-full block sm:hidden"
                  alt="Small Screen Image"
                />
                {/* Medium - large screen image */}
                <div className="absolute inset-0 bg-black opacity-500 hidden sm:block"></div>
                <video
                  src="/HomeImg/herovid2.mp4"
                  autoPlay
                  loop
                  muted
                  className=" absolute top-0 left-0 w-full h-full object-cover opacity-80 hidden sm:block xl:hidden "
                  alt="Hero Video"
                />
                 {/* xl screen image */}
                <img
                  src="/HomeImg/Banner2.webp"
                  className=" absolute h-screen w-full xl:block hidden"
                />

                {/* Add scroll down arrow */}
                <div className="absolute bottom-10 left-1/2 transform block sm:hidden -translate-x-1/2 flex flex-col items-center">
                  <FaAngleDown
                    className="text-black text-4xl cursor-pointer"
                    onClick={handleScrollDown}
                  />
                </div>
                <div className="absolute bottom-10 left-1/2 transform hidden sm:block  -translate-x-1/2 flex flex-col items-center">
                  <FaAngleDown
                    className="text-white text-4xl cursor-pointer"
                    onClick={handleScrollDown}
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
