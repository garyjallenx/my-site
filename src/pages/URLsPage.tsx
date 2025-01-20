import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { URLMetricsCard } from '../components/urls/URLMetricsCard';
import { URLWithMetrics } from '../types/url-metrics';
import { StatusBadge } from '../components/StatusBadge';

// Sample data with metrics
const sampleURLs: URLWithMetrics[] = [
  {
    url: 'https://api.shop.example.com',
    isOnline: true,
    responseTime: 245,
    uptime: 99.98,
    lastChecked: new Date(),
    metrics: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
      responseTime: Math.floor(200 + Math.random() * 100),
    })),
  },
  {
    url: 'https://auth.shop.example.com',
    isOnline: true,
    responseTime: 189,
    uptime: 99.95,
    lastChecked: new Date(),
    metrics: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
      responseTime: Math.floor(150 + Math.random() * 100),
    })),
  },
  {
    url: 'https://analytics.example.com',
    isOnline: false,
    responseTime: 0,
    uptime: 98.45,
    lastChecked: new Date(),
    metrics: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000).toISOString(),
      responseTime: i < 4 ? 0 : Math.floor(180 + Math.random() * 100),
    })),
  },
];

export function URLsPage() {
  const [urls, setUrls] = useState(sampleURLs.map(url => ({ ...url, isExpanded: false })));

  const toggleExpand = (index: number) => {
    setUrls(urls.map((url, i) => 
      i === index ? { ...url, isExpanded: !url.isExpanded } : url
    ));
  };

  return (
    <div className="pl-64">
      <div className="max-w-6xl mx-auto py-8 px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">URLs</h1>
          <p className="text-navy-300">
            Monitor response times and status for all endpoints
          </p>
        </header>

        <div className="space-y-4">
          {urls.map((url, index) => (
            <div key={index} className="bg-navy-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-navy-700/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {url.isExpanded ? (
                    <ChevronDown className="text-navy-300" size={20} />
                  ) : (
                    <ChevronRight className="text-navy-300" size={20} />
                  )}
                  <span className="text-white font-medium">{url.url}</span>
                </div>
                <StatusBadge isOnline={url.isOnline} />
              </button>
              
              {url.isExpanded && (
                <div className="p-4 border-t border-navy-700">
                  <URLMetricsCard url={url} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}