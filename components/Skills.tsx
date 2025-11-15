import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Server, Database, BrainCircuit, Wrench, Cloud } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Development",
    icon: Server,
    skills: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "Express.js"],
  },
  {
    category: "Database & Backend",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "REST APIs", "GraphQL"],
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "Scikit-learn"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Docker", "Linux", "VS Code", "Postman"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Netlify", "GitHub Actions", "CI/CD"],
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My Expertise" title="Skills & Technologies" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map(({ category, icon: Icon, skills }) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <Icon className="text-secondary" size={24} />
                {category}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;