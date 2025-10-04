import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Data Science Intern",
    company: "Tech Innovations Corp",
    period: "Jun 2024 - Sep 2024",
    description: "Developed predictive models for customer behavior analysis, increasing retention rates by 15%. Collaborated with cross-functional teams to implement ML solutions in production environments.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "A/B Testing"],
  },
  {
    title: "Financial Analyst Intern",
    company: "Investment Partners Ltd",
    period: "Jan 2024 - May 2024",
    description: "Conducted financial modeling and valuation analysis for M&A transactions. Prepared investment memorandums and performed due diligence on potential acquisition targets.",
    skills: ["Financial Modeling", "Excel", "Valuation", "M&A Analysis", "PowerPoint"],
  },
  {
    title: "Research Assistant",
    company: "University AI Lab",
    period: "Sep 2023 - Dec 2023",
    description: "Contributed to research on natural language processing applications in financial sentiment analysis. Published findings in a peer-reviewed conference.",
    skills: ["NLP", "TensorFlow", "Research", "Academic Writing", "Data Analysis"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
