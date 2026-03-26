import React from 'react';
import { servicesData } from '../mockData';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

const ServicesDetailPage = () => {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Our Legal Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive legal solutions tailored to meet the unique needs of your business, from compliance audits to strategic consulting.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {servicesData.map((service) =>
            <div key={service.id} className="bg-[#FDF5F0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <Button
                  className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-6 py-3 text-sm transition-all duration-300">

                    LEARN MORE
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">Why Choose Our Services</h2>
          <div className="space-y-6">
            {["Industry linked legal expertise",

            "Proven track record with 1,000+ satisfied business clients", "Proactive seminars and frequent competitions for engagement",

            "Practical, creative solutions tailored to your business needs",
            "Comprehensive support from formation to exit planning",
            "Expert guidance in complex regulatory environments"].
            map((benefit, index) =>
            <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#E31E24] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default ServicesDetailPage;