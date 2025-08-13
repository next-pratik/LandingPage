// src/components/HowItWorks.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBolt, FaChartLine, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import { useRef } from 'react';

const features = [
  {
    icon: <FaBolt size={28} />,
    title: 'Real-time Monitoring',
    desc: 'Our IoT nodes provide a live status of every streetlight, ensuring complete network visibility, 24/7.',
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Energy Optimization',
    desc: 'Using AI-driven analytics, our system adapts lighting based on real-world conditions, saving energy without compromising safety.',
  },
  {
    icon: <FaClock size={28} />,
    title: 'Autonomous Scheduling',
    desc: 'Set it and forget it. Lights turn on/off and dim automatically based on celestial patterns, local weather, and traffic data.',
  },
  {
    icon: <FaExclamationTriangle size={28} />,
    title: 'Proactive Fault Detection',
    desc: 'Don’t wait for a citizen complaint. Our system sends instant alerts the moment a fault is detected, enabling proactive maintenance.',
  },
];

// Motion Variants
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Feature Card
const FeatureCard = ({ feature, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <motion.div
      variants={isOdd ? cardVariants.hiddenRight : cardVariants.hiddenLeft}
      whileInView={cardVariants.visible}
      viewport={{ once: true, amount: 0.5 }}
      className={`flex items-center w-full md:w-1/2 ${isOdd ? 'md:self-end md:flex-row-reverse' : 'md:self-start'}`}
    >
      <div className="hidden md:flex flex-col items-center relative">
        {/* Pulsing Neon Icon */}
        <div className="w-12 h-12 rounded-full bg-green-400/20 border-2 border-green-400 flex items-center justify-center text-green-400 animate-pulse shadow-neon">
          {feature.icon}
        </div>
        {/* Connecting line segment */}
        <div className="w-px flex-1 bg-green-400/30 mt-2"></div>
      </div>

      <div className="w-full md:w-auto md:max-w-md p-6 rounded-xl backdrop-blur border border-white/10 shadow-lg bg-white/5 group hover:border-green-400/50 hover:scale-105 transition-all duration-300 mx-4">
        <div className="md:hidden mb-4 text-green-400">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
        <p className="text-gray-300">{feature.desc}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Line grows based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="min-h-screen w-full bg-black text-white px-4 py-24 flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col items-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Intelligent. Connected. Effortless.
        </motion.h2>

        <div className="relative w-full flex flex-col items-center">
          {/* Scroll-animated vertical line */}
          <motion.div
            className="hidden md:block absolute top-0 left-1/2 w-1 bg-green-400/30 -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col items-center w-full gap-y-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Neon glow shadow */}
      <style>{`
        .shadow-neon {
          box-shadow: 0 0 10px rgba(0,255,128,0.7), 0 0 20px rgba(0,255,128,0.5);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
