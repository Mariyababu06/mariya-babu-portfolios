
const ExperienceTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        {[
          {
            title: 'Machine Learning Intern',
            company: 'Shamgar Software Solution',
            period: '2025 - Current',
            description: 'Working on advanced ML algorithms and machine learning solutions for enterprise clients.'
          },
          {
            title: 'Data Science Intern',
            company: 'Cognifyz Technologies',
            period: 'Nov 1, 2024 - Dec 1, 2024',
            description: 'Developed predictive models and performed data analysis for business insights.'
          },
          {
            title: 'Data Science Intern',
            company: 'Bharat Intern',
            period: 'Aug 10, 2024 - Sep 10, 2024',
            description: 'Built machine learning models and created data visualization dashboards.'
          }
        ].map((exp, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-white text-lg">{exp.title}</h4>
                <p className="text-purple-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
