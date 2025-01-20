import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  isOnline: boolean;
}

export function StatusBadge({ isOnline }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
        isOnline
          ? 'bg-green-900/50 text-green-400 border border-green-700'
          : 'bg-red-900/50 text-red-400 border border-red-700'
      }`}
    >
      {isOnline ? (
        <>
          <CheckCircle2 size={14} />
          <span>Online</span>
        </>
      ) : (
        <>
          <XCircle size={14} />
          <span>Down</span>
        </>
      )}
    </span>
  );
}