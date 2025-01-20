import React from 'react';
import { AlertTriangle, AlertCircle, Bell, Info, CheckCircle2 } from 'lucide-react';
import { Alert, AlertSeverity } from '../../types/alert';

const severityConfig: Record<AlertSeverity, {
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
}> = {
  critical: {
    icon: AlertCircle,
    color: 'text-red-400',
    bgColor: 'bg-red-900/20',
    borderColor: 'border-red-900'
  },
  high: {
    icon: AlertTriangle,
    color: 'text-orange-400',
    bgColor: 'bg-orange-900/20',
    borderColor: 'border-orange-900'
  },
  medium: {
    icon: Bell,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-900/20',
    borderColor: 'border-yellow-900'
  },
  low: {
    icon: Info,
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/20',
    borderColor: 'border-blue-900'
  }
};

interface AlertCardProps {
  alert: Alert;
  onAcknowledge: (id: string) => void;
}

export function AlertCard({ alert, onAcknowledge }: AlertCardProps) {
  const config = severityConfig[alert.severity];
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className={`${config.color} mt-1`}>
          <Icon size={20} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium">{alert.title}</h3>
            <span className="text-sm text-navy-300">
              {alert.timestamp.toLocaleString()}
            </span>
          </div>
          
          <p className="text-navy-300 mt-1">{alert.message}</p>
          
          <div className="mt-3 flex items-center justify-between">
            <a href={alert.url} className="text-blue-400 hover:text-blue-300 text-sm">
              {alert.url}
            </a>
            
            {!alert.acknowledged && (
              <button
                onClick={() => onAcknowledge(alert.id)}
                className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-navy-700 hover:bg-navy-600 text-white"
              >
                <CheckCircle2 size={14} />
                Acknowledge
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
