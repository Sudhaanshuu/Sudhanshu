
import React from 'react';
import { Github, Linkedin, Code, CodeSquare } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
    <Icon size={20} />
    {children}
  </a>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-light-bg pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <p className="text-lg text-primary mb-2">Hello There!</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
              Hi, I'm <span className="text-secondary">Sudhanshu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-2">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Passionate about creating innovative solutions with modern technologies. Specializing in React, Node.js, and Machine Learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
               <SocialLink href="https://github.com/sudhaanshuu" icon={Github}>GitHub</SocialLink>
               <SocialLink href="https://www.linkedin.com/in/sudhanshuu/" icon={Linkedin}>LinkedIn</SocialLink>
               <SocialLink href="https://leetcode.com/u/imsudhanshuu/" icon={Code}>LeetCode</SocialLink>
               <SocialLink href="https://www.geeksforgeeks.org/user/sudhanshuu/" icon={CodeSquare}>GeeksForGeeks</SocialLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
                Download Resume
              </a>
              <a href="#projects" className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                View My Work
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-secondary rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-secondary rounded-full transform -rotate-12"></div>
              <img 
                src="\1758998373826.png" 
                alt="Sudhanshu Kumar"
                className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
