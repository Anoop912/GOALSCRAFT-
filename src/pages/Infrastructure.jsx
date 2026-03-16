import { useState, useEffect } from 'react';
import { 
  Building2, 
  Factory, 
  Snowflake, 
  Warehouse,
  MapPin,
  Ruler,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Wind,
  Cpu,
  Shield
} from 'lucide-react';

function Infrastructure() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFacility, setActiveFacility] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const facilities = [
    {
      id: 1,
      title: "Dairy Farms",
      icon: Building2,
      description: "Modern dairy farms with advanced cattle management and milking systems.",
      fullDescription: "Our dairy farms span across 50+ acres with state-of-the-art facilities for cattle rearing, feeding, and milking. We maintain the highest standards of animal care and hygiene.",
      image: "https://images.unsplash.com/photo-1594761078672-e2b18d7b7c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: {
        area: "50+ Acres",
        capacity: "1000+ Cattle",
        established: "2020",
        staff: "50+ Workers"
      },
      features: [
        "Automated milking systems",
        "Veterinary care unit",
        "Organic feed production",
        "Waste management system"
      ],
      equipment: [
        "Rotary milking parlors",
        "Bulk cooling tanks",
        "Feed mixing units",
        "Health monitoring systems"
      ]
    },
    {
      id: 2,
      title: "Food Processing Plants",
      icon: Factory,
      description: "State-of-the-art processing facilities with automated production lines.",
      fullDescription: "Our food processing plants are equipped with the latest technology for processing milk, cheese, butter, and other dairy products. We maintain ISO and FSSAI standards.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      stats: {
        area: "25,000 sq ft",
        capacity: "50,000 L/day",
        established: "2021",
        staff: "100+ Workers"
      },
      features: [
        "Automated production lines",
        "Quality control labs",
        "Hygienic packaging units",
        "Research & development"
      ],
      equipment: [
        "Pasteurizers",
        "Homogenizers",
        "Separators",
        "Packaging machines"
      ]
    },
    {
      id: 3,
      title: "Cold Storage Facilities",
      icon: Snowflake,
      description: "Temperature-controlled storage solutions for preserving dairy products.",
      fullDescription: "Our cold storage facilities maintain optimal temperatures for different products, ensuring freshness and extending shelf life. 24/7 monitoring ensures product safety.",
      image: "https://images.unsplash.com/photo-1586528116311-8431msam?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: {
        area: "15,000 sq ft",
        capacity: "5000 MT",
        established: "2022",
        zones: "Multi-temperature"
      },
      features: [
        "Temperature monitoring",
        "Humidity control",
        "Backup generators",
        "Inventory tracking"
      ],
      equipment: [
        "Refrigeration units",
        "Temperature sensors",
        "Humidity controllers",
        "Racking systems"
      ]
    },
    {
      id: 4,
      title: "Warehousing Infrastructure",
      icon: Warehouse,
      description: "Modern warehousing facilities for storage and distribution of products.",
      fullDescription: "Our warehouses are strategically located across Maharashtra for efficient distribution. We use modern inventory management systems for optimal storage.",
      image: "https://images.unsplash.com/photo-1586528116311-8431msam?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: {
        area: "30,000 sq ft",
        capacity: "10,000 Pallets",
        established: "2020",
        locations: "3 Centers"
      },
      features: [
        "Inventory management",
        "Loading docks",
        "Security systems",
        "Fleet management"
      ],
      equipment: [
        "Forklifts",
        "Pallet racking",
        "Conveyor systems",
        "Barcode scanners"
      ]
    }
  ];

  const locations = [
    { city: "Pune", facilities: ["Dairy Farm", "Processing Plant", "Cold Storage"] },
    { city: "Mumbai", facilities: ["Processing Plant", "Warehouse", "Distribution"] },
    { city: "Nashik", facilities: ["Dairy Farm", "Cold Storage"] },
    { city: "Nagpur", facilities: ["Warehouse", "Distribution Center"] }
  ];

  const certifications = [
    { name: "ISO 22000:2018", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/ISO_Logo.svg" },
    { name: "FSSAI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/FSSAI_Logo.svg/2560px-FSSAI_Logo.svg.png" },
    { name: "AGMARK", logo: "" },
    { name: "GMP Certified", logo: "" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Infrastructure Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Infrastructure</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            State-of-the-art facilities powering our dairy and food processing operations
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">120,000+</div>
              <div className="text-green-100">Sq. Ft. Facility</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-green-100">Processing Units</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-100">Skilled Staff</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">5,000 MT</div>
              <div className="text-green-100">Storage Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Facilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cutting-edge infrastructure designed for quality and efficiency
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Facility Cards */}
          <div className="space-y-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={facility.id}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveFacility(facility.id)}
                  onMouseLeave={() => setActiveFacility(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Image Side */}
                    <div className={`relative h-64 lg:h-auto overflow-hidden ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Floating Stats */}
                      <div className={`absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4 transform transition-all duration-500 ${
                        activeFacility === facility.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
                          <Ruler className="w-4 h-4 mb-1" />
                          <div className="text-sm font-semibold">{facility.stats.area}</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
                          <Users className="w-4 h-4 mb-1" />
                          <div className="text-sm font-semibold">{facility.stats.staff}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-100 p-3 rounded-2xl">
                          <Icon className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{facility.title}</h3>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {facility.fullDescription}
                      </p>

                      {/* Features and Equipment Grid */}
                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {facility.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-green-600" />
                            Equipment
                          </h4>
                          <ul className="space-y-2">
                            {facility.equipment.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Stats Bar */}
                      <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Capacity</div>
                          <div className="font-semibold text-gray-900">{facility.stats.capacity}</div>
                        </div>
                        <div className="text-center border-x border-gray-200">
                          <div className="text-sm text-gray-500">Established</div>
                          <div className="font-semibold text-gray-900">{facility.stats.established}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-semibold text-gray-900">Maharashtra</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategically positioned facilities across Maharashtra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
                alt="Maharashtra Map"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
              
              {/* Location Markers */}
              {locations.map((location, idx) => (
                <div 
                  key={idx}
                  className="absolute w-4 h-4 bg-green-600 rounded-full animate-ping"
                  style={{
                    top: `${30 + idx * 15}%`,
                    left: `${40 + idx * 8}%`
                  }}
                >
                  <div className="absolute w-4 h-4 bg-green-600 rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Location List */}
            <div className="space-y-4">
              {locations.map((location, idx) => (
                <div 
                  key={idx}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                        {location.city}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-green-100 transition-colors">
                      24/7 Operations
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.facilities.map((facility, fidx) => (
                      <span 
                        key={fidx}
                        className="text-xs bg-white group-hover:bg-green-500 text-gray-600 group-hover:text-white px-3 py-1.5 rounded-full transition-colors"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology & Innovation</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Leveraging cutting-edge technology for superior quality and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Real-time temperature and quality monitoring across all facilities
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Systems</h3>
              <p className="text-gray-300 text-sm">
                Fully automated production lines with minimal human intervention
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-gray-300 text-sm">
                Multi-stage quality checks using advanced testing equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Certifications</span>
            </h2>
            <p className="text-gray-600">
              Committed to maintaining international quality standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="text-center transform hover:scale-110 transition-all duration-300"
              >
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.name} className="h-16 mb-2" />
                ) : (
                  <div className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-sm font-bold text-gray-400">{cert.name}</span>
                  </div>
                )}
                <p className="text-sm text-gray-600 font-semibold">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Our Facilities</h2>
          <p className="text-xl text-green-100 mb-8">
            Schedule a virtual tour of our state-of-the-art infrastructure
          </p>
          <button className="group bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            Book a Virtual Tour
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Infrastructure;