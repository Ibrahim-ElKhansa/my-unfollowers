import React, { useState } from 'react';
import Image from 'next/image';

const Tutorial: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      step: 1,
      title: "Access Instagram Settings",
      description: "Go to Instagram Settings → Accounts Center",
      image: "/tutorial-images/step1.png"
    },
    {
      step: 2,
      title: "Navigate to Information & Permissions",
      description: "Click 'Your information and permissions' → 'Download your information'",
      image: "/tutorial-images/step2.png"
    },
    {
      step: 3,
      title: "Choose Information Type",
      description: "Select 'Some of your information' → Check 'Followers and following' → Next",
      image: "/tutorial-images/step3.png"
    },
    {
      step: 4,
      title: "Configure Download Settings",
      description: "Choose 'Download to device' → Date Range: All time → Format: JSON → Create Files",
      image: "/tutorial-images/step4.png"
    },
    {
      step: 5,
      title: "Download Your Files",
      description: "Wait for processing → Download ZIP → Extract 'followers_1.json' and 'following.json'",
      image: "/tutorial-images/step5.png"
    }
  ];

  return (
    <section className="tutorial" aria-labelledby="tutorial-title">
      <header className="tutorial__header">
        <h3 id="tutorial-title" className="tutorial__title">📱 How to Download Your Instagram Data</h3>
        <button 
          className="tutorial__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="tutorial-content"
        >
          {isExpanded ? 'Hide Tutorial' : 'Show Tutorial'}
          <span className={`tutorial__arrow ${isExpanded ? 'tutorial__arrow--up' : ''}`}>
            ▼
          </span>
        </button>
      </header>
      
      {isExpanded && (
        <div id="tutorial-content" className="tutorial__content">
          <div className="tutorial__intro">
            <p>
              Download your Instagram data using their official export feature. 
              Everything is processed locally in your browser - completely private and secure.
            </p>
          </div>
          
          <ol className="tutorial__steps">
            {steps.map((step) => (
              <li key={step.step} className="tutorial__step">
                <div className="tutorial__step-number">{step.step}</div>
                <article className="tutorial__step-content">
                  <h4 className="tutorial__step-title">{step.title}</h4>
                  <p className="tutorial__step-description">{step.description}</p>
                  {step.image && (
                    <figure className="tutorial__step-image-container">
                      <Image
                        src={step.image}
                        alt={`Step ${step.step}: ${step.title}`}
                        fill
                        className="tutorial__step-image"
                      />
                    </figure>
                  )}
                </article>
              </li>
            ))}
          </ol>
          
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

          <div className="tutorial__references">
            <div className="tutorial__references-content">
              <strong>📋 Connect with the Developer:</strong>
              <div className="tutorial__links">
                <a 
                  href="https://www.instagram.com/noprobbxb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tutorial__link tutorial__link--instagram"
                >
                  📱 Follow me on Instagram @noprobbxb
                </a>
                <a 
                  href="https://www.ibrahimelkhansa.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tutorial__link tutorial__link--portfolio"
                >
                  🚀 Check out my other projects
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tutorial;
