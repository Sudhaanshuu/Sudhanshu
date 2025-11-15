
import React from 'react';
import SectionTitle from './SectionTitle';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "Tech Startup",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    points: [
      "Developed responsive web applications using React and Node.js",
      "Implemented RESTful APIs and integrated third-party services",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Optimized application performance resulting in 40% faster load times"
    ]
  },
  {
    role: "AI/ML Research Assistant",
    company: "University Research Lab",
    duration: "Jan 2024 - Present",
    location: "Bhubaneswar, India",
    points: [
      "Researched and implemented machine learning models for healthcare applications",
      "Developed NLP chatbot with 85% accuracy in medical query responses",
      "Published research paper on AI-driven disease prediction systems",
      "Mentored junior students in machine learning concepts"
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Various Projects",
    duration: "Mar 2023 - Present",
    location: "Global",
    points: [
      "Contributed to multiple open-source projects on GitHub",
      "Maintained and developed educational resources for coding interviews",
      "Created tutorials and documentation for beginner developers",
      "Built community around placement preparation resources"
    ]
  }
];

const educationData = [
  { degree: "B.Tech in Computer Science", institution: "C.V. Raman Global University", years: "2022 - 2025", cgpa: "9.28" },
  { degree: "Diploma in Computer Science", institution: "Government Polytechnic Darbhanga", years: "2019 - 2022", cgpa: "8.9/10" }
];

const achievementsData = [
    "Global rank 200 on LeetCode weekly Contest",
    "3rd runner-up in SOH-2022",
    "1st place in Jagran Junior Award (2019)",
    "World Skill State level Finalist in Cloud Computing (2024)",
    "1st place in Block level Chess Contest (2022)",
    "C++ Certification from IIT Bombay"
];

const TimelineItem = ({ children }) => (
    <div className="relative pl-8 sm:pl-12 py-4 border-l-2 border-gray-200">
        <div className="absolute -left-2.5 top-6 w-5 h-5 bg-secondary rounded-full border-4 border-white"></div>
        {children}
    </div>
);


const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Career Path" title="My Journey" />
        <div className="mt-12 grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><Briefcase /> Experience</h3>
            <div>
              {experienceData.map((exp, index) => (
                <TimelineItem key={index}>
                    <h4 className="text-lg font-bold text-primary-dark">{exp.role}</h4>
                    <p className="font-semibold text-primary">{exp.company}</p>
                    <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-1 mt-1">
                        <span className="flex items-center gap-1.5"><Calendar size={14}/> {exp.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14}/> {exp.location}</span>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                        {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </TimelineItem>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><GraduationCap /> Education</h3>
                <div>
                  {educationData.map((edu, index) => (
                    <TimelineItem key={index}>
                        <h4 className="text-lg font-bold text-primary-dark">{edu.degree}</h4>
                        <p className="font-semibold text-primary">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mt-1">{edu.years} | CGPA: {edu.cgpa}</p>
                    </TimelineItem>
                  ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3"><Award /> Key Achievements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {achievementsData.map((ach, i) => <li key={i}>{ach}</li>)}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
