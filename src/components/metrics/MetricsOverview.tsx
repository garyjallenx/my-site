import React from 'react';
import { Link2, AlertTriangle, XCircle, Activity } from 'lucide-react';
import { MetricsCard } from './MetricsCard';
import { Project } from '../../types/project';

interface MetricsOverviewProps {
  projects: Project[];
}

export function MetricsOverview({ projects }: MetricsOverviewProps) {
  const totalUrls = projects.reduce((acc, project) => acc + project.urls.length, 0);
  const downUrls = projects.reduce(
    (acc, project) => acc + project.urls.filter((url) => !url.isOnline).length,
    0
  );
  const alerts = downUrls; // In a real app, this would come from an alerts system

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <MetricsCard
        icon={Link2}
        label="Total URLs"
        value={totalUrls}
        trend="up"
        trendValue="+2 this week"
      />
      <MetricsCard
        icon={AlertTriangle}
        label="Active Alerts"
        value={alerts}
        trend="up"
        trendValue="+1 from yesterday"
      />
      <MetricsCard
        icon={XCircle}
        label="Down URLs"
        value={downUrls}
        trend="down"
        trendValue="-2 from yesterday"
      />
      <MetricsCard
        icon={Activity}
        label="Avg Response"
        value="187ms"
        trend="up"
        trendValue="+12ms"
      />
    </div>
  );
}