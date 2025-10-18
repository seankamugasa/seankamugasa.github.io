import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Project Manager",
      subtitle: "M&E-Systems & Analytics Dept",
      company: "VEROWGDEC",
      location: "HYBRID BASED",
      period: "FEBRUARY 2025 - Present",
      achievements: [
        "Developed M&E frameworks and tools to enhance project monitoring and evaluation processes",
        "Conducted training sessions for staff on M&E best practices and tools",
        "Developed the current website of VEROWGDEC using HTML, CSS and JavaScript",
        "Developed and maintained dashboards and reports to visualize key performance indicators (KPIs) and trends",
        "Maintained donor relations and wrote grant proposals that secured funding for various projects",
      ],
    },
    {
      title: "Senior Business Data Analyst",
      subtitle: "Systems and Analytics Dept. Research, Assessment and Monitoring Unit",
      company: "UNITED NATIONS WFP | UGANDA",
      location: "ON-SITE",
      period: "JULY 2023 - SEPT 2025",
      achievements: [
        "Built and implemented data collection tools (AMS-S04, Social Protection-S05 & SO6) to standardize data collection",
        "Established data quality protocols ensuring compliance with UN WFP's privacy and protection guidelines",
        "Utilized data cleaning techniques (Excel, SQL, Python) to refine datasets from multiple area offices",
        "Trained enumerators and supervised UN missions in hard-to-reach districts during data collection",
        "Automated data monitoring workflows improving efficiency and accessibility",
      ],
    },
    {
      title: "Business Data Analyst Consultant",
      company: "EMBAKASI RANCHING COMPANY | KENYA",
      location: "REMOTELY",
      period: "FEB 2020 - JULY 2023",
      achievements: [
        "Reduced data processing time by 85% for datasets exceeding 10 million records using SQL optimization",
        "Collaborated with data team to translate business needs into actionable Power BI reports",
        "Enabled 20% faster customer insights generation through data cleaning and transformation",
        "Improved data accuracy by 15% through process assessment and remediation",
      ],
    },
    {
      title: "Business Data Analyst Consultant",
      company: "AIDKONEKT DATA | COLORADO | USA",
      location: "REMOTELY",
      period: "APRIL 2022 - FEB 2023",
      achievements: [
        "Analyzed large public USAID datasets using SQL, Python, and Excel to extract insights",
        "Built data-driven reports and dashboards with forecasts and KPIs",
        "Developed data models and performed data profiling to ensure data quality",
        "Improved data accuracy by 15% through process assessment and remediation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="glow-text">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block animate-glow" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content card */}
                  <div className="md:w-1/2 glass-card p-8 hover-glow animate-fade-in">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        {exp.subtitle && (
                          <p className="text-sm text-muted-foreground mb-2">{exp.subtitle}</p>
                        )}
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
