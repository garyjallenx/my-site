import React from 'react';
import { ProjectURL } from '../types/project';
import { StatusBadge } from './StatusBadge';

interface URLListProps {
  urls: ProjectURL[];
}

export function URLList({ urls }: URLListProps) {
  return (
    <div className="divide-y divide-navy-700">
      {urls.map((url, index) => (
        <div key={index} className="p-4 flex items-center justify-between">
          <div className="flex-1">
            <a
              href={url.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              {url.url}
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <StatusBadge isOnline={url.isOnline} />
            
            <div className="text-sm">
              <div className="text-navy-300">
                Response: <span className="font-medium text-white">{url.responseTime}ms</span>
              </div>
              <div className="text-navy-300">
                Uptime: <span className="font-medium text-white">{url.uptime.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
