import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Animate skill bars once, only when the About section enters the viewport.
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const htmlBar = bar as HTMLElement;
        htmlBar.classList.add('progress-animate');
      });
    };

    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn', 'animate-3d-enter');

          if (entry.target.id === 'About') {
            animateSkillBars();
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{ transform: 'translateZ(-50px)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" style={{ transform: 'translateZ(-30px)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" style={{ transform: 'translate(-50%, -50%) translateZ(-20px)' }}></div>
      </div>
      
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
