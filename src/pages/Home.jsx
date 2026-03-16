import { useState, useEffect } from 'react';
import { ArrowRight, Droplet, Wheat, Factory, ChevronRight } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Dairy Farm Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
        </div>

        {/* Animated Content */}
        <div className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            GOALSCRAFT
            <span className="block text-3xl md:text-4xl mt-2 text-green-200">
              ENTERPRISES PRIVATE LIMITED
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            A Maharashtra based company engaged in dairy production,
            food processing, agriculture, and distribution services.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2">
              Explore Our Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Contact Sales
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Core Business Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Animation */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Our Core Business
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Delivering excellence through diversified agricultural solutions
            </p>
          </div>

          {/* Cards Grid with Hover Effects */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Dairy Products Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1628088069254-d97fdd1f5f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dairy Products" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Droplet className="w-8 h-8 mb-2" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Dairy Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium quality milk, cheese, butter, ghee, and traditional dairy products sourced from local farms.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Fresh milk daily
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Organic butter & ghee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Artisanal cheeses
                  </li>
                </ul>
              </div>
            </div>

            {/* Food Processing Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80" 
                  alt="Food Processing" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Factory className="w-8 h-8 mb-2" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Food Processing
                </h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art processing facility for food products, beverages, and packaged goods.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Modern processing units
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Quality certification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Beverage production
                  </li>
                </ul>
              </div>
            </div>

            {/* Agriculture Card */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2132&q=80" 
                  alt="Agriculture" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Wheat className="w-8 h-8 mb-2" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Agriculture
                </h3>
                <p className="text-gray-600 mb-4">
                  Sustainable dairy farming, cattle breeding, and agricultural practices for better yield.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    Cattle breeding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    Sustainable farming
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    Modern techniques
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Trusted by 1000+ customers across Maharashtra
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;