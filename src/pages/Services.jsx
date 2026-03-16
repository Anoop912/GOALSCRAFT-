import { useState, useEffect } from 'react';
import { 
  Factory,
  Warehouse,
  Truck,
  Globe,
  ArrowRight,
  Clock,
  Shield,
  Users,
  Thermometer,
  Package,
  CheckCircle,
  Award
} from 'lucide-react';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Dairy Processing",
      icon: Factory,
      description: "State-of-the-art dairy processing facilities with modern technology for milk, cheese, butter, and ghee production.",
      fullDescription: "Our dairy processing unit is equipped with the latest technology to ensure the highest quality products. We handle everything from pasteurization to packaging, maintaining strict hygiene standards throughout.",
      image: "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Automated pasteurization",
        "Quality control labs",
        "Hygienic packaging",
        "24/7 processing capacity"
      ],
      stats: {
        capacity: "50,000 L/day",
        experience: "15+ years",
        satisfaction: "99%"
      },
      color: "green"
    },
    {
      id: 2,
      title: "Food Manufacturing",
      icon: Package,
      description: "Comprehensive food manufacturing services including processing, packaging, and quality assurance for various food products.",
      fullDescription: "Our food manufacturing division specializes in creating high-quality processed food products. From recipe development to final packaging, we ensure every product meets international standards.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      features: [
        "Recipe development",
        "Automated production lines",
        "Strict quality control",
        "Custom packaging"
      ],
      stats: {
        capacity: "10,000 units/day",
        experience: "12+ years",
        satisfaction: "98%"
      },
      color: "orange"
    },
    {
      id: 3,
      title: "Cold Storage Services",
      icon: Thermometer,
      description: "Temperature-controlled storage solutions for dairy products, ensuring freshness and extending shelf life.",
      fullDescription: "Our cold storage facilities maintain optimal temperatures for different dairy products. With advanced monitoring systems, we ensure your products remain fresh from storage to delivery.",
      image: "https://images.unsplash.com/photo-1586528116311-8431msam?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Temperature monitoring",
        "Multi-zone storage",
        "Backup generators",
        "Inventory management"
      ],
      stats: {
        capacity: "5,000 sq ft",
        experience: "10+ years",
        satisfaction: "97%"
      },
      color: "blue"
    },
    {
      id: 4,
      title: "Distribution and Export",
      icon: Globe,
      description: "Pan-Maharashtra distribution network with international export capabilities for dairy and food products.",
      fullDescription: "We've built a robust distribution network that reaches every corner of Maharashtra and beyond. Our export division handles all documentation and logistics for international shipping.",
      image: "https://images.unsplash.com/photo-1566576912321-d8e6c8d4489b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Pan-Maharashtra coverage",
        "International shipping",
        "Fleet management",
        "Customs clearance"
      ],
      stats: {
        coverage: "36 districts",
        experience: "8+ years",
        satisfaction: "96%"
      },
      color: "purple"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We understand your specific requirements and provide customized solutions."
    },
    {
      step: 2,
      title: "Planning",
      description: "Our experts create a detailed plan for service delivery and quality assurance."
    },
    {
      step: 3,
      title: "Execution",
      description: "We implement the plan using our state-of-the-art facilities and trained staff."
    },
    {
      step: 4,
      title: "Delivery",
      description: "Timely delivery of services with continuous quality monitoring."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Comprehensive dairy and food processing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-green-600">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end solutions for dairy and food processing industry
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Services Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                green: 'from-green-500 to-green-600',
                orange: 'from-orange-500 to-orange-600',
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600'
              };

              return (
                <div
                  key={service.id}
                  className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[service.color]} opacity-90`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 text-white">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <Icon className="w-12 h-12" />
                      </div>
                      
                      {/* Stats Popup on Hover */}
                      <div className={`bg-white/20 backdrop-blur-sm rounded-xl p-3 transform transition-all duration-300 ${
                        activeService === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      }`}>
                        <div className="text-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-3 h-3" />
                            <span>{service.stats.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-3 h-3" />
                            <span>{service.stats.satisfaction} satisfaction</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle className="w-5 h-5 text-white/80" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capacity Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Capacity: {service.stats.capacity}</span>
                    </div>

                    {/* Learn More Button */}
                    <button className="absolute bottom-8 right-8 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-green-50">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              How we deliver excellence at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className={`relative text-center group transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-green-600 group-hover:text-white transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-green-200">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Industry-leading expertise and commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-green-100">
                Rigorous quality checks at every stage of processing and delivery
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-green-100">
                Experienced professionals with deep industry knowledge
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-green-100">
                Reliable and punctual service delivery every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with us for reliable and high-quality dairy and food processing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/ISO_Logo.svg" alt="ISO Certified" className="h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/FSSAI_Logo.svg/2560px-FSSAI_Logo.svg.png" alt="FSSAI" className="h-12" />
            <div className="text-2xl font-bold text-gray-400">AGMARK</div>
            <div className="text-2xl font-bold text-gray-400">MSME</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;