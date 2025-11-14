import { Mail, Phone, MapPin, Linkedin, Award, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'srivardhan.kondu@gmail.com',
      href: 'mailto:srivardhan.kondu@gmail.com'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 6302771540',
      href: 'tel:+916302771540'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Hyderabad, India',
      href: null
    }
  ];

  const expertise = [
    { icon: Award, text: 'AI/ML Engineering' },
    { icon: BookOpen, text: 'DSA & Problem Solving' },
    { icon: Users, text: 'Technical Training' },
    { icon: Award, text: 'Computer Vision' },
    { icon: BookOpen, text: 'Interview Preparation' },
    { icon: Users, text: 'Project Mentorship' }
  ];

  const achievements = [
    { number: '12,000+', label: 'Students Trained' },
    { number: '20+', label: 'Institutions' },
    { number: '92%', label: 'Placement Rate' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Stats Banner */}
        <div className="mb-12 pb-12 border-b border-gray-700/50">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Srivardhan Rao
                </h3>
                <p className="text-gray-400 text-base font-medium mb-4">
                  AI & DSA Trainer | Technical Mentor
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Empowering the next generation of tech professionals through hands-on training in AI, Machine Learning, and Data Structures & Algorithms.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/kondu-srivardhan-7001a1252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:srivardhan.kondu@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Expertise */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-left group"
                    >
                      <span className="flex items-center">
                        <span className="w-0 group-hover:w-2 h-2 bg-white rounded-full mr-0 group-hover:mr-3 transition-all duration-300"></span>
                        {link.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Expertise Areas */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  Expertise
                </h3>
                <div className="space-y-3">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="mb-12 pb-12 border-b border-gray-700/50">
          <h3 className="text-xl font-bold mb-6 text-white text-center">
            Get In Touch
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index}>
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <info.icon className="w-6 h-6 text-gray-400 mb-3 group-hover:text-white transition-colors" />
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{info.label}</span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors text-center">
                      {info.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl">
                    <info.icon className="w-6 h-6 text-gray-400 mb-3" />
                    <span className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{info.label}</span>
                    <span className="text-sm text-gray-300 text-center">{info.value}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <span>© {currentYear} Srivardhan Rao. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
          
          {/* Crafted with message */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Crafted with dedication to inspire and educate future tech leaders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;