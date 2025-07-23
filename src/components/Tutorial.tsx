import React, { useState } from 'react';

const Tutorial: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      step: 1,
      title: "Instagram Settings",
      description: "Go to your Instagram profile → ☰ (three lines) → Settings"
    },
    {
      step: 2,
      title: "Accounts Center",
      description: "Click 'Accounts Center' (first button you see)"
    },
    {
      step: 3,
      title: "Download Data",
      description: "Your information and permissions → Download your information"
    },
    {
      step: 4,
      title: "Select Account",
      description: "Download or transfer information → Choose account → Next"
    },
    {
      step: 5,
      title: "Choose Data",
      description: "Some of your information → Connections → ✓ Followers and following → Next"
    },
    {
      step: 6,
      title: "Download Method",
      description: "Click 'Download to device'"
    },
    {
      step: 7,
      title: "Format Settings",
      description: "Date Range: All Time → Format: JSON → Create Files"
    },
    {
      step: 8,
      title: "Download Files",
      description: "Wait, refresh page, download ZIP and extract Followers_1.json & Following.json"
    }
  ];

  return (
    <div className="tutorial">
      <div className="tutorial__header">
        <h3 className="tutorial__title">📱 How to Download Your Instagram Data</h3>
        <button 
          className="tutorial__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide Tutorial' : 'Show Tutorial'}
          <span className={`tutorial__arrow ${isExpanded ? 'tutorial__arrow--up' : ''}`}>
            ▼
          </span>
        </button>
      </div>
      
      {isExpanded && (
        <div className="tutorial__content">
          <div className="tutorial__intro">
            <p>
              Download your Instagram data using their official export feature. 
              Everything is processed locally in your browser - completely private and secure.
            </p>
          </div>
          
          <div className="tutorial__steps">
            {steps.map((step) => (
              <div key={step.step} className="tutorial__step">
                <div className="tutorial__step-number">{step.step}</div>
                <div className="tutorial__step-content">
                  <h4 className="tutorial__step-title">{step.title}</h4>
                  <p className="tutorial__step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="tutorial__note">
            <div className="tutorial__note-icon">🔒</div>
            <div className="tutorial__note-content">
              <strong>Privacy & Security:</strong>
              <ul>
                <li>All processing happens in your browser</li>
                <li>Your data never leaves your device</li>
                <li>Upload both Followers_1.json AND Following.json files</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
