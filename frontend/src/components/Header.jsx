import React from 'react';
import { Button } from './ui/button';
import { Scale } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FDF5F0] z-50 border-b border-[#E8D5C4]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-[#E31E24] hover:text-[#B81820] transition-colors font-medium">Home</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">About</a>
          <a href="#services" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Services</a>
          <a href="#blog" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Blog</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Contact</a>
        </nav>
        
        <Button 
          variant="outline" 
          className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full px-6"
        >
          GET STARTED
        </Button>
      </div>
    </header>
  );
};

export default Header;
