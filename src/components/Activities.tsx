const activities = [
  {
    title: "Finance Club President",
    organization: "University Finance Society",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop",
    period: "2023 - 2024",
    description: "Led a team of 30+ members, organizing investment competitions and networking events with industry professionals.",
    skills: ["Leadership", "Event Planning", "Networking", "Public Speaking"],
  },
  {
    title: "Hackathon Winner",
    organization: "National AI Challenge 2023",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop",
    period: "2023",
    description: "First place in developing an AI solution for financial fraud detection, competing against 50+ teams nationwide.",
    skills: ["AI/ML", "Team Collaboration", "Problem Solving", "Innovation"],
  },
  {
    title: "Volunteer Tutor",
    organization: "Tech for All Initiative",
    logo: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=100&h=100&fit=crop",
    period: "2022 - Present",
    description: "Teaching programming and data literacy to underprivileged students, empowering the next generation of tech professionals.",
    skills: ["Mentoring", "Teaching", "Community Service", "Python"],
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
                {activity.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
