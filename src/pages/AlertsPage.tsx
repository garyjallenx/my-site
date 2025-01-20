import React, { useState } from 'react';
import { Alert } from '../types/alert';
import { AlertCard } from '../components/alerts/AlertCard';

// Sample data
const initialAlerts: Alert[] = [
  {
    id: '1',
    title: 'Service Outage',
    message: 'API endpoint is not responding to requests',
    severity: 'critical',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    url: 'https://api.shop.example.com',
    acknowledged: false
  },
  {
    id: '2',
    title: 'High Latency',
    message: 'Response time exceeded 500ms threshold',
    severity: 'high',
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    url: 'https://auth.shop.example.com',
    acknowledged: false
  },
  {
    id: '3',
    title: 'Increased Error Rate',
    message: 'Error rate above 5% in the last 15 minutes',
    severity: 'medium',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    url: 'https://analytics.example.com',
    acknowledged: false
  },
  {
    id: '4',
    title: 'Certificate Expiring Soon',
    message: 'SSL certificate will expire in 14 days',
    severity: 'low',
    timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
    url: 'https://shop.example.com',
    acknowledged: false
  }
];

export function AlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts);
  
  const handleAcknowledge = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, acknowledged: true } : alert
    ));
  };

  const groupedAlerts = alerts.reduce((acc, alert) => {
    if (!acc[alert.severity]) {
      acc[alert.severity] = [];
    }
    acc[alert.severity].push(alert);
    return acc;
  }, {} as Record<string, Alert[]>);

  const severityOrder: Alert['severity'][] = ['critical', 'high', 'medium', 'low'];

  return (
    <div className="pl-64">
      <div className="max-w-6xl mx-auto py-8 px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Alerts</h1>
          <p className="text-navy-300">
            Monitor and manage system alerts by severity
          </p>
        </header>

        <div className="space-y-8">
          {severityOrder.map(severity => {
            const severityAlerts = groupedAlerts[severity] || [];
            if (severityAlerts.length === 0) return null;

            return (
              <div key={severity}>
                <h2 className="text-lg font-medium text-white capitalize mb-4">
                  {severity} Alerts ({severityAlerts.length})
                </h2>
                <div className="space-y-4">
                  {severityAlerts.map(alert => (
                    <AlertCard
                      key={alert.id}
                      alert={alert}
                      onAcknowledge={handleAcknowledge}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
