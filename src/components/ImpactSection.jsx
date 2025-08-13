// src/components/ImpactSection.jsx

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Energy Savings", value: 30, suffix: "%" },
  { label: "System Uptime", value: 99.9, suffix: "%" },
  { label: "States Covered", value: 5 },
  { label: "Real-Time Monitoring", value: 1, suffix: "M+" },
];

const ImpactSection = () => {
  return (
    <section id="impact"  className="min-h-screen bg-black text-white px-6 py-20 flex flex-col justify-center items-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lighting smarter cities, sustainably.
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Proven technology. Real impact.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.7 }}
          >
            <div className="text-4xl font-bold text-lime-400">
              <CountUp
                end={stat.value}
                duration={2}
                enableScrollSpy
                suffix={stat.suffix || ""}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
