import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { ProjectsPage } from './pages/ProjectsPage';
import { URLsPage } from './pages/URLsPage';
import { AlertsPage } from './pages/AlertsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-navy-900">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/urls" element={<URLsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
