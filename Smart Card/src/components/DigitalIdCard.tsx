import React, { useState, useEffect } from 'react';
import { 
  User, MapPin, Briefcase, Calendar, ExternalLink, 
  Github, Linkedin, Mail, Globe, X, Code, 
  Building2, GraduationCap, ChevronRight, Star, 
   ChevronLeft, Play,Users, Pause
} from 'lucide-react';
import { Phone, Instagram } from 'lucide-react';
interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}
interface DigitalIdCardProps {
  onExpandChange: (isExpanded: boolean) => void;
}

interface MentoringExperience {
  title: string;
  description: string;
  participants: number;
  date: string;
  media: {
    images: string[];
    videos?: string[];
  };
}

interface Event {
  name: string;
  date: string;
  description: string;
  location: string;
  participants?: number;
  photos: string[];
  video?: string;
}

// Add these new interfaces
interface MentoringExperience {
  title: string;
  description: string;
  participants: number;
  date: string;
  media: {
    images: string[];
    videos?: string[];
  };
}

interface Event {
  name: string;
  date: string;
  description: string;
  location: string;
  photos: string[];
  video?: string;
}


interface Experience {
  organization: string;
  role: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  logo?: string;
  website?: string;
}

interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  photo: string;
  bio: string | string[];
  email: string;
  github: string;
  linkedin: string;
  portfolio?: string;
}

const DigitalIdCard: React.FC<DigitalIdCardProps> = ({ onExpandChange }) => {

  // State management
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [projectsPerView, setProjectsPerView] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Personal information
  const personalInfo: PersonalInfo = {
    name: "Laxmi Nivas Morishetty",
    role: "Education | Innovation | Entrepreneurship",
    location: "Telangana, India",
    photo: "/uploads/nivas.JPG",
    bio: [
      "As a tech-driven innovator with a strong foundation in Computer Science and specialized focus on Cyber Security, I excel in dynamic environments that challenge my creativity, problem-solving abilities, and leadership skills. My expertise lies in developing real-time, high-impact solutions across software engineering, IoT systems, and artificial intelligence.",
      "Beyond technical development, I am deeply committed to knowledge sharing, regularly conducting workshops and bootcamps focused on Full Stack Development, Cyber Security, and AI implementation.",
      "My mission is to collaborate on building smarter, more secure technological solutions that drive meaningful progress."
    ],
    email: "morishettylaxminivas@email.com",
    github: "laxminivas06",
    linkedin: "https://in.linkedin.com/in/laxmi-nivas-morishetty-02468m",
    portfolio: "https://laxminivasmorishetty.netlify.app"
  };



  const projects: Project[] = [
  
  
  {
    name: "ID Card Portal",
    description: "Digital ID card generation and management system",
    technologies: ["React.js", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/laxminivas06/Smart-Card"
  },
  {
    name: "Attendance Management (Offline)",
    description: "Python Flask application for offline attendance tracking",
    technologies: ["Python", "Flask", "SQLite"],
    githubUrl: ""
  },
  {
    name: "Attendance Management (Online)",
    description: "Web-based attendance system with real-time tracking",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/laxminivas06/Attendace-Management-System"
  },
  {
    name: "Event Form",
    description: "General purpose event registration form system",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/laxminivas06/Event-Form"
  },
  {
    name: "Club Event Form",
    description: "College club-specific event registration system",
    technologies: ["Python", "Flask", "MySQL"],
    githubUrl: ""
  },
  {
    name: "Universal Club Event Form",
    description: "Multi-club event registration portal for colleges",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: ""
  },
  {
    name: "Resume Builder",
    description: "ATS-compliant resume generator with Google Form-like interface",
    technologies: ["Python", "Flask", "Jinja2"],
    githubUrl: "https://github.com/laxminivas06/Resume-Builder"
  },
  {
    name: "Invoice Maker",
    description: "Automated invoice generation system for businesses",
    technologies: ["Python", "Django", "JavaScript"],
    githubUrl: "https://github.com/laxminivas06/Invoice-Maker"
  },
  {
    name: "Customer Review Portal",
    description: "Platform for collecting and managing customer feedback",
    technologies: ["Python", "Flask", "SQLite"],
    githubUrl: ""
  },
  {
    name: "Learn Lab",
    description: "Comprehensive learning resource portal for students",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/laxminivas06/learn-lab"
  },
  {
    name: "Hospital Management System",
    description: "Complete solution for hospital administration and patient management",
    technologies: ["Python", "Tkinter", "MySQL"],
    githubUrl: "https://github.com/laxminivas06/Woman-Companion"
  },
  {
    name: "Soil Predictor",
    description: "Agricultural tool for soil analysis and graph generation",
    technologies: ["Java",  "MySQL"],
    githubUrl: ""
  },
  {
    name: "QR Code Generator",
    description: "Tool for generating QR codes from URLs or text",
    technologies: ["Python", "Flask", "qrcode"],
    githubUrl: ""
  },
  {
    name: "Women Companion",
    description: "Health tracking application for women's menstrual cycle",
    technologies: ["Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/laxminivas06/Woman-Companion"
  },
  {
    name: "Expenses Book",
    description: "Vinayaka Chaturthi expense tracking application",
    technologies: ["Python", "Tkinter", "SQLite"],
    githubUrl: ""
  },
  {
    name: "Smart Message Sender",
    description: "Bulk email messaging system for registered users",
    technologies: ["Python", "Flask", "SMTP"],
    githubUrl: ""
  },
  {
    name: "Exam Portal",
    description: "JEE/NEET/GATE examination clone with scoring system",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/laxminivas06/exam-portal"
  },
  {
    name: "EAPCET Rank Predictor",
    description: "Engineering Agriculture Polytech college predictor based on entrance ranks",
    technologies: ["Python", "Flask", "MySQL"],
    githubUrl: "https://github.com/laxminivas06/Eapcet-Predictor"
  },
  {
    name: "Hackathon Registration Form",
    description: "Custom hackathon registration system alternative to Google Forms",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: ""
  },
  {
    name: "Object Detection via AI",
    description: "AI-powered object detection system using computer vision",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: ""
  },
  {
    name: "Library Management System",
    description: "Complete library administration tool with Java AWT",
    technologies: ["Java", "AWT", "MySQL"],
    githubUrl: "https://github.com/laxminivas06/Library-Management-System"
  },
  {
    name: "Smart Rental System",
    description: "Automated rental payment reminder and management system",
    technologies: ["Python", "Flask", "Twilio API"],
    githubUrl: ""
  },

  {
    name: "Canteen Mega System",
    description: "Comprehensive canteen management with token and payment system",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl: ""
  },
  {
    name: "Wisdom Roots Website",
    description: "Official website for Wisdom Roots focusing on practical learning solutions",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    githubUrl: ""
  },
  {
    name: "Padma Tutorials Website",
    description: "Educational platform website offering comprehensive learning resources",
    technologies: ["React.js", "CSS", "Firebase"],
    githubUrl: ""
  },
  {
    name: "Smart N Light Innovation",
    description: "Website for IoT and smart technology solutions company",
    technologies: ["React.js", "Material UI", "Express"],
    githubUrl: ""
  },
  {
    name: "Nivas Editz Website",
    description: "Business website for adhesive products company",
    technologies: ["React.js", "CSS", "Firebase"],
    githubUrl: ""
  },
  {
    name: "Sri Karimalesh Website",
    description: "Client website for spiritual and cultural organization",
    technologies: ["React.js", "Bootstrap", "Node.js"],
    githubUrl: ""
  },
  {
    name: "Dosa Delight Website",
    description: "Restaurant website for Dosa Delight food business",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: ""
  },
  {
    name: "Virinchi's Website",
    description: "Client website for Virinchis cultural organization",
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    githubUrl: ""
  }
];

  const experiences: Experience[] = [
    {
      organization: "Padma Tutorials",
      role: "Founder",
      period: "2023 - Present",
      description: "Specialized in teaching every standard in every medium with good skills embracing today's society. Focused on practical knowledge and skill development for the modern generation.",
      type: "education",
      logo: "/uploads/5.png",
      website: "https://padmatutorials.netlify.app"
    },
     {
      organization: "Smart and Light Innovation",
      role: "Founder",
      period: "2023 - Present",
      description: "Developing smart applications that benefit society. Focused on IoT solutions for smart city infrastructure, energy-efficient lighting systems, and sustainable technology projects.",
      type: "work",
      logo: "/uploads/4.png",
      website: "https://smartnlightinnovation.netlify.app"
    },
    {
      organization: "Wisdom Roots",
      role: "Founder",
      period: "2024 - Present",
      description: "Enhancing practical learning by removing theoretical knowledge barriers and focusing on practical knowledge for today's generation. Leading technical innovation initiatives and developing secure software solutions.",
      type: "education",
      logo: "/uploads/2.png",
      website: "https://wisdomroots.netlify.app"
    },
   
    {
      organization: "Nivas Editz",
      role: "Founder",
      period: "2023 - Present",
      description: "A company focused on social media, web development, socializing, and brand building for organizations. Building scalable web applications with modern development practices.",
      type: "work",
      logo: "/uploads/6.png",
      website: "https://nivaseditz.netlify.app"
    }
  ];

    // Add mentoring data
  const mentoringExperiences: MentoringExperience[] = [
    
    {
      title: "Web Development in 18 Days",
      description: "Web Development in 18 Days",
      participants: 100,
      date: "March 2024",
      media: {
        images: [
         
          "/uploads/mentoring/pt2.png"
        ]
      }
    },
    {
      title: "5-Day HTML5 Bootcamp",
      description: "Fundamentals of modern HTML5",
      participants: 252,
      date: "February 2024",
      media: {
        images: [
          "/uploads/mentoring/pt1.png"
      
        ]
      }
    },
    {
      title: "5-Day Python Bootcamp",
    description: "Introduction to Python programming for beginners",
    participants: 155,
    date: "January 2024",
      media: {
        images: [
         
          "/uploads/mentoring/pt3.png"
        ]
      }
    }
  ];

  // Add events data
  const pastEvents: Event[] = [
    
    {
      name: "School Mentorship - Basham Bloom's",
      date: "February 2025",
      description: "Conducted sessions to innovate and teach new skills to students",
      location: "Tukkuguda,Hyderabad",
      participants: 450,
      photos: [
        "/uploads/events/main1.jpeg",
        "/uploads/events/main2.jpeg"
      ],
      
    },
    {
      name: "School Mentorship - Academic Heights",
      date: "July 2025",
      description: "Skill development workshops for high school students",
      location: "Badangpet,Hyderabad",
      participants: 300,
      photos: [
        "/uploads/events/jee2.jpeg",
        "/uploads/events/jee2.jpeg"
        
      ],
      
    }
  
  ];


    // Add MentoringCard component
  const MentoringCard = ({ experience }: { experience: MentoringExperience }) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-4 sm:p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.title}</h3>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>{experience.participants}+ participants</span>
            <span>{experience.date}</span>
          </div>

          {/* Image Gallery */}
          <div className="relative h-48 sm:h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={experience.media.images[currentImage]} 
              alt={experience.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {experience.media.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full ${currentImage === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Video Embed */}
          {experience.media.videos && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              <iframe 
                src={experience.media.videos[0]} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    );
  };

useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Adjust projects per view based on screen size
      if (window.innerWidth < 640) {
        setProjectsPerView(1);
      } else if (window.innerWidth < 768) {
        setProjectsPerView(2);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
      } else {
        setProjectsPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Other effects remain the same
  useEffect(() => {
    if (isExpanded) {
      setIsAnimating(true);
      const sections = ['about', 'projects', 'experience', 'social'];
      sections.forEach((section, index) => {
        setTimeout(() => {
          setVisibleSections(prev => [...prev, section]);
        }, index * 150);
      });
      setTimeout(() => setIsAnimating(false), 800);
    } else {
      setVisibleSections([]);
    }
  }, [isExpanded]);


  const nextProjectSlide = () => {
    const maxSlide = Math.ceil(projects.length / projectsPerView) - 1;
    setCurrentProjectSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevProjectSlide = () => {
    const maxSlide = Math.ceil(projects.length / projectsPerView) - 1;
    setCurrentProjectSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  const goToProjectSlide = (index: number) => {
    setCurrentProjectSlide(index);
  };

 const toggleExpanded = () => {
    if (!isAnimating) {
      const newState = !isExpanded;
      setIsExpanded(newState);
      onExpandChange(newState);
    }
  };

  const handleClose = () => {
    setVisibleSections([]);
    setTimeout(() => {
      setIsExpanded(false);
      onExpandChange(false);
    }, 100);
  };

  // Add EventCard component
  const EventCard = ({ event }: { event: Event }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-4 sm:p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{event.name}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{event.location}</span>
            <span className="mx-2">•</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>{event.date}</span>
          </div>
          
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          {/* Photo Gallery */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {event.photos.slice(0, 2).map((photo, idx) => (
              <div key={idx} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={photo} 
                  alt={`${event.name} ${idx+1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Video Preview */}
          {event.video && (
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              {showVideo ? (
                <iframe 
                  src={event.video} 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="bg-white/80 hover:bg-white p-3 rounded-full transition-all"
                    >
                      <Play className="text-blue-600 w-6 h-6" />
                    </button>
                  </div>
                  <img 
                    src={`https://img.youtube.com/vi/${event.video.split('/').pop()}/hqdefault.jpg`} 
                    alt={`${event.name} video thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };


   // Update visibleSections effect to include new sections
  useEffect(() => {
    if (isExpanded) {
      setIsAnimating(true);
      const sections = ['about', 'projects', 'experience', 'mentoring', 'events', 'social'];
      sections.forEach((section, index) => {
        setTimeout(() => {
          setVisibleSections(prev => [...prev, section]);
        }, index * 150);
      });
      setTimeout(() => setIsAnimating(false), 800);
    } else {
      setVisibleSections([]);
    }
  }, [isExpanded]);

   return (
    <div className="relative w-full">
      {/* Basic Card View - Responsive by default */}
      
      <div 
        onClick={toggleExpanded}
        className={`relative bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-4 sm:p-6 w-full max-w-sm mx-auto border border-white/20 group overflow-hidden ${isAnimating ? 'pointer-events-none' : ''}`}
      >
        {/* Responsive image size */}
        <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 sm:mb-6">
          <img 
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="relative w-full h-full rounded-full object-cover ring-3 sm:ring-4 ring-white/50 group-hover:ring-blue-200/60 transition-all duration-300"
          />
        </div>

{/* Responsive text sizing */}
<div className="text-center relative z-10 space-y-2 sm:space-y-3">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300">
    {personalInfo.name}
  </h2>
  <p className="text-blue-600 font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300 whitespace-nowrap overflow-hidden">
    {personalInfo.role}
  </p>
  <div className="flex items-center justify-center text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
    <MapPin size={14} className="mr-1 sm:mr-2" />
    {personalInfo.location}
  </div>
          <div className="flex items-center justify-center text-blue-500 text-xs sm:text-sm font-medium">
            <span className="mr-1 sm:mr-2">Tap to explore</span>
            <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Enhanced Expanded Modal View - Fully Responsive */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl sm:shadow-3xl w-full max-w-6xl max-h-[90vh] sm:max-h-[95vh] overflow-y-auto relative animate-slideUp">
            {/* Responsive close button */}
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1 sm:p-2 md:p-3 hover:bg-gray-100/80 rounded-full transition-all duration-200 z-20"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-gray-500 hover:text-gray-700 transition-colors duration-300" />
            </button>

            {/* Responsive header section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white p-4 sm:p-6 md:p-8 rounded-t-2xl sm:rounded-t-3xl">
              <div className="relative flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                {/* Responsive profile image */}
                <div className="relative">
                  <img 
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover ring-3 sm:ring-4 ring-white/30 shadow-lg"
                  />
                </div>
                
                {/* Responsive text content */}
                <div className="text-center lg:text-left flex-1 space-y-2 sm:space-y-3 md:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                    {personalInfo.name}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-2 sm:mb-3">
                    {personalInfo.role}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start text-blue-100 text-sm sm:text-base">
                    <MapPin size={16} className="sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    {personalInfo.location}
                  </div>
                  
                  {/* Responsive stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-center">
                      <div className="text-xl sm:text-2xl font-bold">{projects.length}</div>
                      <div className="text-xs sm:text-sm text-blue-100">Projects</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-center">
                      <div className="text-xl sm:text-2xl font-bold">4</div>
                      <div className="text-xs sm:text-sm text-blue-100">Companies</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-center">
                      <div className="text-xl sm:text-2xl font-bold">2+</div>
                      <div className="text-xs sm:text-sm text-blue-100">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content with responsive padding */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              {/* About Me Section */}
              <section className={`transition-all duration-700 ${visibleSections.includes('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                    <User className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">About Me</h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100/50">
                  {Array.isArray(personalInfo.bio) ? (
                    personalInfo.bio.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                      {personalInfo.bio}
                    </p>
                  )}
                </div>
              </section>

              {/* Projects Section - Responsive Carousel */}
              <section className={`transition-all duration-700 ${visibleSections.includes('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                  <div className="flex items-center">
                    <div className="p-2 sm:p-3 bg-purple-100 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                      <Code className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Featured Projects</h2>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">{projects.length} projects showcased</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2 ml-auto">
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      title={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
                    >
                      {isAutoPlaying ? (
                        <Pause className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Play className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </button>
                    <button
                      onClick={prevProjectSlide}
                      className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      title="Previous projects"
                    >
                      <ChevronLeft className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={nextProjectSlide}
                      className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      title="Next projects"
                    >
                      <ChevronRight className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Responsive project carousel */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/30 p-2 sm:p-4">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out gap-2 sm:gap-4 md:gap-6"
                    style={{ 
                      transform: `translateX(-${currentProjectSlide * (100 / Math.ceil(projects.length / projectsPerView))}%)`,
                      width: `${Math.ceil(projects.length / projectsPerView) * 100}%`
                    }}
                  >
                    {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, slideIndex) => (
                      <div 
                        key={slideIndex}
                        className={`grid gap-2 sm:gap-4 md:gap-6 flex-shrink-0`}
                        style={{ 
                          width: `${100 / Math.ceil(projects.length / projectsPerView)}%`,
                          gridTemplateColumns: `repeat(${projectsPerView}, 1fr)`
                        }}
                      >
                        {projects
                          .slice(slideIndex * projectsPerView, (slideIndex + 1) * projectsPerView)
                          .map((project, index) => {
                            const globalIndex = slideIndex * projectsPerView + index;
                            return (
                              <div 
                                key={globalIndex} 
                                className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer`}
                                onMouseEnter={() => setHoveredProject(globalIndex)}
                                onMouseLeave={() => setHoveredProject(null)}
                              >
                                <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                    {project.name}
                                  </h3>
                                  <Star className={`transition-all duration-300 flex-shrink-0 ml-1 sm:ml-2 ${hoveredProject === globalIndex ? 'text-yellow-500 scale-110' : 'text-gray-300'} w-3 h-3 sm:w-4 sm:h-4`} />
                                </div>
                                
                                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-3">
                                  {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                    <span 
                                      key={techIndex}
                                      className="px-1 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-xs sm:text-sm rounded-full font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                <div className="flex gap-2 sm:gap-3 md:gap-4">
                                  {project.githubUrl && (
                                    <a 
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-xs sm:text-sm"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" />
                                      <span>Code</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Responsive pagination */}
                <div className="flex justify-center items-center mt-4 sm:mt-6 gap-1 sm:gap-2">
                  {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToProjectSlide(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        currentProjectSlide === index 
                          ? 'bg-blue-600 w-4 sm:w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </section>

         {/* Experience Section - Responsive Grid Layout */}
<section className={`transition-all duration-700 ${visibleSections.includes('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="flex items-center mb-4 sm:mb-6">
    <div className="p-2 sm:p-3 bg-green-100 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
      <Briefcase className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">My Startups & Business</h2>
  </div>
  
  {/* Responsive Grid Layout */}
  {/* - 1 column on smallest mobile (under 400px) */}
  {/* - 2 columns from 400px to tablet */}
  {/* - 3 columns from tablet to desktop */}
  {/* - 4 columns on large desktop */}
  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
    {experiences.map((exp, index) => (
      <div 
        key={index} 
        className="flex flex-col p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl sm:rounded-2xl hover:shadow-md transition-all duration-300 border border-gray-100 h-full"
      >
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-shrink-0">
            {exp.logo ? (
              <img 
                src={exp.logo} 
                alt={`${exp.organization} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg bg-white p-1 border border-gray-200"
              />
            ) : (
              <div className={`p-2 sm:p-2.5 rounded-lg ${exp.type === 'work' ? 'bg-blue-100' : 'bg-teal-100'}`}>
                {exp.type === 'work' ? (
                  <Building2 className={`${exp.type === 'work' ? 'text-blue-600' : 'text-teal-600'} w-4 h-4 sm:w-5 sm:h-5`} />
                ) : (
                  <GraduationCap className="text-teal-600 w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
              {exp.organization}
            </h3>
            <p className="text-blue-600 font-medium text-sm sm:text-base">{exp.role}</p>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
              {exp.type === 'work' ? 'Startup' : 'Education'}
            </span>
            <span className="flex items-center text-gray-500 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {exp.period}
            </span>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">
            {exp.description}
          </p>
          
          {/* Website Button */}
          {exp.website && (
            <a
              href={exp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-medium transition-colors duration-200 w-full"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Visit Website</span>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
   

      {/* Workshops Section - Full Titles Visible */}
<section className={`transition-all duration-700 ${visibleSections.includes('mentoring') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="flex items-center mb-4 sm:mb-6">
    <div className="p-2 sm:p-3 bg-yellow-100 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
      <Users className="text-yellow-600 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Workshops</h2>
  </div>
  
  <div className="grid grid-cols-2 gap-3 sm:gap-6">
    {mentoringExperiences.map((exp, idx) => (
      <div key={idx} className="border rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        {/* Workshop Banner Image */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
          <img 
            src={exp.media.images[0]} // Updated image path
            alt={exp.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        {/* Workshop Content - Full Title Visible */}
        <div className="p-3 sm:p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start gap-1 mb-1">
            <h3 className="font-bold text-sm sm:text-base text-gray-800 break-words whitespace-normal"> {/* Removed line-clamp */}
              {exp.title}
            </h3>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full whitespace-nowrap shrink-0 ml-1">
              {exp.date}
            </span>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-2">
            {exp.description}
          </p>
          
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-auto">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <span>{exp.participants.toLocaleString()} participants</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Mentoring Section - Full Titles Visible */}
<section className={`transition-all duration-700 mt-8 sm:mt-12 ${visibleSections.includes('events') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="flex items-center mb-4 sm:mb-6">
    <div className="p-2 sm:p-3 bg-red-100 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
      <Calendar className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Mentoring</h2>
  </div>
  
  <div className="grid grid-cols-2 gap-3 sm:gap-6">
    {pastEvents.map((event, idx) => (
      <div key={idx} className="border rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
        {/* Mentoring Banner Image */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
          <img 
            src={event.photos[0]} 
            alt={event.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        {/* Mentoring Content - Full Title Visible */}
        <div className="p-3 sm:p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start gap-1 mb-1">
            <h3 className="font-bold text-sm sm:text-base text-gray-800 break-words whitespace-normal"> {/* Removed line-clamp */}
              {event.name}
            </h3>
            <span className="text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full whitespace-nowrap shrink-0 ml-1">
              {event.date}
            </span>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-2">
            {event.description}
          </p>
          
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-auto">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>       

         {/* Centered Social Links - Compact Single Line */}
<section className={`transition-all duration-700 ${visibleSections.includes('social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} flex flex-col items-center`}>
  <div className="flex items-center mb-4 sm:mb-6">
   
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Let's Connect</h2>
  </div>
  
  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
    {/* LinkedIn */}
    <a 
      href={personalInfo.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 sm:p-3.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>

    {/* GitHub */}
    <a 
      href={`https://github.com/${personalInfo.github}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 sm:p-3.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
      aria-label="GitHub"
    >
      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>

 {/* Portfolio (Conditional) */}
    {personalInfo.portfolio && (
      <a 
        href={personalInfo.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-3 sm:p-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
        aria-label="Portfolio"
      >
        <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    )}


    {/* Instagram */}
    <a 
      href="https://www.instagram.com/laxminivasmorishetty/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 sm:p-3.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
      aria-label="Instagram"
    >
      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
    

    {/* Email */}
    <a 
      href={`mailto:${personalInfo.email}`}
      className="flex items-center justify-center p-3 sm:p-3.5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
      aria-label="Email"
    >
      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>

    {/* Call Me */}
    <a 
      href={`tel:+919059160424`}
      className="flex items-center justify-center p-3 sm:p-3.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
      aria-label="Call Me"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>

   

  </div>
</section>    
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalIdCard;