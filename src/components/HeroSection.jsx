import React from 'react';
// import BackgroundImage from '../assets/your-background-image.jpg'; // Replace with your image path
import HeroBG from "../assets/HeroBG.jpg"
const HeroSection = () => {
  return (
    <section
      className="absolute -z-10 bg-fixed top-0 left-0 w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${HeroBG})`,
      }}
    >
      <div className="text-center w-1/3">
        <h1 className="text-7xl font-bold mb-4 text-gray-300">Aaman Artist</h1>
        <p className="text-3xl mb-8 text-gray-300 ">Bring Imagination To Reality</p>
      </div>
    </section>
  );
};

export default HeroSection;
