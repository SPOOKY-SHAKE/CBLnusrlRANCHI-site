import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../mockData';
import { Calendar, User } from 'lucide-react';

const BlogPage = () => {
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

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#E31E24] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
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
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
            />
            <button className="bg-[#E31E24] hover:bg-[#B81820] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
