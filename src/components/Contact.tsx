import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Let's Connect</h2>
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto text-justify">
          Always open to discussing new opportunities or just connecting 
          with professionals of corporate finance!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card shadow-card rounded-lg p-6 border border-border">
            <Mail className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
            <a href="mailto:john.anderson@email.com" className="text-accent hover:underline">
              julmarques.jm@gmail.com
            </a>
          </div>
          
          <div className="bg-card shadow-card rounded-lg p-6 border border-border">
            <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-primary">Location</h3>
            <p className="text-foreground/80">Paris, France</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://fr.linkedin.com/in/julian-marques" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5 group-hover:text-accent transition-smooth" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://github.com/Julian-mrq" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:text-accent transition-smooth" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
