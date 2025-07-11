
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
