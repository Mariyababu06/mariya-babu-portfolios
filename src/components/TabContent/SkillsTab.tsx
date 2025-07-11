
const SkillsTab = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Machine Learning', level: 95, color: 'from-purple-500 to-purple-700', icon: '🤖' },
          { name: 'Deep Learning', level: 90, color: 'from-blue-500 to-blue-700', icon: '🧠' },
          { name: 'Data Science', level: 92, color: 'from-green-500 to-green-700', icon: '📊' },
          { name: 'Python & R', level: 88, color: 'from-yellow-500 to-orange-500', icon: '🐍' },
          { name: 'Big Data Analytics', level: 85, color: 'from-red-500 to-red-700', icon: '💾' },
          { name: 'AI Solutions', level: 93, color: 'from-pink-500 to-pink-700', icon: '⚡' }
        ].map((skill, index) => (
          <div key={index} className="group relative overflow-hidden bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-all duration-500`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>{skill.icon}</span>
                <h4 className="font-bold text-white text-xl">{skill.name}</h4>
              </div>
              <div className="relative mb-4">
                <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-4 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
