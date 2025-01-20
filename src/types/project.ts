export interface ProjectURL {
  url: string;
  isOnline: boolean;
  responseTime: number; // in milliseconds
  uptime: number; // percentage
  lastChecked: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  urls: ProjectURL[];
}
