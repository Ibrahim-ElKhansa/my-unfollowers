import React, { useState } from 'react';

const Tutorial: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      step: 1,
      title: "Open Instagram Settings",
      description: "Go to Instagram and click on 'More' with the three horizontal lines icon, then click on 'Settings'."
    },
    {
      step: 2,
      title: "Navigate to Accounts Center",
      description: "Click on the button that says 'Accounts Center'."
    },
    {
      step: 3,
      title: "Access Your Information",
      description: "Click on 'Your information and permissions' then click on 'Download your information'."
    },
    {
      step: 4,
      title: "Download or Transfer Information",
      description: "Click on the button that says 'Download or transfer information'. If you have multiple accounts, choose which account information you want to download (make sure to only choose one) then click on 'Next'."
    },
    {
      step: 5,
      title: "Select Data Types",
      description: "Choose to download 'Some of your information' and then scroll down to the 'Connections' section and click on the check box for 'Followers and following'. Then click 'Next'."
    },
    {
      step: 6,
      title: "Choose Format & Date Range",
      description: "Here you want to choose the Date Range to 'All Time' and then change the format to JSON (this is a very important step otherwise the app won't work). When done click on 'Create Files'."
    },
    {
      step: 7,
      title: "Download Your Files",
      description: "Wait a bit and then refresh the page or leave and come back in. You will now see your pending request is now downloadable and you can extract the two JSON files 'Followers_1.json' and 'Following.json' from the zipped folder."
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
            <div className="tutorial__tip">
              <strong>💡 Important Tip:</strong> You can use this app on mobile, but handling files is easier on desktop, so we advise using a laptop if possible.
            </div>
            <p>
              To analyze your Instagram followers and following, you&apos;ll need to download your data from Instagram. 
              This is completely safe and uses Instagram&apos;s official data export feature. Your data is completely 
              private and secure - everything is processed locally in your browser.
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
                <li>Your data is processed locally in your browser - nothing is uploaded to our servers</li>
                <li>Your personal information never leaves your device</li>
                <li>This tool is completely client-side and respects your privacy</li>
                <li>You&apos;ll receive an email when your data is ready</li>
                <li>Make sure to upload both Followers_1.json AND Following.json files</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
