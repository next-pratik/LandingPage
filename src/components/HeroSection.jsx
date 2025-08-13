import React, { useState, useEffect } from 'react';
import Hero1 from '../assets/Hero.png';
// import Hero2 from '../assets/Hero2.png'; 
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const images = [Hero1];
  const [currentImage, setCurrentImage] = useState(0);

  const texts = [
    "City Streets Are Wasting Energy Every Night",
    "Our smart street lighting system saves energy",
    "Reduces costs and keeps communities safe"
  ];    



  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center px-6 bg-gradient-to-b from-gray-900 to-black">
      
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-100 opacity-100 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl">
       <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-6 animate-fadeInUp">

          <Typewriter
            words={texts}
            loop={0} // infinite loop
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>

      {/* Inline CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
