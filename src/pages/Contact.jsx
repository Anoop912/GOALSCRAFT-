import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Building2,
  Users,
  Globe
} from 'lucide-react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["GOALSCRAFT ENTERPRISES", "Survey No. 123, Pune-Mumbai Highway", "Pune, Maharashtra - 411045", "India"],
      color: "blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9:00 AM - 7:00 PM"],
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@goalscraft.com", "partners@goalscraft.com", "support@goalscraft.com"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "orange"
    }
  ];

  const departments = [
    {
      name: "Sales & Marketing",
      email: "sales@goalscraft.com",
      phone: "+91 98765 43212",
      icon: Building2
    },
    {
      name: "Partnerships & Franchise",
      email: "partners@goalscraft.com",
      phone: "+91 98765 43213",
      icon: Users
    },
    {
      name: "Export & International",
      email: "export@goalscraft.com",
      phone: "+91 98765 43214",
      icon: Globe
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: Twitter, url: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: Instagram, url: "#", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: Linkedin, url: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: Youtube, url: "#", color: "hover:bg-red-600", label: "YouTube" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Get in touch with us for any inquiries, partnerships, or support
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
                green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
                purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
                orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
              };

              return (
                <div 
                  key={index}
                  className={`group bg-gray-50 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorClasses[info.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1 text-gray-600 text-sm">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Map and Info */}
            <div className={`space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[400px] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Map Location"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-green-600/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-green-600 rounded-full animate-ping absolute"></div>
                    <div className="w-6 h-6 bg-green-600 rounded-full relative flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-semibold text-gray-900">Our Headquarters</p>
                  <p className="text-sm text-gray-600">Pune-Mumbai Highway, Pune</p>
                </div>
              </div>

              {/* Company Overview */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">GOALSCRAFT ENTERPRISES</h3>
                <p className="text-green-50 mb-6">
                  A Maharashtra-based company engaged in dairy production, food processing, 
                  agriculture, and distribution services since 2020.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-green-200 text-sm">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-green-200 text-sm">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4+</div>
                    <div className="text-green-200 text-sm">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-green-200 text-sm">Products</div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 group`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 text-white group-hover:text-green-600 transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                {/* Form Status */}
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-700">Oops! Something went wrong. Please try again.</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and consent to being contacted.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Department <span className="text-green-600">Contacts</span>
            </h2>
            <p className="text-gray-600">
              Reach out directly to the relevant department for faster assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{dept.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick <span className="text-green-600">Answers</span>
            </h2>
            <p className="text-gray-600">
              Find answers to commonly asked questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What are your business hours?",
                a: "We are open Monday through Friday from 9:00 AM to 8:00 PM, and Saturday from 10:00 AM to 6:00 PM. We are closed on Sundays."
              },
              {
                q: "How quickly do you respond to inquiries?",
                a: "We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call us directly."
              },
              {
                q: "Do you have a physical office I can visit?",
                a: "Yes, we have our headquarters in Pune. Please schedule an appointment before visiting to ensure the right person is available."
              },
              {
                q: "How can I become a distribution partner?",
                a: "Please fill out the contact form and select 'Partnership' as the subject. Our partnerships team will reach out with detailed information."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                    <ChevronRight className="w-5 h-5 text-green-600 group-open:rotate-90 transition-transform" />
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start a Conversation?</h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you have a question about our products, partnerships, or anything else, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;