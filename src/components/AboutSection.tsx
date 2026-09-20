
import { useState } from 'react';
import SkillsTab from './TabContent/SkillsTab';
import ExperienceTab from './TabContent/ExperienceTab';
import EducationTab from './TabContent/EducationTab';
import CertificationTab from './TabContent/CertificationTab';
import Float3D from './Float3D';
import Card3D from './Card3D';
import Parallax3D from './Parallax3D';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="section py-32 px-6 relative overflow-hidden">
      {/* Enhanced 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
      
      {/* Enhanced floating geometric shapes with better 3D animation */}
      <div className="absolute inset-0 overflow-hidden perspective-1000">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Parallax3D 
              speed={0.3 + i * 0.1} 
              rotationSpeed={0.05 + i * 0.02}
            >
              <div
                className="w-8 h-8 border-2 border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
                style={{
                  animation: `pulse3d ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `rotateZ(${i * 15}deg)`,
                  borderRadius: i % 2 === 0 ? '50%' : '0%',
                }}
              />
            </Parallax3D>
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Title with 3D effect */}
        <Float3D delay={0} intensity={1}>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                About Me
              </span>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl -z-10 animate-pulse"></div>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
          </div>
        </Float3D>
        
        {/* Main Content Grid with 3D enhancements */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Interactive Profile Card with 3D */}
          <Float3D delay={0.5} intensity={0.8}>
            <Card3D intensity={0.6}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                 <div className="relative bg-gray-900/90 backdrop-blur-2xl p-10 rounded-2xl border border-white/20 shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 rounded-2xl"></div>
               
                   {/* Profile Header */}
                   <div className="flex items-center gap-6 mb-8">
                     <div className="relative">
                       <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold animate-spin" style={{animationDuration: '10s'}}>
                         🚀
                       </div>
                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
                     </div>
                     <div>
                       <h3 className="text-3xl font-bold text-white mb-2">My Journey</h3>
                       <div className="flex gap-2">
                          <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm border border-purple-500/50 animate-pulse">Data Analyst</span>
                          <span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-sm border border-cyan-500/50 animate-pulse" style={{animationDelay: '0.5s'}}>Business Intelligence Analyst</span>
                          <span className="px-3 py-1 bg-green-500/30 text-green-300 rounded-full text-sm border border-green-500/50 animate-pulse" style={{animationDelay: '1s'}}>Available Immediately</span>
                       </div>
                     </div>
                   </div>

                   {/* Enhanced Description */}
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p className="text-lg hover:text-white transition-colors duration-300">
                        🌟 Hello! I'm Mariya Babu, a <span className="text-purple-400 font-semibold">Data Analyst</span> who enjoys turning raw, messy datasets into insights people can actually act on.
                      </p>
                      <p className="text-lg hover:text-white transition-colors duration-300">
                         💡 I work mainly with <span className="text-pink-400 font-semibold">SQL, Python, and Power BI</span> — building dashboards, cleaning data, and running exploratory analysis. I've also built applied machine learning projects end-to-end, from customer segmentation to predictive modeling, and I'm prepared for <span className="text-cyan-400 font-semibold">Junior ML Engineer</span> opportunities.
                      </p>
                      <p className="text-lg hover:text-white transition-colors duration-300">
                        🎯 I enjoy the parts of the job most people skip: digging into <span className="text-yellow-400 font-semibold">why the data looks the way it does</span> before jumping to conclusions. If you're hiring, let's talk!
                      </p>
                    </div>

                    {/* Interactive Tech Stack */}
                    <div className="mt-8">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <span className="text-2xl animate-spin" style={{animationDuration: '3s'}}>⚡</span>
                        Core Technologies
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {['SQL', 'Python', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'CatBoost', 'XGBoost'].map((tech, index) => (
                         <span 
                           key={index} 
                           className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 cursor-pointer animate-pulse"
                           style={{animationDelay: `${index * 0.2}s`}}
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
            </Card3D>
          </Float3D>
          
          {/* Right Column - Achievement Cards with 3D */}
          <Float3D delay={1} intensity={0.6}>
            <div className="space-y-6">
            {[
              { 
                icon: '🎓', 
                title: 'B.Tech in Information Technology', 
                desc: 'KKR & KSR Institute of Tech & Sciences · CGPA 7.21 · 2022–2026',
                gradient: 'from-purple-500 to-purple-700',
                delay: '0s'
              },
              { 
                icon: '💼', 
                title: '3 Internships', 
                desc: 'Shamgar Software Solution (ML) · Cognifyz & Bharat Intern (Data Science)',
                gradient: 'from-pink-500 to-pink-700',
                delay: '0.2s'
              },
              { 
                icon: '🏆', 
                title: 'Certified in Data & ML', 
                desc: 'IBM Data Analysis with Python + DeepLearning.AI Unsupervised Learning, Recommenders & RL',
                gradient: 'from-cyan-500 to-cyan-700',
                delay: '0.4s'
              },
              { 
                icon: '🌟', 
                title: 'End-to-End ML Projects', 
                desc: 'RFM customer segmentation, student performance prediction & churn modeling',
                gradient: 'from-yellow-500 to-orange-500',
                delay: '0.6s'
              }
            ].map((item, index) => (
              <Card3D key={index} intensity={0.4}>
                <div 
                  className="group relative overflow-hidden"
                  style={{animationDelay: item.delay}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500`}></div>
                  <div className="relative flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                    <div className="relative">
                      <span className="text-4xl animate-bounce" style={{animationDuration: '2s', animationDelay: item.delay}}>{item.icon}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-30 blur-md rounded-full`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                    </div>
                    <div className={`w-2 h-12 bg-gradient-to-b ${item.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300`}></div>
                  </div>
                </div>
              </Card3D>
            ))}
            </div>
          </Float3D>
        </div>

        {/* Enhanced Tab Section with 3D */}
        <Float3D delay={1.5} intensity={0.5}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { id: 'skills', label: 'Skills', icon: '🧠', gradient: 'from-purple-500 to-purple-700' },
                  { id: 'experience', label: 'Experience', icon: '💼', gradient: 'from-pink-500 to-pink-700' },
                  { id: 'education', label: 'Education', icon: '🎓', gradient: 'from-cyan-500 to-cyan-700' },
                  { id: 'certification', label: 'Certification', icon: '🏆', gradient: 'from-yellow-500 to-orange-600' }
                ].map((tab, index) => (
                  <Card3D key={tab.id} intensity={0.3}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`group relative overflow-hidden flex items-center gap-4 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl scale-110`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <span className="text-2xl animate-pulse">{tab.icon}</span>
                      <span className="relative z-10">{tab.label}</span>
                      {activeTab === tab.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                      )}
                    </button>
                  </Card3D>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[500px] relative">
                {activeTab === 'skills' && <SkillsTab />}
                {activeTab === 'experience' && <ExperienceTab />}
                {activeTab === 'education' && <EducationTab />}
                {activeTab === 'certification' && <CertificationTab />}
              </div>
            </div>
          </div>
        </Float3D>
      </div>
    </section>
  );
};

export default AboutSection;
