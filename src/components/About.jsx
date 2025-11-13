
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          About <span className="text-[#ff7b00]">VyomGarud</span>
        </h2>
        <div className="w-20 h-1 bg-[#ff7b00] mx-auto mb-10" />
        <p className="text-xl text-neutral-300 leading-relaxed">
          VyomGarud pioneers the future of unmanned aerial systems with cutting-edge technology 
          designed for defense and critical applications. Our mission is to deliver reliable, 
          autonomous UAV solutions that redefine precision, security, and operational excellence. 
          Through advanced AI integration and military-grade engineering, we ensure every flight 
          counts in safeguarding what matters most.
        </p>
      </motion.div>
    </section>
  );
};
export default About;