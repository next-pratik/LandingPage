// src/components/SmartLightingIntro.jsx
import { motion } from 'framer-motion';

// --- Animated SVG Illustration Component ---
// This replaces the 3D model with a lightweight and performant animation.
const SmartLightIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Faint background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 255, 153, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="300" height="300" fill="url(#grid)" />
        
        {/* Central pulsing core */}
        <motion.circle
          cx="150"
          cy="150"
          r="15"
          fill="rgba(0, 255, 153, 0.2)"
        />
        <motion.circle
          cx="150"
          cy="150"
          r="8"
          fill="#00ff99"
          stroke="#fff"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Radiating network lines and data dots */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={angle} transform={`rotate(${angle}, 150, 150)`}>
            {/* The line */}
            <motion.path
              d="M 150 150 Q 180 120 200 80"
              fill="none"
              stroke="rgba(0, 255, 153, 0.5)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* The moving dot */}
            <motion.circle
              cx="0"
              cy="0"
              r="3"
              fill="#00ff99"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: angle / 180
              }}
              style={{ motionPath: 'path("M 150 150 Q 180 120 200 80")' }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// --- Main Intro Section Component ---
const SmartLightingIntro = () => {
  return (
    <section id="what-you-do" className="min-h-screen bg-[#0a0a0a] text-white flex items-center py-20 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            We bring autonomous lighting to your streets.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl max-w-xl mt-6 text-gray-300 mx-auto md:mx-0"
          >
            LightOS connects, monitors, and controls lighting across cities — all in real-time, visualized and managed through a single, intelligent platform.
          </motion.p>
        </div>

        {/* Right Side: Animated SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="w-full h-[300px] md:h-[400px]"
        >
          <SmartLightIllustration />
        </motion.div>
        
      </div>
    </section>
  )
}

export default SmartLightingIntro;