import React from 'react';
import { teamData } from '../mockData';
import { Award, Target, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <h1 className="!font-['Verdana'] !text-5xl mb-6 text-gray-900">About             
CENTER FOR BUSINESS LAW
          </h1>
          <p className="!font-['Georgia'] !text-3xl text-gray-700">Premier Law Institution dedicated to empower business minds and layperson to understand Legal jargon through expert legal guidance, comprehensive research and trusted advisory services since our founding.

          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E31E24] rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3"> MISSION</h3>
              <p className="!font-['Georgia'] !text-base !text-justify text-gray-700">Simplify and guide through complex legal issues and contemporary events for business owners by offering achievable solutions and proactive counselling.

              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E31E24] rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">VALUES</h3>
              <p className="!font-['Georgia'] !text-lg !text-justify text-gray-700">Excellence, integrity and innovation guide everything we do, ensuring the highest standards of legal service.

              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E31E24] rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">APPROACH</h3>
              <p className="!font-['Georgia'] !text-base !text-justify text-gray-700">We combine over industry expertise with creative problem-solving techniques to prevent disputes and promote over development in the legal domain of business.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The Center for Business Law was founded with a singular vision: to provide small businesses and entrepreneurs with the same caliber of legal expertise typically reserved for large corporations. Our journey began over 50 years ago, and since then, we've grown into a trusted partner for over 1,000 businesses.
            </p>
            <p>
              Throughout our history, we've successfully completed 500+ projects, facilitated 500+ business acquisitions, and developed 100+ succession plans. These milestones reflect our commitment to not just legal excellence, but to the success and longevity of the businesses we serve.
            </p>
            <p>
              Today, we continue to innovate and adapt, staying ahead of regulatory changes and market dynamics to provide our clients with forward-thinking legal strategies that drive business growth and protect their interests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamData.map((member) =>
            <div key={member.id} className="text-center">
                <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg" />

                <h3 className="text-xl font-serif text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-[#E31E24] mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default AboutPage;