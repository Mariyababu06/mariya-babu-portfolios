
const CertificationTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Google Data Analytics Professional Certificate',
            provider: 'Google · Coursera',
            date: '2024',
            skills: ['SQL', 'R', 'Tableau', 'Data Cleaning', 'Analytics']
          },
          {
            title: 'IBM Data Science Professional Certificate',
            provider: 'IBM · Coursera',
            date: '2024',
            skills: ['Python', 'Pandas', 'SQL', 'Data Visualization']
          },
          {
            title: 'Machine Learning Specialization',
            provider: 'Andrew Ng · DeepLearning.AI · Coursera',
            date: '2024',
            skills: ['Supervised Learning', 'Neural Networks', 'Scikit-learn']
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
