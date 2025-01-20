import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export function MetricsCard({ icon: Icon, label, value, trend, trendValue }: MetricsCardProps) {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-navy-700 flex items-center justify-center text-navy-300">
          <Icon size={18} />
        </div>
        <span className="text-navy-300">{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>
        {trend && (
          <span className={`text-sm ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {trendValue}
          </span>
        )}
      </div>
    </div>
  );
}