import React, { useState, useEffect } from 'react';
import DigitalIdCard from './components/DigitalIdCard';
import { Heart, Code, Github, Linkedin, Mail, ExternalLink, Instagram, Phone, X, ChevronDown } from 'lucide-react';

function App() {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide notification after 5 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isContactExpanded) {
        setIsContactExpanded(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleContact = () => {
    setIsContactExpanded(!isContactExpanded);
  };

  const hideNotification = () => {
    setIsVisible(false);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-teal-50 py-6 sm:py-12 px-4 relative overflow-hidden ${isCardExpanded ? 'overflow-y-hidden' : ''}`}>
      {/* Quick Contact Notification */}
      {isVisible && (
        <div 
          className={`fixed z-50 transition-all duration-300 ease-in-out ${isContactExpanded ? 'bottom-4 right-4 w-80' : 'bottom-4 right-4 w-12 h-12'}`}
        >
          {isContactExpanded ? (
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 text-white flex justify-between items-center">
                <h3 className="font-semibold">Quick Contact</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={toggleContact}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronDown size={16} />
                  </button>
                  <button 
                    onClick={hideNotification}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-2" size={16} />
                  <a 
                    href="tel:+919059160424" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    +91 90591 60424
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-2" size={16} />
                  <a 
                    href="mailto:morishettylaxminivas@gmail.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    morishettylaxminivas@gmail.com
                  </a>
                </div>
                <div className="pt-2 text-xs text-gray-500">
                  Tap to call or email me directly
                </div>
              </div>
            </div>
          ) : (
            <button 
              onClick={toggleContact}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all"
              title="Quick Contact"
            >
              <Phone size={20} />
            </button>
          )}
        </div>
      )}

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating bubbles animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }}></div>
        <div className="absolute top-1/3 left-3/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '10s' }}></div>
        
        {/* Geometric shapes animation */}
        <div className="absolute top-1/5 right-1/5 w-40 h-40 bg-indigo-100/10 rotate-45 blur-xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-32 h-32 bg-teal-100/10 rotate-12 blur-xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
        
        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-blue-300/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header - Only visible when card is not expanded */}
        {!isCardExpanded && (
          <div className="text-center mb-8 sm:mb-12 relative z-10 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 animate-slideInDown">
              Digital ID Card
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 animate-slideInUp">
              Transforming <span className="text-blue-600 font-medium">digital identities</span> into <span className="text-teal-600 font-medium">interactive experiences</span> — where <span className="text-purple-600 font-medium">professionalism</span> meets <span className="text-indigo-600 font-medium">cutting-edge design</span>.
            </p>
          </div>
        )}
        
        {/* Digital ID Card Component */}
        <div className="relative z-10 animate-fadeIn">
          <DigitalIdCard onExpandChange={setIsCardExpanded} />
        </div>
        
        {/* Footer - Only visible when card is not expanded */}
        {!isCardExpanded && (
          <footer className="mt-12 sm:mt-16 border-t border-gray-200/50 pt-8 sm:pt-12 relative z-10 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* About Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
  <Code className="mr-2 text-blue-600" size={18} />
  About This Digital Card
</h3>
<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
  A modern digital business card that showcases professional information in an interactive format. Features smooth animations, responsive layout for all devices, and engaging elements to connect with visitors.
</p>
              </div>
              
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <a 
                      href="https://laxminivasmorishetty.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Portfolio 
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://padmatutorials.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Padma Tutorials
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://smartnlightinnovation.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Smart N Light Innovation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://wisdomroots.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Wisdom Roots
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://nivaseditz.netlify.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Nivas Editz
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Get In Touch</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 duration-200">
                    <Mail size={14} className="mr-2 text-blue-600" />
                    morishettylaxminivas@gmail.com
                  </li>
                  <li>
                    <a 
                      href="https://github.com/laxminivas06" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <Github size={14} className="mr-2" />
                      GitHub Profile
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://in.linkedin.com/in/laxmi-nivas-morishetty-02468m" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <Linkedin size={14} className="mr-2" />
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/laxminivasmorishetty/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors flex items-center hover:translate-x-1 duration-200"
                    >
                      <Instagram size={14} className="mr-2" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Copyright Section */}
            <div className="mt-12 pt-6 border-t border-gray-200/30 text-center">
              <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center hover:text-blue-600 transition-colors duration-300">
                Made with <Heart size={14} className="mx-1 text-red-500 fill-red-500 animate-pulse" /> by Laxmi Nivas Morishetty
              </p>
              <p className="text-xs text-gray-400 mt-2 hover:text-gray-600 transition-colors duration-300">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </footer>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes slideInDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default App;