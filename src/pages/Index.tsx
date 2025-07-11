
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

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
      
      <Navigation />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Index;
