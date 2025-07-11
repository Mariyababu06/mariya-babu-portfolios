import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

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

    // Enhanced magnetic effect for buttons with 3D transforms
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (element as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        
        (element as HTMLElement).style.transform = `
          perspective(1000px) 
          translate(${x * 0.1}px, ${y * 0.1}px) 
          rotateX(${y * 0.05}deg) 
          rotateY(${x * 0.05}deg)
          translateZ(10px)
        `;
      });
      
      element.addEventListener('mouseleave', () => {
        (element as HTMLElement).style.transform = 'perspective(1000px) translate(0px, 0px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
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

    // Enhanced Intersection Observer for 3D animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn', 'animate-3d-enter');
          
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white relative overflow-hidden">
      {/* Enhanced Particles Background with 3D effect */}
      <div id="particles-js" className="fixed inset-0 -z-10" style={{ transform: 'translateZ(-100px)' }}></div>
      
      {/* 3D Background Elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ transform: 'translateZ(-50px)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', transform: 'translateZ(-30px)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s', transform: 'translate(-50%, -50%) translateZ(-20px)' }}></div>
      </div>
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
