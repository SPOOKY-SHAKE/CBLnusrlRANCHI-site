import React from 'react';
import { Button } from './ui/button';
import { servicesData } from '../mockData';

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 text-left max-w-4xl">
          Explore Our Comprehensive Service Offerings
        </h2>
        
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-xl group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl font-serif text-gray-900">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                <Button 
                  className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
