import { useState, useEffect } from 'react';
import { Users, Target, Award, Shield, ChevronRight, MapPin, Calendar, Mail, Phone } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Agricultural Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
        </div>

        {/* Animated Content */}
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto">
            Pioneering excellence in dairy and agriculture since 2020
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className={`relative transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594761078672-e2b18d7b7c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dairy Farm" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm uppercase tracking-wider opacity-90">Est. 2020</p>
                  <p className="text-2xl font-bold">GOALSCRAFT ENTERPRISES</p>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Our Mission</p>
                    <p className="font-semibold">Quality & Sustainability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className={`space-y-6 transition-all duration-1000 transform delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900">
                Leading the Way in
                <span className="text-green-600"> Agricultural Innovation</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                GOALSCRAFT ENTERPRISES PRIVATE LIMITED operates in dairy manufacturing, agriculture, 
                food processing, and distribution. Based in Maharashtra, we're committed to delivering 
                excellence through sustainable practices and innovative solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">ISO Certified</p>
                    <p className="text-sm text-gray-500">Quality Standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">50+ Employees</p>
                    <p className="text-sm text-gray-500">Dedicated Team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Maharashtra</p>
                    <p className="text-sm text-gray-500">Headquarters</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Since 2020</p>
                    <p className="text-sm text-gray-500">4+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders/Directors Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Founders</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visionary leaders driving innovation in the agricultural sector
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder 1 - Shashank Ashok Jadhav */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                  alt="Shashank Ashok Jadhav" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                    <Phone className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  Shashank Ashok Jadhav
                </h3>
                <p className="text-sm text-gray-500 mb-3">Managing Director</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Visionary leader with 15+ years of experience in dairy industry and agricultural innovation.
                </p>
              </div>
            </div>

            {/* Founder 2 - Satish Dnyaneshwar Sable */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                  alt="Satish Dnyaneshwar Sable" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                    <Phone className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  Satish Dnyaneshwar Sable
                </h3>
                <p className="text-sm text-gray-500 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Expert in supply chain management and dairy operations with proven track record.
                </p>
              </div>
            </div>

            {/* Founder 3 - Chevan Vishnu Giri */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                  alt="Chevan Vishnu Giri" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                    <Phone className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  Chevan Vishnu Giri
                </h3>
                <p className="text-sm text-gray-500 mb-3">Technical Director</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Specialist in food processing technology and quality control systems.
                </p>
              </div>
            </div>

            {/* Founder 4 - Chinmay Arun Pathare */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Chinmay Arun Pathare" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                    <Phone className="w-5 h-5 cursor-pointer hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  Chinmay Arun Pathare
                </h3>
                <p className="text-sm text-gray-500 mb-3">Business Development</p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Driving market expansion and strategic partnerships across Maharashtra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                Committed to maintaining the highest standards in all our products and services.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Supporting local farmers and contributing to community development.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing modern technology and sustainable practices for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-green-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-green-100">Processing Units</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;