interface ExperienceCardProps {
  title: string;
  company: string;
  logo?: string;
  period: string;
  description: string;
  skills: string[];
}

const ExperienceCard = ({ title, company, logo, period, description, skills }: ExperienceCardProps) => {
  return (
    <div className="bg-card shadow-card hover:shadow-hover transition-smooth rounded-lg p-6 border border-border">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start gap-4"> {/* Ajouter flex et gap */}
          {logo && ( // Ajouter cette section
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-12 h-12 object-contain rounded-lg"
            />
          )}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-1">{title}</h3>
            <p className="text-lg text-accent font-medium">{company}</p>
          </div>
        </div>

        <span className="text-muted-foreground mt-2 md:mt-0">{period}</span>
      </div>
      <p className="text-foreground/80 mb-4 leading-relaxed text-justify whitespace-pre-line">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
