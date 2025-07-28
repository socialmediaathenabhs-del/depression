
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bgImg from '../assets/Depression/homeBG.png';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[120vh] sm:min-h-[126vh] overflow-hidden bg-[#f4f9ff] "
    
    style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
      >
      {/* <img
        src={bgImg}
        alt="Doctor and patient having a consultation in a medical office"
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center brightness-50"
      /> */}

      {/* Top Buttons */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-22 flex space-x-2 sm:space-x-3 z-20">
        <button className="flex items-center space-x-1 sm:space-x-2 bg-white text-[#163683] text-[9px] sm:text-[14px] font-bold rounded-full border border-[#163683] px-2 sm:px-4 py-0.5 sm:py-2 shadow-md hover:brightness-110 transition">
        <a href="https://wa.me/919289730444" target="_blank" rel="noopener noreferrer" className="">
          <i className="fab fa-whatsapp text-[#25D366] text-xs sm:text-2xl "></i>
          <span className=''>Get Cost on Whatsapp</span>
        </a>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 bg-white text-[#163683] text-[9px] sm:text-[14px] font-semibold rounded-full border border-[#163683] px-2 sm:px-4 py-0.5 sm:py-2 shadow-md hover:brightness-110 transition">
        <a href="tel:+919289730444" className="">
          <i className="fas fa-phone text-xs text-black sm:text-2xl"></i>
          <span>+91 92897 30444</span>
          </a>
        </button>
      </div>

      {/* Left Form */}
      <div
        className="absolute top-[200px] sm:top-[380px] left-16 sm:left-10 -translate-y-1/2 bg-[#163683B3] rounded-2xl border-[1px] border-white px-4 sm:px-6 py-4 sm:py-10 w-64 sm:w-[400px] flex flex-col space-y-3 sm:space-y-8 text-white sm:h-[610px]"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <h2 className="text-center font-semibold text-xs sm:text-[24px] leading-tight">
          Schedule Your
          <br />
          Confidential Consultation
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <input
          type="text"
          placeholder="Your Mobile No."
          className="bg-[#FFFFFF45]  rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 focus:outline-none border-[0.4px] border-white"
        />
        <textarea
          placeholder="Describe Your Case"
          rows="6"
          className="bg-[#FFFFFF45] rounded-md px-2 sm:px-4 py-1 sm:py-4 text-[16px] font-thin placeholder-white placeholder-opacity-70 resize-none focus:outline-none border-[0.4px] border-white h-[50px] sm:h-[180px]"
        />
        <button className="bg-white text-[#01184C] font-semibold text-xs sm:text-[20px] rounded-full py-1 sm:py-2 hover:bg-gray-100 transition">
          Start Your Healing Journey
        </button>
      </div>

      {/* Right Text */}
      <div className="absolute top-[500px] sm:top-[570px] right-20 sm:right-[500px] -translate-y-1/2 max-w-xs sm:max-w-lg text-white text-center px-2 sm:px-0">
        
        <h1 className="relative text-2xl sm:text-5xl  font-light leading-tight max-w-[800px] mx-auto text-left">
          Your Mental
          <br />
          Health is a Journey
          <br />
          not a Destination
        </h1>
        <div className="relative  left-[100px] sm:left-[150px]  block w-px h-10 bg-gradient-to-b from-transparent to-white"></div>
        <button className="relative  sm:right-12 mt-4 sm:mt-6 px-4 sm:px-8 py-1 text-xs sm:text-base font-thin border border-white rounded-full hover:bg-white hover:text-[#3a4f8a] transition">
          Start your journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
