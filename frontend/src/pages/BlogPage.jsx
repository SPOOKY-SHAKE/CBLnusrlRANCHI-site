import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../mockData';
import { Calendar, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BlogPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      await axios.post(`${API}/newsletter/subscribe`, { email });
      
      toast({
        title: "Subscribed Successfully!",
        description: "Welcome! Check your email for a confirmation from cbl@nusrlranchi.ac.in",
      });
      
      setEmail('');
    } catch (error) {
      const message = error.response?.data?.detail || "Failed to subscribe.";
      toast({
        title: "Subscription Error",
        description: message,
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <div className="pt-24">
      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Business Law Insights
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore a wealth of knowledge in business law through our blogs, research, and events designed to empower entrepreneurs and businesses alike.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-gray-700 mb-8">
            Get the latest legal insights, regulatory updates, and business law news delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
            />
            <button 
              type="submit"
              disabled={isSubscribing}
              className="bg-[#E31E24] hover:bg-[#B81820] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
