
import Float3D from './Float3D';
import Card3D from './Card3D';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Float3D delay={0} intensity={1}>
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Work
              </span>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-cyan-400/20 to-pink-400/20 blur-2xl -z-10"></div>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </Float3D>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '🛒',
              title: 'Customer Segmentation Using RFM Analysis',
              desc: 'Segmented 5,878 customers from 824K+ transactions using SQL (CTEs/window functions) and K-Means clustering. Found 65% of customers/revenue sitting in the "At Risk" segment and only 4 true "Champions" — built a Power BI/DAX dashboard to surface it, containerized with Docker and deployed on Render.',
              tags: ['SQL', 'K-Means', 'Power BI', 'Docker', 'Render'],
              gradient: 'from-purple-500 to-purple-700'
            },
            {
              icon: '🎓',
              title: 'Student Performance Indicator',
              desc: 'Built a CatBoost regression model (R² = 0.88) to predict student performance from academic and demographic features. Served it via Flask and deployed to AWS Elastic Beanstalk with CodePipeline CI/CD.',
              tags: ['CatBoost', 'Flask', 'AWS', 'CI/CD'],
              gradient: 'from-pink-500 to-pink-700'
            },
            {
              icon: '📉',
              title: 'Customer Churn Prediction',
              desc: 'Developed a predictive model for customer churn using Python and scikit-learn — exploring feature engineering and model comparison to flag customers likely to leave.',
              tags: ['Python', 'Scikit-learn', 'Feature Engineering'],
              gradient: 'from-cyan-500 to-blue-600'
            }
          ].map((project, index) => (
            <Float3D key={index} delay={0.3 + index * 0.2} intensity={0.6}>
              <Card3D intensity={0.5}>
                <a
                  href="https://github.com/Mariyababu06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-25 blur-xl transition-all duration-500`}></div>
                  <div className="relative h-full flex flex-col p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                    <span className="text-5xl mb-6 inline-block animate-pulse">{project.icon}</span>
                    <h3 className="font-bold text-white text-xl mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 group-hover:text-gray-300 transition-colors duration-300">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Card3D>
            </Float3D>
          ))}
        </div>

        <Float3D delay={1} intensity={0.6}>
          <div className="text-center">
            <a
              href="https://github.com/Mariyababu06"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-block border-2 border-purple-400 px-10 py-4 rounded-full font-semibold hover:bg-purple-400/20 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </Float3D>
      </div>
    </section>
  );
};

export default ProjectsSection;
