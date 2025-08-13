// src/components/CallToAction.jsx

import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section id="cta" className="min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center items-center px-6 py-24 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ready to revolutionize your city’s lighting?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 mb-10 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Let’s work together to build smarter, sustainable cities — starting with your streets.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="bg-lime-500 hover:bg-lime-600 text-black font-bold py-3 px-6 rounded-full transition"
        >
          Talk to Us
        </a>
        <a
          href="#demo"
          className="border border-gray-400 hover:border-white text-white font-bold py-3 px-6 rounded-full transition"
        >
          Book a Demo
        </a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
