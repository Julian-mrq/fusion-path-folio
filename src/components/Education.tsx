import { GraduationCap, Code, TrendingUp } from "lucide-react";

const educationItems = [
  {
    icon: TrendingUp,
    degree: "Master in Finance",
    institution: "Business School of Excellence",
    period: "2024 - Present",
    description: "Specializing in corporate finance, financial markets, and quantitative methods.",
  },
  {
    icon: GraduationCap,
    degree: "Engineering Degree - Data Science",
    institution: "Engineering Institute of Technology",
    period: "2020 - 2024",
    description: "Major in Data Science and Artificial Intelligence with honors. Graduated top 10% of class.",
  },
];

const projects = [
  {
    title: "AI-Powered Trading Algorithm",
    description: "Developed a machine learning model to predict stock price movements using sentiment analysis and technical indicators.",
    technologies: ["Python", "Keras", "Pandas", "API Integration"],
  },
  {
    title: "Customer Churn Prediction System",
    description: "Built an end-to-end ML pipeline to predict customer churn for a telecom company with 89% accuracy.",
    technologies: ["Scikit-learn", "XGBoost", "Flask", "Docker"],
  },
  {
    title: "Financial Dashboard Analytics",
    description: "Created an interactive dashboard for real-time financial data visualization and KPI tracking.",
    technologies: ["React", "D3.js", "PostgreSQL", "REST API"],
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
                      <p className="text-foreground/80">{item.description}</p>
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
            AI & Data Science Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-card shadow-card hover:shadow-hover transition-smooth rounded-lg p-6 border border-border">
                <h4 className="text-lg font-semibold text-primary mb-3">{project.title}</h4>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{project.description}</p>
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
