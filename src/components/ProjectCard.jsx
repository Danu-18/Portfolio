import React from 'react';
import { Github, PlayCircle } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, imageSrc, githubLink, demoLink }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-8 mb-8">
      
      {/* Left Column: Media */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-700 relative group">
        <img 
          src={imageSrc || "/api/placeholder/600/400"} 
          alt={`${title} Screenshot`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
        
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-600 border border-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mt-auto">
          <a 
            href={githubLink || "#"} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
          >
            <Github size={18} />
            View GitHub Repo
          </a>
          <a 
            href={demoLink || "#"} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-[#2dd4bf] text-[#14b8a6] dark:text-[#2dd4bf] hover:bg-teal-50 dark:hover:bg-teal-950/30 px-5 py-2.5 rounded-lg font-medium transition-colors text-sm"
          >
            <PlayCircle size={18} />
            Watch Video Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
