import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const hardSkills = [
    { name: "Power BI", level: 99 },
    { name: "Microsoft Excel", level: 98 },
    { name: "Python", level: 95 },
    { name: "SQL", level: 95 },
    { name: "Django", level: 95 },
    { name: "Tableau", level: 93 },
    { name: "ODK", level: 98 },
  ];

  const softSkills = [
    { name: "Project Management", level: 95 },
    { name: "Grants & Proposal Writing", level: 97 },
    { name: "Monitoring & Evaluation", level: 85 },
    { name: "Critical Thinking", level: 98 },
    { name: "Communication", level: 95 },
    { name: "Teamwork", level: 99 },
  ];

  const SkillCard = ({ title, skills }: { title: string; skills: typeof hardSkills }) => (
    <div className="glass-card p-8 hover-glow">
      <h3 className="text-2xl font-bold mb-8 glow-text">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex justify-between mb-2">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-primary font-semibold">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Technical <span className="glow-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Hard Skills" skills={hardSkills} />
            <SkillCard title="Soft Skills" skills={softSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
