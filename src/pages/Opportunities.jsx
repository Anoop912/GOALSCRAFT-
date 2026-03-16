import { useState, useEffect } from 'react';
import { 
  Store,
  Truck,
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Award,
  Shield,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  BarChart3,
  Package,
  Heart
} from 'lucide-react';

function Opportunities() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('franchise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const franchiseBenefits = [
    { icon: Store, title: "Turnkey Setup", description: "Complete store setup support including interior design and equipment" },
    { icon: Users, title: "Training Programs", description: "Comprehensive training for you and your staff" },
    { icon: TrendingUp, title: "Marketing Support", description: "Local and national marketing campaigns" },
    { icon: Package, title: "Supply Chain", description: "Reliable product supply with quality assurance" },
    { icon: Shield, title: "Brand Value", description: "Leverage our trusted brand reputation" },
    { icon: Award, title: "Exclusive Territory", description: "Protected territory rights" }
  ];

  const partnershipBenefits = [
    { icon: Truck, title: "Logistics Support", description: "Efficient distribution network and delivery" },
    { icon: BarChart3, title: "Business Growth", description: "Scalable business model with high returns" },
    { icon: Globe, title: "Pan Maharashtra", description: "Expand across the state with our network" },
    { icon: Heart, title: "Priority Support", description: "Dedicated relationship manager" }
  ];

  const franchiseModels = [
    {
      type: "GOALSCRAFT Mini Store",
      investment: "₹5-8 Lakhs",
      area: "150-200 sq ft",
      staff: "1-2 persons",
      returns: "18-22% ROI",
      features: ["Dairy products", "Local delivery", "Basic setup"]
    },
    {
      type: "GOALSCRAFT Super Store",
      investment: "₹15-20 Lakhs",
      area: "400-500 sq ft",
      staff: "3-4 persons",
      returns: "22-25% ROI",
      features: ["Full product range", "Cold storage", "Home delivery"]
    },
    {
      type: "GOALSCRAFT Distributor",
      investment: "₹25-30 Lakhs",
      area: "1000+ sq ft",
      staff: "5-7 persons",
      returns: "25-30% ROI",
      features: ["Bulk distribution", "Warehouse", "Fleet management"]
    }
  ];

  const successStories = [
    {
      name: "Rajesh Sharma",
      location: "Pune",
      type: "Franchise Partner",
      since: "2021",
      quote: "Best decision of my career. The support from GOALSCRAFT team has been exceptional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      revenue: "+200% growth"
    },
    {
      name: "Priya Patil",
      location: "Mumbai",
      type: "Distribution Partner",
      since: "2022",
      quote: "Their products sell themselves. Quality speaks for itself.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      revenue: "+150% growth"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Business Opportunities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Business <span className="text-green-300">Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-3xl mx-auto">
            Partner with Maharashtra's fastest-growing dairy and food processing company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Become a Partner
              <Handshake className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Opportunity Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setActiveTab('franchise')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'franchise' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Store className="w-5 h-5 inline mr-2" />
                Franchise Opportunities
              </button>
              <button
                onClick={() => setActiveTab('partnership')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'partnership' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Handshake className="w-5 h-5 inline mr-2" />
                Distribution Partnerships
              </button>
            </div>
          </div>

          {/* Franchise Tab Content */}
          {activeTab === 'franchise' && (
            <div className={`space-y-16 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {franchiseBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Franchise Models */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Franchise <span className="text-green-600">Models</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {franchiseModels.map((model, index) => (
                    <div 
                      key={index}
                      className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-sm font-semibold">
                        {model.returns}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 pr-20">{model.type}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Investment</span>
                          <span className="font-semibold text-green-600">{model.investment}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Area Required</span>
                          <span className="font-semibold">{model.area}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Staff Needed</span>
                          <span className="font-semibold">{model.staff}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {model.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-6 bg-green-50 text-green-600 hover:bg-green-600 hover:text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                        Enquire Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Partnership Tab Content */}
          {activeTab === 'partnership' && (
            <div className={`space-y-16 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Partnership Benefits */}
              <div className="grid md:grid-cols-2 gap-8">
                {partnershipBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Partnership Requirements */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-8 text-center">Partnership Requirements</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2+</div>
                    <div className="text-orange-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">₹10L+</div>
                    <div className="text-orange-100">Minimum Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-orange-100">Sq. Ft. Warehouse</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-green-600">Stories</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our successful partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{story.location} • {story.type}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600 font-semibold">{story.revenue}</span>
                      <span className="text-gray-400">Since {story.since}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With <span className="text-green-600">GOALSCRAFT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">10+</span>
              </div>
              <h3 className="font-semibold mb-2">Years of Excellence</h3>
              <p className="text-sm text-gray-600">Trusted brand since 2020</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">100+</span>
              </div>
              <h3 className="font-semibold mb-2">Active Partners</h3>
              <p className="text-sm text-gray-600">Growing network</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">95%</span>
              </div>
              <h3 className="font-semibold mb-2">Success Rate</h3>
              <p className="text-sm text-gray-600">Partner satisfaction</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-sm text-gray-600">Dedicated assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">
                Start Your Journey With <span className="text-green-600">GOALSCRAFT</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      placeholder="Enter your city"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Investment Range
                    </label>
                    <select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      required
                    >
                      <option value="">Select investment range</option>
                      <option value="5-10L">₹5 - 10 Lakhs</option>
                      <option value="10-20L">₹10 - 20 Lakhs</option>
                      <option value="20-30L">₹20 - 30 Lakhs</option>
                      <option value="30L+">₹30 Lakhs +</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                      required
                    >
                      <option value="">Select option</option>
                      <option value="franchise">Franchise</option>
                      <option value="distribution">Distribution</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    placeholder="Tell us about your experience and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span>partners@goalscraft.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is the minimum investment required for a franchise?",
                a: "The minimum investment starts from ₹5 Lakhs for our Mini Store format. We have flexible options to suit different investment capacities."
              },
              {
                q: "Do you provide training and support?",
                a: "Yes, we provide comprehensive training for you and your staff, along with ongoing operational and marketing support."
              },
              {
                q: "How long does it take to set up a franchise?",
                a: "Typically, a franchise can be set up within 45-60 days from signing the agreement, including store setup and staff training."
              },
              {
                q: "What is the ROI period?",
                a: "Our partners typically achieve ROI within 18-24 months, depending on the location and business model."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                    <span className="text-green-600 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opportunities;