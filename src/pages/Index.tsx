
import { useEffect } from 'react';

const Index = () => {
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

      {/* About Section */}
      <section id="about" className="section py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate data scientist and AI enthusiast with expertise in machine learning, 
                data analysis, and predictive modeling. I transform complex business challenges into 
                data-driven solutions that drive growth and innovation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in Python, machine learning algorithms, and data visualization, 
                I help organizations unlock the power of their data to make informed decisions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🎓</span>
                <span>Computer Science & Data Analytics</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">💼</span>
                <span>3+ Years in Data Science</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🏆</span>
                <span>Multiple AI/ML Certifications</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🌟</span>
                <span>10+ Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
