import React from 'react';
import { Project } from '../types/project';
import { URLList } from './URLList';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-navy-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="text-sm text-navy-300">{project.description}</p>
        </div>
      </div>
      
      <div className="border-t border-navy-700">
        <URLList urls={project.urls} />
      </div>
    </div>
  );
}