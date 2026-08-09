import Float3D from './Float3D';
import Card3D from './Card3D';

interface SkillCategory {
  title: string;
  icon: string;
  gradient: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analysis',
    icon: '📊',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning & Preprocessing',
      'KPI Dashboards & Reporting',
      'Statistical Analysis',
      'Power BI & DAX',
    ],
  },
  {
    title: 'Business Analysis',
    icon: '💼',
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      'Requirement Gathering',
      'Process Mapping',
      'Business Intelligence',
      'Stakeholder Reporting',
      'Data-Driven Decision Making',
    ],
  },
  {
    title: 'SQL',
    icon: '🗄️',
    gradient: 'from-blue-500 to-indigo-500',
    skills: [
      'Complex Queries & Joins',
      'Window Functions',
      'Data Aggregation',
      'Subqueries & CTEs',
      'MySQL & PostgreSQL',
    ],
  },
  {
    title: 'Python',
    icon: '🐍',
    gradient: 'from-yellow-500 to-orange-500',
    skills: [
      'Pandas & NumPy',
      'Data Manipulation',
      'Matplotlib & Seaborn',
      'Jupyter Notebooks',
      'Automation Scripts',
    ],
  },
  {
    title: 'Excel',
    icon: '📈',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'Advanced Formulas',
      'Pivot Tables & Charts',
      'VLOOKUP / XLOOKUP',
      'Data Validation',
      'Conditional Formatting',
    ],
  },
  {
    title: 'ML Basics',
    icon: '🤖',
    gradient: 'from-red-500 to-rose-500',
    skills: [
      'Supervised Learning',
      'Classification & Regression',
      'Scikit-learn',
      'Model Evaluation',
      'Feature Engineering Basics',
    ],
  },
];

const SkillsHighlights = () => {
  return (
    <section id="skills" className="section py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.12)_0%,transparent_60%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <Float3D delay={0} intensity={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Skills Highlights
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              A quick snapshot of my core competencies across analytics, data engineering, and business intelligence.
            </p>
          </div>
        </Float3D>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Float3D key={category.title} delay={0.2 + index * 0.15} intensity={0.6}>
              <Card3D intensity={0.5}>
                <div className="group relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 blur-xl group-hover:opacity-25 transition-all duration-500`} />
                  <div className="relative h-full bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} flex-shrink-0`} />
                          <span className="text-sm md:text-base">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            </Float3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsHighlights;
