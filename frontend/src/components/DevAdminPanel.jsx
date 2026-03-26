import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Settings } from 'lucide-react';
import { Button } from './ui/button';

const DevAdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('images');
  const [images, setImages] = useState({
    favicon: '/favicon.ico',
    logo: 'current',
    heroBackground: 'https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg',
    services: [
      'https://images.unsplash.com/photo-1598139384902-5a8217874645',
      'https://images.pexels.com/photos/7841431/pexels-photo-7841431.jpeg',
      'https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg',
      'https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg',
      'https://images.unsplash.com/photo-1534062310633-a22d6b04c01c'
    ],
    testimonials: [
      'https://images.unsplash.com/photo-1658249682487-882436e01650',
      'https://images.unsplash.com/photo-1658249682512-1bb162538ba9'
    ],
    team: [
      'https://images.unsplash.com/photo-1658249682487-882436e01650',
      'https://images.unsplash.com/photo-1658249682512-1bb162538ba9',
      'https://images.unsplash.com/photo-1764592620941-a5bcaa79ce92'
    ],
    blog: [
      'https://images.unsplash.com/photo-1598139384902-5a8217874645',
      'https://images.pexels.com/photos/7841431/pexels-photo-7841431.jpeg',
      'https://images.pexels.com/photos/7841466/pexels-photo-7841466.jpeg',
      'https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg',
      'https://images.unsplash.com/photo-1534062310633-a22d6b04c01c',
      'https://images.unsplash.com/photo-1658249682487-882436e01650'
    ]
  });

  const handleImageUpload = (category, index = null) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImageUrl = event.target.result;
          
          if (category === 'favicon') {
            // Update favicon
            const link = document.querySelector("link[rel~='icon']");
            if (link) {
              link.href = newImageUrl;
            }
            setImages(prev => ({ ...prev, favicon: newImageUrl }));
            localStorage.setItem('customFavicon', newImageUrl);
          } else if (index !== null) {
            // Update array item
            setImages(prev => {
              const newArr = [...prev[category]];
              newArr[index] = newImageUrl;
              return { ...prev, [category]: newArr };
            });
            localStorage.setItem(`custom_${category}_${index}`, newImageUrl);
          } else {
            // Update single item
            setImages(prev => ({ ...prev, [category]: newImageUrl }));
            localStorage.setItem(`custom_${category}`, newImageUrl);
          }
          
          // Force page reload to show changes
          setTimeout(() => window.location.reload(), 500);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleFaviconUpload = () => {
    handleImageUpload('favicon');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[100] bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 animate-pulse"
        title="Open Dev Admin Panel"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">🛠️ Dev Admin Panel - Image Manager</h2>
          <button onClick={() => setIsOpen(false)} className="hover:bg-purple-700 p-2 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-6 py-3 font-medium ${activeTab === 'images' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
          >
            <ImageIcon className="w-4 h-4 inline mr-2" />
            Site Images
          </button>
          <button
            onClick={() => setActiveTab('favicon')}
            className={`px-6 py-3 font-medium ${activeTab === 'favicon' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Favicon & Logo
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'favicon' && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">📌 Upload Favicon & Logo</h3>
                <p className="text-sm text-yellow-700 mb-4">Upload custom favicon (browser tab icon) and logo images.</p>
                
                <Button
                  onClick={handleFaviconUpload}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Favicon
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-8">
              {/* Services Images */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">📋 Service Images (5)</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.services.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Service ${idx + 1}`} className="w-full h-32 object-cover rounded-lg" />
                      <button
                        onClick={() => handleImageUpload('services', idx)}
                        className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg"
                      >
                        <Upload className="w-6 h-6" />
                        <span className="ml-2">Upload</span>
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">Service {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Images */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">📰 Blog Post Images (6)</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.blog.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Blog ${idx + 1}`} className="w-full h-32 object-cover rounded-lg" />
                      <button
                        onClick={() => handleImageUpload('blog', idx)}
                        className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg"
                      >
                        <Upload className="w-6 h-6" />
                        <span className="ml-2">Upload</span>
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">Blog {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Images */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">👥 Team Member Images (3)</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.team.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Team ${idx + 1}`} className="w-full h-32 object-cover rounded-full" />
                      <button
                        onClick={() => handleImageUpload('team', idx)}
                        className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full"
                      >
                        <Upload className="w-6 h-6" />
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">Team {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Images */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">💬 Testimonial Images (2)</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.testimonials.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Testimonial ${idx + 1}`} className="w-full h-32 object-cover rounded-full" />
                      <button
                        onClick={() => handleImageUpload('testimonials', idx)}
                        className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full"
                      >
                        <Upload className="w-6 h-6" />
                      </button>
                      <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">Testimonial {idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t">
          <p className="text-sm text-gray-600">
            ℹ️ Images are stored in browser localStorage. Click any image to upload a replacement. Changes apply immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevAdminPanel;