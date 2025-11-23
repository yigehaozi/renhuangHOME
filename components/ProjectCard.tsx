import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon;

  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block relative w-full h-full"
    >
      <div className="relative h-full bg-white/60 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 overflow-hidden backdrop-blur-sm">
        
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-transparent to-transparent dark:from-zinc-800/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors flex items-center justify-center w-14 h-14 overflow-hidden">
                {project.iconUrl ? (
                  <img 
                    src={project.iconUrl} 
                    alt={project.name} 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                ) : (
                  <Icon className="w-8 h-8 text-zinc-400 dark:text-zinc-300" />
                )}
              </div>
              <ArrowUpRight className="w-6 h-6 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>

            <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-3 group-hover:text-black dark:group-hover:text-zinc-100 transition-colors font-serif">
              {project.name}
            </h3>
            
            <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="border-t border-zinc-100 dark:border-zinc-800/50 pt-6 mb-6">
              <ul className="space-y-3">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-zinc-400 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-500 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800/50 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-all">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;