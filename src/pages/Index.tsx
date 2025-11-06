import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Activities />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8 px-6 text-center">
        <p className="text-sm">
          © 2025 Julian Marques. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
