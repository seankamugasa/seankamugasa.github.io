import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Education = () => {
  const degrees = [
    {
      degree: "MSc in Data Science",
      institution: "MAHE, India",
      period: "Nov 2022 - June 2025",
      note: "Scholarship",
    },
    {
      degree: "BSc - Information Technology",
      institution: "Uganda Christian University, Mukono",
      period: "Sept 2015 - Dec 2020",
    },
    {
      degree: "Elements of Artificial Intelligence",
      institution: "University of Helsinki, Finland",
      period: "2020",
      note: "Scholarship",
    },
  ];

  const badges = [
    "Data Analysis Using Python",
    "Data Visualization Using Python",
    "Scrum Foundation Professional Certificate - SFPC",
    "Machine Learning with Python",
    "Enterprise Design Thinking Practitioner",
    "Applied Data Science with Python",
  ];

  const certifications = [
    { name: "Business Analyst Career Track", url: "https://learn.365datascience.com/certificates/DD-2FD26DF491/" },
    { name: "Advanced Microsoft Excel", url: "https://learn.365datascience.com/certificates/CC-FC9D2D8102/" },
    { name: "Data Analysis", url: "https://learn.365datascience.com/certificates/CC-198BB5CEB4/" },
    { name: "Python Programmer Bootcamp", url: "https://learn.365datascience.com/certificates/CC-303FFBD4A3/" },
    { name: "Microsoft Power BI", url: "https://www.udemy.com/certificate/UC-e5a480ad-cb6f-497b-aaa0-a68015b12ef2/" },
    { name: "SQL", url: "https://learn.365datascience.com/certificates/CC-D722E8E8E9/" },
    { name: "Generative A.I", url: "https://www.linkedin.com/learning/certificates/eb4067bec0536f1faa0bfa91ad3c7bddc64e3c2b99e676ce50736bbb2739dffc" },
  ];

  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Education & <span className="glow-text">Credentials</span>
          </h2>

          {/* Degrees */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              University Education
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {degrees.map((edu, index) => (
                <div key={index} className="glass-card p-6 hover-glow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-sm text-muted-foreground mb-2">{edu.period}</div>
                  <h4 className="text-lg font-bold mb-2 text-primary">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  {edu.note && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {edu.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Data Analytical Badges
            </h3>
            <div className="glass-card p-8 hover-glow">
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-lg font-medium hover:bg-primary/20 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <a href="https://www.credly.com/users/sean_kamugasa/badges" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View All Badges
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Data Science Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 hover-glow flex items-center justify-between group animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium">{cert.name}</span>
                  <ExternalLink size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
