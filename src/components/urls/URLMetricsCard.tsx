import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { URLWithMetrics } from '../../types/url-metrics';

interface URLMetricsCardProps {
  url: URLWithMetrics;
}

export function URLMetricsCard({ url }: URLMetricsCardProps) {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-navy-700 rounded-lg p-4">
          <div className="text-navy-300 text-sm mb-1">Current Response Time</div>
          <div className="text-2xl font-semibold text-white">
            {url.responseTime}ms
          </div>
        </div>
        <div className="bg-navy-700 rounded-lg p-4">
          <div className="text-navy-300 text-sm mb-1">Uptime</div>
          <div className="text-2xl font-semibold text-white">
            {url.uptime.toFixed(2)}%
          </div>
        </div>
        <div className="bg-navy-700 rounded-lg p-4">
          <div className="text-navy-300 text-sm mb-1">Last Checked</div>
          <div className="text-2xl font-semibold text-white">
            {url.lastChecked.toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div className="bg-navy-700 rounded-lg p-4">
        <h4 className="text-white font-medium mb-4">Response Time (Last 24 Hours)</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={url.metrics}>
              <XAxis 
                dataKey="timestamp" 
                tickFormatter={formatTime}
                stroke="#94a3b8"
                fontSize={12}
              />
              <YAxis 
                stroke="#94a3b8"
                fontSize={12}
                unit="ms"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
                labelFormatter={formatTime}
              />
              <Line 
                type="monotone" 
                dataKey="responseTime" 
                stroke="#60a5fa"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}