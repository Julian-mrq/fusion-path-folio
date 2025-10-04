import { Users, Award, Heart } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Finance Club President",
    organization: "University Finance Society",
    description: "Led a team of 30+ members, organizing investment competitions and networking events with industry professionals.",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    organization: "National AI Challenge 2023",
    description: "First place in developing an AI solution for financial fraud detection, competing against 50+ teams nationwide.",
  },
  {
    icon: Heart,
    title: "Volunteer Tutor",
    organization: "Tech for All Initiative",
    description: "Teaching programming and data literacy to underprivileged students, empowering the next generation of tech professionals.",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Extracurricular Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-card shadow-card hover:shadow-hover transition-smooth rounded-lg p-6 border border-border text-center"
              >
                <div className="bg-gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{activity.title}</h3>
                <p className="text-accent font-medium text-sm mb-3">{activity.organization}</p>
                <p className="text-foreground/80 text-sm leading-relaxed">{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
