import React from 'react';

const Notification = () => {
  const notifications = [
    { company: 'Company A', status: 'Overdue' },
    { company: 'Company B', status: 'Due Today' },
  ];

  return (
    <div className="dashboard">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.company} - {notification.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
