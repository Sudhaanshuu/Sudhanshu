
import React from 'react';
import SectionTitle from './SectionTitle';
import { Award, Code, Users, Briefcase } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
    <div className="bg-light-bg p-6 rounded-lg text-center transform hover:scale-105 hover:shadow-xl transition-all">
        <Icon className="mx-auto text-secondary" size={40} />
        <p className="text-4xl font-bold text-primary mt-3">{value}</p>
        <p className="text-gray-600 mt-1">{label}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle subtitle="About Me" title="Passionate Developer & Problem Solver" />
                        <p className="text-gray-600 mt-6 leading-relaxed">
                            I'm a dedicated Computer Science student with a strong foundation in full-stack development and artificial intelligence. My journey in technology is driven by curiosity and a desire to create meaningful solutions that make a difference.
                        </p>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            With experience in modern web technologies and machine learning, I enjoy tackling complex challenges and turning innovative ideas into reality. I'm always eager to learn new technologies and contribute to impactful projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <StatCard icon={Award} value="30+" label="Hackathons Participated" />
                        <StatCard icon={Code} value="200" label="Global LeetCode Rank" />
                        <StatCard icon={Users} value="9.32" label="Current CGPA" />
                        <StatCard icon={Briefcase} value="5+" label="Major Projects" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
