import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero text-white px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          John Anderson
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          Engineering Student | Data Science Specialist | Finance Aspirant
        </p>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto font-light">
          Bridging the worlds of technology and finance to drive data-driven decision making in corporate finance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
