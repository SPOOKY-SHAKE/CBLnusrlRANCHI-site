import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-[#FDF5F0] border-t border-[#E8D5C4]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <Scale className="w-8 h-8 text-[#C4A574]" strokeWidth={1.5} />
                <div className="text-xs font-serif mt-1 text-[#C4A574] font-bold">CBL</div>
              </div>
            </div>
            <div className="ml-2">
              <div className="text-xs uppercase tracking-wider text-gray-600">CENTER FOR</div>
              <div className="text-sm font-semibold text-gray-800">BUSINESS LAWS</div>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6">
            <a href="#home" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">About</a>
            <a href="#services" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Services</a>
            <a href="#blog" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Blog</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#E8D5C4] text-center">
          <p className="text-sm text-gray-600">
            Copyright © {currentYear} CENTER FOR BUSINESS LAW
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
