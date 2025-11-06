import { GraduationCap, Code, TrendingUp } from "lucide-react";

const educationItems = [
  {
    icon: TrendingUp,
    degree: "Master in Finance",
    institution: "Université Paris Dauphine - PSL",
    period: "2025 - Present",
    description: "Corporate finance: financial analysis, business valuation, IFRS, private equity. Market finance: capital markets, fixed income markets, derivatives, econometrics.",
  },
  {
    icon: GraduationCap,
    degree: "Engineering Degree",
    institution: "Université de Technologie de Troyes",
    period: "2020 - 2025",
    description: "Integrated preparatory classes: mathematics, physics, computer science. Major in data science: mathematics, machine and deep learning, data analysis, software development.",
  },
];

const projects = [
  {
    title: "Budget management app",
    description: "Created an automatized excel file to manage my budget with VBA.",
    technologies: ["Excel", "VBA"],
  },
  {
    title: "Company valuation",
    description: "Used DFC and multiples methods, gathered data to analyse the valuation of Salesforce.",
    technologies: ["Financial analysis", "Business valuation"],
  },
  {
    title: "Option pricing using Deep Learning",
    description: "Developed Deep Learning models to optimize European option pricing. Preprocessed and analyzed data, creation of a database.",
    technologies: ["Python", "Deep Learning"],
  },
  {
    title: "Portfolio optimization",
    description: "Created a python-based application for portfolio optimization based on Modern Portfolio Theory. Financial data retrieval, calculation of returns, volatility, VaR, and efficient frontier, result visualization.",
    technologies: ["Python"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Education & Projects</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {educationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-card shadow-card rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-primary">{item.degree}</h4>
                        <span className="text-muted-foreground text-sm mt-1 md:mt-0">{item.period}</span>
                      </div>
                      <p className="text-accent font-medium mb-2">{item.institution}</p>
                      <p className="text-foreground/80 text-justify">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-accent" />
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-card shadow-card hover:shadow-hover transition-smooth rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold text-primary mb-3">{project.title}</h4>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
