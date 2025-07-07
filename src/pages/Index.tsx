
import SkillCard from "@/components/SkillCard";
import AchievementCard from "@/components/AchievementCard";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Analysis", level: 88 },
    { name: "Leadership", level: 80 },
    { name: "Communication", level: 92 },
    { name: "Problem-Solving", level: 95 }
  ];

  const achievements = [
    {
      title: "Project X: Recommendation System",
      description: "Built a recommendation system increasing user engagement by 40%",
      icon: "🚀"
    },
    {
      title: "Project Y: Process Automation",
      description: "Automated reports, saving 10+ hours/week for the team",
      icon: "⚡"
    },
    {
      title: "Professional Certifications",
      description: "Google Data Analytics, AWS Certified",
      icon: "🏆"
    }
  ];

  const superpowers = [
    {
      title: "Problem-Solving",
      description: "Turn complex challenges into simple solutions",
      icon: "🔹"
    },
    {
      title: "Communication",
      description: "Explain tech to non-tech stakeholders effortlessly",
      icon: "🔹"
    },
    {
      title: "Adaptability",
      description: "Quick to learn new tools and frameworks",
      icon: "🔹"
    }
  ];

  const personalityTraits = [
    {
      title: "Positive & Proactive",
      description: "Bring energy and ideas to the table",
      icon: "🔸"
    },
    {
      title: "Detail-Oriented",
      description: "Deliver high-quality work, on time",
      icon: "🔸"
    },
    {
      title: "Team Culture Lover",
      description: "Believe in collaboration and fun at work!",
      icon: "🔸"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              MB
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mariya Babu
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6">
              Data Scientist & Machine Learning Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
                ✅ Fast Learner & Team Player
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
                ✅ Passionate & Driven
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Top Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Superpowers Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            💡 My Superpowers
          </h2>
          <p className="text-white/80 text-center mb-12">Key Strengths</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {superpowers.map((power, index) => (
              <AchievementCard
                key={power.title}
                title={power.title}
                description={power.description}
                icon={power.icon}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            📈 My Wins
          </h2>
          <p className="text-white/80 text-center mb-12">Key Achievements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            😊 Personality Fit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalityTraits.map((trait, index) => (
              <AchievementCard
                key={trait.title}
                title={trait.title}
                description={trait.description}
                icon={trait.icon}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📩 Let's Connect!
          </h2>
          <p className="text-xl text-white/80 mb-8">
            "I'm excited to bring my skills and enthusiasm to your team. Let's build something amazing together!"
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ContactButton
              href="https://www.linkedin.com/in/mariya-babu-854331257/"
              icon="🔗"
              label="LinkedIn"
            />
            <ContactButton
              href="mailto:mariyababuit@mail.com"
              icon="📧"
              label="Email"
            />
            <ContactButton
              href="https://github.com/Mariyababu06"
              icon="💻"
              label="GitHub"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-white/80 mb-6">
              Boosted model accuracy by 30% at previous roles. Fast learner, team player, and always curious to improve.
            </p>
            <a
              href="mailto:mariyababuit@mail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
