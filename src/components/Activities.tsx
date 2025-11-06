
const activities = [
  {
    title: "Head of Business Developers - Junior Entreprise",
    organization: "Junior Conseil UTT",
    logo: "src/assets/jcutt.jpg",
    period: "2021 - 2023",
    description: "Managed a team of 6 members, created business strategies, and performed KPI analysis and reporting that boosted client acquisition by 50% over a year. Conducted market research, negotiations, budgeting, and KPI creation as Business Manager (2021‑2022) securing contracts worth 5000€.",
    // skills: ["Mentoring", "Teaching", "Community Service", "Python"],

  },
  {
    title: "Finance Club",
    organization: "Wall Str’UTT",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop",
    period: "2020 - 2021",
    description: "Performed macroeconomic and technical analysis, portfolio management and newsletter writing.",
    // skills: ["Leadership", "Event Planning", "Networking", "Public Speaking"],

  },
  {
    title: "Volunteer Firefighter",
    organization: "Brigade de Sapeurs-Pompiers de Paris",
    logo: "src/assets/bspp_logo.png",
    period: "2017 - 2019",
    description: "Trained in first aid, fire and military drills, and volunteer duties in events in the city (organization of marathon, local food bank).",
    // skills: ["AI/ML", "Team Collaboration", "Problem Solving", "Innovation"],

  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Extracurricular Activities</h2>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-card shadow-card hover:shadow-hover transition-smooth rounded-lg p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  {activity.logo && (
                    <img 
                      src={activity.logo} 
                      alt={`${activity.organization} logo`} 
                      className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1">{activity.title}</h3>
                    <p className="text-lg text-accent font-medium">{activity.organization}</p>
                  </div>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">{activity.period}</span>
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed text-justify">{activity.description}</p>
              <div className="flex flex-wrap gap-2">
                {/* {activity.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
