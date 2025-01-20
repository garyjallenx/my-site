import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderGit2, Link2, User2, Bell } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FolderGit2, label: 'Projects', path: '/' },
  { icon: Link2, label: 'URLs', path: '/urls' },
  { icon: Bell, label: 'Alerts', path: '/alerts' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-navy-900 h-screen fixed left-0 top-0 text-white">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center">
            <User2 size={20} />
          </div>
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-navy-300">Admin</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-navy-700 text-white'
                  : 'text-navy-300 hover:bg-navy-800'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
