export interface ResponseTimeMetric {
  timestamp: string;
  responseTime: number;
}

export interface URLWithMetrics extends ProjectURL {
  metrics: ResponseTimeMetric[];
  isExpanded?: boolean;
}
