
import React, { FormEvent, useState } from 'react';
import AnimatedSphere from './AnimatedSphere';
import cvAsset from '../assets/mariya-babu-cv.pdf.asset.json';

const responseSheetUrl = 'https://script.google.com/macros/s/AKfycbw7TYNiC0zDlUeEejvTB0gchgqE2YdX5EdDlegFo7XddwBIadaS-6CvdynSpSy2xbXAEw/exec';

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      await fetch(responseSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="Contact" className="py-20 relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's create something amazing together.
          </p>
        </div>

        {/* 3D Animated Sphere */}
        <AnimatedSphere />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">Contact.</h3>
              
              <div className="space-y-6">
                <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">mariyababuit@mail.com</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-semibold">+91 7993642366</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links with 3D Effects */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/mariya-babu-854331257/', color: 'from-blue-600 to-blue-700' },
                    { icon: 'fab fa-github', href: 'https://github.com/Mariyababu06', color: 'from-gray-700 to-gray-800' },
                    { icon: 'fab fa-twitter', href: 'https://x.com/ruben_babu29153?t=sQMRoBP5OXUoOrWx4DaELA&s=09', color: 'from-blue-400 to-blue-500' },
                    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/_.thenameisruben._/', color: 'from-pink-500 to-purple-500' },
                    { icon: 'fas fa-code', href: 'https://leetcode.com/u/X25sJQOCq0/', color: 'from-orange-500 to-red-500' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/25`}
                      style={{
                        transform: `perspective(1000px) rotateX(10deg) rotateY(${index * 5}deg)`,
                      }}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={cvAsset.url}
                download="Mariya-Babu-CV.pdf"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:rotate-2"
              >
                Download CV
              </a>
            </div>

            {/* Contact Form with 3D Effects */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-500">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02]"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02]"
                    required
                  />
                </div>
                <div className="group">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 transform group-hover:scale-[1.02] focus:scale-[1.02] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:rotate-1"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-center text-green-300" role="status">Thanks — your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-center text-red-300" role="alert">Something went wrong. Please email me directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
