const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-32 relative pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <br></br><br></br><span className="glow-text"></span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 hover-glow animate-fade-in-left">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                <img 
                  src={new URL("@/assets/sean.png", import.meta.url).href}
                  alt="Sean Kamugasa - Senior Business Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A highly analytical and detail-oriented <span className="text-primary font-semibold">Senior Business Data Analyst</span> with 
                hands-on experience in <span className="text-primary font-semibold">Software Engineering</span> and{" "}
                <span className="text-primary font-semibold">Artificial Intelligence</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced in analyzing complex data sets, developing data models, and creating actionable data visualizations. 
                Skilled with <span className="text-primary font-semibold">SQL, Python, Excel, Tableau, and Microsoft Power BI</span> to 
                extract insights, improve business processes, and support decision-making.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Adept at collaborating with stakeholders and presenting findings to non-technical audiences. Proven track record 
                of delivering enterprise impactful solutions in companies & Organizations such as  <span className="text-primary font-semibold">United Nations</span> and 
                international consultancies.
              </p>

              <div className="flex flex-wrap gap-3 pt-6">
                {["Data Analytics", "Project Management", "AI/ML", "Software Engineering", "Business Intelligence"].map((tag) => (
                  <span key={tag} className="px-4 py-2 glass-card text-sm font-medium hover-glow">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
