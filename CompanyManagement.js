import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    periodicity: '',
  });

  const handleAddCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: '',
      location: '',
      linkedIn: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '',
    });
  };

  return (
    <div className="admin-module">
      <h2>Company Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={newCompany.name}
        onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
      />
      {/* Other inputs for company details */}
      <button onClick={handleAddCompany}>Add Company</button>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
