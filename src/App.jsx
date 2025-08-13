import React from 'react';
import Header from './components/Header';
import  HeroSection  from './components/HeroSection'; // Your 3D scene
import SmartLightingIntro from './components/SmartLightingIntro';
import HowItWorks from './components/HowItWorks';
import DashboardShowcase from "./components/DashboardShowcase";
import ImpactSection from "./components/ImpactSection";
import CallToAction from "./components/CallToAction";
//import { useLenis } from './hooks/useLenis'; // Smooth scroll
//import useScrollProgress from './hooks/useScrollProgress'; // Scroll progress hook
import './index.css';

function App() {
  // Initialize smooth scrolling with Lenis
 

  // Get scroll progress (0 to 1)


  return (
    <div className="bg-black relative min-h-screen">
     


      {/* Main page content */}
      <div className="relative bg-black z-10">
         <Header />
         <HeroSection />
        <SmartLightingIntro />
        <HowItWorks />
        <DashboardShowcase />
        <ImpactSection />
        <CallToAction />
      </div>
    </div>
  );
}

export default App;
