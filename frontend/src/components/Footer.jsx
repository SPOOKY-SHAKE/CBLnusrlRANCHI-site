import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-[#FDF5F0] border-t border-[#E8D5C4]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23C4A574'%3E%3Cpath d='M35 20 L50 10 L65 20 L65 45 L50 55 L35 45 Z' fill='none' stroke='%23C4A574' stroke-width='2'/%3E%3Crect x='48' y='35' width='4' height='25' fill='%23C4A574'/%3E%3Ccircle cx='50' cy='65' r='3' fill='%23C4A574'/%3E%3Cpath d='M30 70 L50 60 L70 70' fill='none' stroke='%23C4A574' stroke-width='2'/%3E%3Ctext x='50' y='90' font-family='serif' font-size='12' text-anchor='middle' fill='%23C4A574' font-weight='bold'%3ECBL%3C/text%3E%3C/g%3E%3C/svg%3E"
                alt="CBL Logo"
                className="w-12 h-12"
              />
            </div>
            <div className="ml-1">
              <div className="text-xs uppercase tracking-wider text-gray-600">CENTER FOR</div>
              <div className="text-sm font-semibold text-gray-800">BUSINESS LAWS</div>
            </div>
          </Link>
          
          <nav className="flex flex-wrap gap-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">About</Link>
            <Link to="/services" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Services</Link>
            <Link to="/blog" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-[#E31E24] transition-colors">Contact</Link>
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
