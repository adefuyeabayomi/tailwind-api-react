import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/LOGO BLACK PNG.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Lyseis Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden h-screen w-full bg-white border-t border-gray-200 px-6 py-4 space-y-4"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block text-gray-700 text-center hover:text-indigo-600 font-medium my-10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
