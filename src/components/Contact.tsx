import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work <span className="glow-text">Together</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to transform your data into actionable insights? Let's discuss how my expertise 
            in data analytics, project management, and software engineering can drive your business forward.
          </p>

          <div className="glass-card p-12 hover-glow mb-12 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button size="lg" className="hover-glow text-lg px-8" asChild>
                <a href="mailto:seankamugasa@gmail.com" className="flex items-center gap-2">
                  <Mail size={20} />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <a href="https://docs.google.com/document/d/1k1jqsywW0CYNa7mKPJwUr8Q32csEH9pQ8Sde1it95Bs/edit?usp=sharing" target="_blank" className="flex items-center gap-2">
                  Download Resume
                  <ExternalLink size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex gap-8 justify-center mb-12 animate-fade-in">
            <a
              href="http://www.linkedin.com/in/sean-kamugasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover-glow flex flex-col items-center gap-3 min-w-[120px]"
            >
              <Linkedin size={32} className="text-primary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/seankamugasa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover-glow flex flex-col items-center gap-3 min-w-[120px]"
            >
              <Github size={32} className="text-primary" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="/powerbi"
              className="glass-card p-6 hover-glow flex flex-col items-center gap-3 min-w-[120px]"
            >
              <ExternalLink size={32} className="text-primary" />
              <span className="text-sm font-medium">Live Power BI Projects</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Sean Kamugasa. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
