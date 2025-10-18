import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PowerBI = () => {
  const projects = [
    {
      id: "northwind",
      title: "1. Northwind Traders",
      situation: "Northwind Traders executives wanted a top-level KPI dashboard to quickly understand company performance across key areas.",
      tools: ["SQL", "Microsoft Power BI Desktop", "Python", "Excel"],
      iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiY2U4MTBiMjUtZTliZi00MzgxLWEzOTUtMzUwNmFkM2Y3MWFkIiwidCI6ImVkNmYzYTIzLTU1OTEtNDMxMS05MTkyLWU1MTNjMmMzY2Q1NSJ9"
    },
    {
      id: "violence",
      title: "2. Violence Against Women",
      overview: "The UN describes violence against women and girls (VAWG) as one of the most widespread, persistent, and devastating human rights violations. It often goes unreported due to stigma and fear.",
      description: [
        "Forms of VAWG include:",
        "• Intimate partner violence",
        "• Sexual violence and harassment",
        "• Human trafficking",
        "• Female genital mutilation",
        "• Child marriage",
        "",
        "Violence against women continues to hinder equality, peace, and the Sustainable Development Goals."
      ],
      tools: ["SQL", "Microsoft Power BI", "Python", "Excel"],
      iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiNjYxNTJhZmYtYWNlNy00ZWYzLWFkNjMtZjdmOGExYzc2ZjhkIiwidCI6ImVkNmYzYTIzLTU1OTEtNDMxMS05MTkyLWU1MTNjMmMzY2Q1NSJ9&pageName=ReportSection"
    },
    {
      id: "telecom",
      title: "3. Tripple J Telecom — Churn Analysis",
      situation: "Tripple J Telecom faced high customer churn. The engagement focused on identifying high-value customers and churn risks to improve retention.",
      tools: ["SQL", "Microsoft Power BI", "Python", "Excel"],
      iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiYmI3NWEzZGQtZDI2Yi00ZTIxLWJhYmYtNWQwYzE5YTVhZGEwIiwidCI6IjdmMjI2NDcyLTBiMTUtNDNjMy1iZTdkLTdhMjQxMjU5Nzc5MiJ9"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={20} />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Power BI <span className="glow-text">Projects</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              A showcase of advanced data analytics and visualization projects built with Power BI, 
              SQL, Python, and Excel. Each project demonstrates comprehensive business intelligence solutions.
            </p>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  id={project.id}
                  className="glass-card p-8 hover-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                  
                  {project.situation && (
                    <p className="text-lg text-muted-foreground mb-4">
                      <strong className="text-foreground">The situation:</strong> {project.situation}
                    </p>
                  )}

                  {project.overview && (
                    <p className="text-lg text-muted-foreground mb-4">
                      <strong className="text-foreground">Overview:</strong> {project.overview}
                    </p>
                  )}

                  {project.description && (
                    <div className="text-lg text-muted-foreground mb-4 space-y-2">
                      {project.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-lg font-semibold mb-3">Tools used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="px-4 py-2 glass-card text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full overflow-hidden rounded-lg border border-border/50">
                    <iframe
                      title={project.title}
                      width="100%"
                      height="804"
                      src={project.iframeSrc}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerBI;
