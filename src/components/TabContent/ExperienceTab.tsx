
const ExperienceTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        {[
          {
            title: 'Data Analyst Intern',
            company: 'Shamgar Software Solution',
            period: 'Jan 18, 2025 – Apr 18, 2025 · Visakhapatnam',
            description: 'Cleaned and preprocessed 10+ business datasets in Python (Pandas, NumPy), cutting manual prep time by ~30%. Built classification and regression models in Scikit-learn to surface trends, and designed 5+ automated Power BI dashboards that reduced weekly manual reporting effort by ~4 hours.'
          },
          {
            title: 'Actively Seeking — Data Analyst / Business Analyst',
            company: 'Full-time role from June 2026',
            period: 'Open to Hyderabad · Bangalore · Remote',
            description: 'Final-year B.Tech (IT) student graduating June 2026. Looking for a full-time Data Analyst or Business Analyst opportunity where I can turn raw data into dashboards and business decisions. HRs & recruiters — let\'s connect!'
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
