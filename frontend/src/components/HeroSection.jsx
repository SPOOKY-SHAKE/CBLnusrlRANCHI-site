import React from 'react';
import { Button } from './ui/button';
import { statsData } from '../mockData';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 bg-[#FDF5F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <img 
          src="https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Business Law Background"
          className="w-full h-full object-cover blur-sm"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-8">
            Discover the Center for Business Law's Commitment to Excellence in Legal Education
          </h1>
          
          <div className="space-y-6 mb-8 text-gray-700 leading-relaxed">
            <p>
              The Center for Business Law serves as a premier hub for entrepreneurs seeking insights into business law and compliance, offering extensive resources, research, and events tailored for today's innovators.
            </p>
            
            <p>
              We provide R&D services, compliance audits, and expert insights in taxation and trade law, establishing trust through professional guidance and thought leadership shaped by industry recognition.
            </p>
            
            <p>
              Join us at the Center for Business Law, where our passion for business law cultivates knowledge and shapes future leaders.
            </p>
          </div>
          
          <Button 
            className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">{stat.label}</div>
              <div className="text-2xl font-light text-gray-400">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
