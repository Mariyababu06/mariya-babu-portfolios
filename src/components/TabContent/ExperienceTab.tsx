
const ExperienceTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="space-y-6">
        {[
          {
            title: 'Data Analyst Intern',
            company: 'Shamgar Software Solution',
            period: 'Jan 18, 2025 – Apr 18, 2025 · Visakhapatnam',
            description: 'Cleaned and preprocessed 10+ structured business datasets in Python (Pandas, NumPy) with reusable scripts, cutting manual data-prep time by ~30%. Built and evaluated classification/regression models in Scikit-learn to surface trends and improve stakeholder confidence in reported insights. Designed 5+ automated Power BI reporting dashboards, saving ~4 hours of weekly manual reporting and standardizing KPI tracking across teams.'
          },
          {
            title: 'Student Performance Indicator — Deployed ML App',
            company: 'Python · Scikit-learn · CatBoost · XGBoost · Flask · AWS',
            period: 'Project',
            description: 'Built an end-to-end ML pipeline predicting student math scores from 1,000+ records. Trained and compared 10+ regression models; CatBoost achieved best R² of 0.88. Deployed as a live Flask web app on AWS.'
          },
          {
            title: 'Customer Segmentation & RFM Analysis',
            company: 'Python · SQL · Power BI · K-Means',
            period: 'Project',
            description: 'Segmented 500K+ e-commerce customers using RFM scoring in SQL and K-Means clustering into 4 revenue tiers. Power BI dashboard revealed the high-value segment drove 62% of total revenue.'
          },
          {
            title: 'Sales Forecast & KPI Dashboard',
            company: 'Power BI · DAX · Advanced Excel',
            period: 'Project',
            description: 'Analyzed 5K+ sales records using Pivot Tables, VLOOKUP, INDEX-MATCH, and Power Query. Built a Power BI dashboard with 10+ DAX measures for YoY growth, moving averages, and forecast accuracy — improving reporting efficiency by 20%.'
          },
          {
            title: 'HR Attrition Analytics Dashboard',
            company: 'Python · Power BI · DAX',
            period: 'Project',
            description: 'Analyzed the IBM HR dataset (1.4K+ records) to identify key drivers of employee attrition by department and salary band. Built an interactive Power BI dashboard flagging the top 3 attrition risk factors using DAX.'
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
