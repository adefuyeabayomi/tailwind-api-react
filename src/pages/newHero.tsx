import React from "react";
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

// Hero Section for Fintech Company
export default function HeroSection() {
  const bubbles = [
    {
      text: "Secure Payments",
      size: 260,
      top: "36%",
      left: "-6%",
      delay: 0,
    },
    {
      text: "Loan Management",
      size: 260,
      top: "39%",
      right: "-6%",
      delay: 0.2,
    },
    {
      text: "Next-Gen Solutions",
      size: 160,
      top: "65%",
      left: "25%",
      delay: 0.4,
    },
    {
      text: "Future-Ready",
      size: 160,
      top: "68%",
      right: "25%",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 flex flex-col items-center justify-center text-center px-6">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0.15 }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              delay: bubble.delay,
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="absolute rounded-full bg-indigo-300/50 backdrop-blur-md flex items-center justify-center text-xs sm:text-sm font-medium text-gray-700 shadow-lg"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
            }}
          >
            {bubble.text}
          </motion.div>
        ))}
      </div>

      {/* Title */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Building <span className="text-indigo-600">Financial Solutions</span>{" "}
        <br />
        With Ready Made Products.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 text-lg text-gray-600 max-w-2xl"
      >
        Empowering fintech innovators with advanced tools for loan management,
        payment gateways, and future-ready financial solutions.
      </motion.p>

      {/* CTA */}
      {/* Background Gradient Bubbles */}

      <div className="w-full max-w-sm mt-8 flex flex-col sm:flex-row gap-4">
        <motion.a
          href="#products"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 text-center"
        >
          Explore Products
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-2xl bg-gray-200 text-gray-800 font-medium shadow-lg hover:bg-gray-300 text-center"
        >
          Contact Us
        </motion.a>
      </div>

      {/* Glassmorphic Credit Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative mt-16 w-80 h-48 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-600/40 mix-blend-overlay"></div>
        <div className="relative z-10 p-6 flex flex-col justify-between h-full text-left text-white">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Lyseis Pay</span>
            <CreditCard size={28} />
          </div>
          <div>
            <p className="tracking-widest text-sm">1234 5678 9012 3456</p>
            <div className="flex justify-between mt-2 text-xs">
              <span>12/27</span>
              <span>JOHN DOE</span>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
