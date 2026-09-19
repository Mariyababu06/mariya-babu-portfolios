
import Float3D from './Float3D';
import Card3D from './Card3D';

const ServicesSection = () => {
  return (
    <section id="services" className="section py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Float3D delay={0} intensity={1}>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                My Services
              </span>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </Float3D>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '📊',
              title: 'Data Analysis & Reporting',
              desc: 'Analyzing structured data to identify trends, patterns, and anomalies. Performing exploratory data analysis (EDA) and delivering clear, actionable insights for business decisions.',
              gradient: 'from-purple-500 to-purple-700'
            },
            {
              icon: '📈',
              title: 'Dashboard & BI Development',
              desc: 'Building interactive Power BI dashboards with DAX measures, so stakeholders can explore business data without waiting on a new report every time.',
              gradient: 'from-pink-500 to-pink-700'
            },
            {
              icon: '🗄️',
              title: 'SQL & Database Querying',
              desc: 'Writing complex SQL — CTEs, window functions, aggregations — to pull, join, and summarize data cleanly for reporting and analysis.',
              gradient: 'from-cyan-500 to-blue-600'
            },
            {
              icon: '🤖',
              title: 'Applied Machine Learning',
              desc: 'Building classification and regression models with scikit-learn, CatBoost, and XGBoost for practical business problems like segmentation and prediction.',
              gradient: 'from-yellow-500 to-orange-500'
            }
          ].map((service, index) => (
            <Float3D key={index} delay={0.3 + index * 0.2} intensity={0.5}>
              <Card3D intensity={0.4}>
                <a href="#contact" className="group relative block overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 group-hover:opacity-25 blur-xl transition-all duration-500`}></div>
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                    <span className="text-5xl mb-6 inline-block animate-pulse">{service.icon}</span>
                    <h3 className="font-bold text-white text-2xl mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">{service.desc}</p>
                    <span className="text-purple-400 font-semibold group-hover:text-pink-400 transition-colors duration-300">
                      Learn more →
                    </span>
                  </div>
                </a>
              </Card3D>
            </Float3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
