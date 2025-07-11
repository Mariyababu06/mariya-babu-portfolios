
const EducationTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            degree: 'B.Tech',
            institution: 'KKR & KSR Institute of Technology & Sciences, Vinjampadu',
            period: '2022 - 2026',
            grade: 'CGPA: 7.23'
          },
          {
            degree: 'Intermediate',
            institution: 'Palnadu Junior College, Macharla',
            period: '2020 - 2022',
            grade: 'Score: 59%'
          },
          {
            degree: 'Secondary Education',
            institution: 'Z.P Boys High School, Macharla',
            period: '2018 - 2020',
            grade: 'Score: 85%'
          }
        ].map((edu, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <h4 className="font-bold text-white text-lg mb-2">{edu.degree}</h4>
            <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
            <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
              {edu.grade}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTab;
