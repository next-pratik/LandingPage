// src/components/DashboardShowcase.jsx

import React from "react";
import { motion } from "framer-motion";

const DashboardShowcase = () => {
  return (
    <section id="dashboard" className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-5xl w-full text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Control everything. From anywhere.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Monitor and manage every streetlight in real time — from a single dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative shadow-xl rounded-xl overflow-hidden"
        >
          <img
            src="/dashboard-placeholder.png"
            alt="LightOS Dashboard"
            className="w-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
