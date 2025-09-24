
import Float3D from './Float3D';
import Card3D from './Card3D';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${i * 20}px)`,
              animation: `orbit3d ${15 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <Float3D delay={0.5} intensity={1.2} className="mb-8">
          <Card3D intensity={0.8}>
            <img 
              src="/lovable-uploads/38c13c04-c458-4060-992c-9279161cbe7a.png" 
              alt="Maria Babu" 
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl hover:shadow-purple-400/50 transition-all duration-500"
            />
          </Card3D>
        </Float3D>
        <Float3D delay={1} intensity={0.8}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Maria Babu
          </h1>
        </Float3D>
        <Float3D delay={1.5} intensity={0.6}>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Machine Learning Engineer
          </p>
        </Float3D>
        <Float3D delay={2} intensity={0.4}>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Transforming complex data into actionable insights with cutting-edge machine learning and deep learning solutions
          </p>
        </Float3D>
        <Float3D delay={2.5} intensity={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card3D intensity={0.6}>
              <a href="#projects" className="magnetic bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform block">
                View My Work
              </a>
            </Card3D>
            <Card3D intensity={0.6}>
              <a href="#contact" className="magnetic border-2 border-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/20 transition-colors block">
                Get In Touch
              </a>
            </Card3D>
          </div>
        </Float3D>
      </div>
    </section>
  );
};

export default HeroSection;
