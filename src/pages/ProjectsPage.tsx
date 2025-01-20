import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { MetricsOverview } from '../components/metrics/MetricsOverview';
import { Project } from '../types/project';

// Sample data - replace with your actual data source
const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Main shopping platform with multiple microservices',
    urls: [
      {
        url: 'https://api.shop.example.com',
        isOnline: true,
        responseTime: 245,
        uptime: 99.98,
        lastChecked: new Date(),
      },
      {
        url: 'https://auth.shop.example.com',
        isOnline: true,
        responseTime: 189,
        uptime: 99.95,
        lastChecked: new Date(),
      },
    ],
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    description: 'Real-time analytics and reporting system',
    urls: [
      {
        url: 'https://analytics.example.com',
        isOnline: false,
        responseTime: 0,
        uptime: 98.45,
        lastChecked: new Date(),
      },
    ],
  },
];

export function ProjectsPage() {
  return (
    <div className="pl-64">
      <div className="max-w-6xl mx-auto py-8 px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-navy-300">
            Monitor the status and performance of your project endpoints
          </p>
        </header>

        <MetricsOverview projects={projects} />

        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
