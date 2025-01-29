import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
      </nav>
      <div className="dashboard-content">
        <h1>Pinky's Diary</h1>
        <div className="dashboard-options">
          <div className="dashboard-card" onClick={() => navigate('/folders')}>
            <h2>Folders</h2>
            <p>Access and manage your files</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/todo')}>
            <h2>Todo List</h2>
            <p>Manage your tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 