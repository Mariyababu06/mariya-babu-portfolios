
const CertificationTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Artificial Intelligence Fundamentals',
            provider: 'IBM',
            date: 'February 2025',
            skills: ['AI Foundations', 'Machine Learning', 'Data Analysis']
          },
          {
            title: 'Data Analysis with Python',
            provider: 'IBM on Coursera',
            date: 'December 2, 2024',
            skills: ['Python', 'Pandas', 'NumPy']
          },
          {
            title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
            provider: 'DeepLearning.AI on Coursera',
            date: 'October 30, 2024',
            skills: ['Deep Learning', 'Neural Networks', 'Reinforcement Learning']
          }
        ].map((cert, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">🏆</span>
              <span className="text-xs text-gray-400">{cert.date}</span>
            </div>
            <h4 className="font-bold text-white text-lg mb-2 leading-tight">{cert.title}</h4>
            <p className="text-purple-400 font-medium mb-4">{cert.provider}</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationTab;
