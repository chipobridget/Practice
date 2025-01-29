import React, { useState, useEffect } from 'react';
import './FolderView.css';
import { useNavigate } from 'react-router-dom';

const FolderView = () => {
  const [folders, setFolders] = useState([]);
  const [currentPath, setCurrentPath] = useState('/');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated folder data - replace with your actual API call
    const mockFolders = [
      { id: 1, name: 'Documents', type: 'folder' },
      { id: 2, name: 'Images', type: 'folder' },
      { id: 3, name: 'Downloads', type: 'folder' },
      { id: 4, name: 'readme.txt', type: 'file' }
    ];
    setFolders(mockFolders);
  }, []);

  const handleFolderClick = (folderName) => {
    setCurrentPath(prev => `${prev}${folderName}/`);
    // Here you would typically fetch the contents of the clicked folder
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="folder-container">
      <nav className="dashboard-nav">
        <div className="nav-buttons">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => navigate('/folders')} className="active">Folders</button>
          <button onClick={() => navigate('/todo')}>Todo List</button>
          <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
        </div>
      </nav>
      <div className="folder-header">
        <h2>Folders</h2>
        <div className="current-path">
          
          <span>{currentPath}</span>
        </div>
      </div>
      <div className="folder-grid">
        {folders.map(item => (
          <div
            key={item.id}
            className={`folder-item ${item.type}`}
            onClick={() => item.type === 'folder' && handleFolderClick(item.name)}
          >
            <div className="folder-icon">
              {item.type === 'folder' ? '📁' : '📄'}
            </div>
            <div className="folder-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderView;