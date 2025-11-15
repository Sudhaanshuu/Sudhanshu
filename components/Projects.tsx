import React from 'react';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

const featuredProjects = [
    {
        title: "Arogyam Kiosk",
        description: "Comprehensive AI/ML-based healthcare website featuring five specialized disease prediction models and an intelligent NLP chatbot.",
        tags: ["React", "Python", "TensorFlow", "NLP", "Flask", "MongoDB"],
        link: "https://github.com/Sudhaanshuu/Arogyam",
        image: "/p1.png"
    },
    {
        title: "Anti-Ragging System",
        description: "Advanced machine learning model designed to identify and mitigate ragging incidents in educational institutions.",
        tags: ["Python", "Scikit-learn", "Pandas", "Flask", "SQLite"],
        link: "https://github.com/Sudhaanshuu/CollegeWellbeing-SupportSystem",
        image: "/p3.png"
    },
    {
        title: "Job Role Prediction",
        description: "Intelligent application that analyzes user skills, experience, and preferences to predict suitable job roles.",
        tags: ["React", "Python", "MySQL", "Scikit-learn", "Node.js"],
        link: "https://github.com/Sudhaanshuu/Placement_Help",
        image: "/p2.png"
    }
];

const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="aspect-video bg-gray-200">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="bg-secondary/20 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 text-primary font-semibold inline-flex items-center gap-2 group-hover:text-secondary transition-colors"
            >
                View Code <ExternalLink size={18} />
            </a>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 lg:py-28 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="My Portfolio" title="Featured Projects" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
