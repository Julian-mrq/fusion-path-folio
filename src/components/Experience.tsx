import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Credit Risk Data Science Intern",
    company: "BNP Paribas CIB",
    logo: "src/assets/bnp_logo.jpg",
    period: "Feb 2025 - Aug 2025",
    description: "Developed predictive models for default predictions in corporate credits. Developed an MVP application for anomaly detection models, increasing outliers detection by 90%. \nCollaborated with cross-functional teams to automate and implement ML solutions in production environments. \nAnalyzed 400k credit data and used NLP for extraction, uncovering +20 important report informations.",
    skills: ["Python", "Machine Learning", "Data analysis", "SQL"],
  },
  {
    title: "Strategy & Operations Intern",
    company: "Pretto",
    logo: "src/assets/pretto_logo.jpg",
    period: "July 2023 - Dec 2023",
    description: "Processed and analyzed data, creating KPIs in Python and BI software (Excel, Datastudio) to improve the company’s performance and strategy. \nRestructured the company database (+10M rows) using SQL. Improved brokerage software by analyzing real-estate market changes.",
    skills: ["Data analysis", "Data visualisation", "Software development"],
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
