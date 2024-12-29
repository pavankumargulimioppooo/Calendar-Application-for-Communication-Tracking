import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyManagement from './components/Admin/CompanyManagement';
import CommunicationMethods from './components/Admin/CommunicationMethods';
import Dashboard from './components/Dashboard/Notification';
import Calendar from './components/Dashboard/Calendar';
import './styles.css';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/admin/company-management" element={<CompanyManagement />} />
        <Route path="/admin/communication-methods" element={<CommunicationMethods />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  </Router>
);

export default App;
