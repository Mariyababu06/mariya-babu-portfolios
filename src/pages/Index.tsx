
import { useEffect, useState } from 'react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }

    // Smooth scrolling for navigation links
    const navLinksArray = document.querySelectorAll('.nav-link');
    navLinksArray.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
        // Close mobile menu after clicking
        if (navLinks) {
          navLinks.classList.remove('active');
        }
      });
    });

    // Magnetic effect for buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (element as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        
        (element as HTMLElement).style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const htmlBar = bar as HTMLElement;
          const width = htmlBar.style.width;
          htmlBar.style.width = '0%';
          setTimeout(() => {
            htmlBar.style.width = width;
          }, 100);
        }
      });
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          
          // Animate skill bars when about section is visible
          if (entry.target.id === 'About') {
            setTimeout(animateSkillBars, 500);
          }
        }
      });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
      });
    }

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Particles Background */}
      <div id="particles-js" className="fixed inset-0 -z-10"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              M<span className="text-purple-400">•</span>B
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/38c13c04-c458-4060-992c-9279161cbe7a.png" 
              alt="Maria Babu" 
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maria Babu
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Data Science & AI Solutions Expert
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Transforming complex data into actionable insights with cutting-edge AI and machine learning solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="magnetic bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
              View My Work
            </a>
            <a href="#contact" className="magnetic border-2 border-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/20 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="section py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  My Journey
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate data scientist and AI enthusiast with expertise in machine learning, 
                  data analysis, and predictive modeling. I transform complex business challenges into 
                  data-driven solutions that drive growth and innovation.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With a strong foundation in Python, machine learning algorithms, and data visualization, 
                  I help organizations unlock the power of their data to make informed decisions.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Python', 'Machine Learning', 'Data Science', 'AI'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: '🎓', title: 'Computer Science & Data Analytics', desc: 'Strong academic foundation' },
                { icon: '💼', title: '3+ Years in Data Science', desc: 'Professional experience' },
                { icon: '🏆', title: 'Multiple AI/ML Certifications', desc: 'Continuous learning' },
                { icon: '🌟', title: '10+ Successful Projects', desc: 'Proven track record' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tab Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'skills', label: 'Skills', icon: '🧠' },
                { id: 'experience', label: 'Experience', icon: '💼' },
                { id: 'education', label: 'Education', icon: '🎓' },
                { id: 'certification', label: 'Certification', icon: '🏆' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'skills' && (
                <div className="animate-fade-in">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'Machine Learning', level: 95, color: 'from-purple-500 to-purple-700' },
                      { name: 'Deep Learning', level: 90, color: 'from-blue-500 to-blue-700' },
                      { name: 'Data Science', level: 92, color: 'from-green-500 to-green-700' },
                      { name: 'Python & R', level: 88, color: 'from-yellow-500 to-orange-500' },
                      { name: 'Big Data Analytics', level: 85, color: 'from-red-500 to-red-700' },
                      { name: 'AI Solutions', level: 93, color: 'from-pink-500 to-pink-700' }
                    ].map((skill, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <h4 className="font-semibold text-white mb-4">{skill.name}</h4>
                        <div className="relative">
                          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                            <div 
                              className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="animate-fade-in">
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Machine Learning Intern',
                        company: 'Shamgar Software Solution',
                        period: '2025 - Current',
                        description: 'Working on advanced ML algorithms and AI solutions for enterprise clients.'
                      },
                      {
                        title: 'Data Science Intern',
                        company: 'Cognifyz Technologies',
                        period: 'Nov 1, 2024 - Dec 1, 2024',
                        description: 'Developed predictive models and performed data analysis for business insights.'
                      },
                      {
                        title: 'Data Science Intern',
                        company: 'Bharat Intern',
                        period: 'Aug 10, 2024 - Sep 10, 2024',
                        description: 'Built machine learning models and created data visualization dashboards.'
                      }
                    ].map((exp, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-white text-lg">{exp.title}</h4>
                            <p className="text-purple-400 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="animate-fade-in">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        degree: 'B.Tech',
                        institution: 'KKR & KSR Institute of Technology & Sciences, Vinjampadu',
                        period: '2022 - 2026',
                        grade: 'CGPA: 7.23'
                      },
                      {
                        degree: 'Intermediate',
                        institution: 'Palnadu Junior College, Macharla',
                        period: '2020 - 2022',
                        grade: 'Score: 59%'
                      },
                      {
                        degree: 'Secondary Education',
                        institution: 'Z.P Boys High School, Macharla',
                        period: '2018 - 2020',
                        grade: 'Score: 85%'
                      }
                    ].map((edu, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                        <h4 className="font-bold text-white text-lg mb-2">{edu.degree}</h4>
                        <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                          {edu.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'certification' && (
                <div className="animate-fade-in">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: 'Artificial Intelligence Fundamentals',
                        provider: 'IBM',
                        date: 'February 2025',
                        skills: ['AI Foundations', 'Machine Learning', 'Data Analysis']
                      },
                      {
                        title: 'Data Analysis with Python',
                        provider: 'IBM on Coursera',
                        date: 'December 2, 2024',
                        skills: ['Python', 'Pandas', 'NumPy']
                      },
                      {
                        title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
                        provider: 'DeepLearning.AI on Coursera',
                        date: 'October 30, 2024',
                        skills: ['Deep Learning', 'Neural Networks', 'Reinforcement Learning']
                      }
                    ].map((cert, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl">🏆</span>
                          <span className="text-xs text-gray-400">{cert.date}</span>
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2 leading-tight">{cert.title}</h4>
                        <p className="text-purple-400 font-medium mb-4">{cert.provider}</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
