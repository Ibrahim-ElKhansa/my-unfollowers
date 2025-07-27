'use client';

import React, { useState, useCallback } from 'react';
import Script from 'next/script';
import { track } from '@vercel/analytics';
import FileInput from '@/components/FileInput';
import Tabs from '@/components/Tabs';
import UserList from '@/components/UserList';
import Tutorial from '@/components/Tutorial';
import Footer from '@/components/Footer';
import { websiteStructuredData } from '@/lib/structured-data';
import { 
  ProcessedUser, 
  TabType 
} from '@/types/instagram';
import { 
  validateFollowersData, 
  validateFollowingData, 
  processUsers, 
  calculateMutuals, 
  calculateNonFollowers, 
  calculateNonFollowing 
} from '@/utils/instagram';

export default function Home() {
  const [followersFile, setFollowersFile] = useState<File | null>(null);
  const [followingFile, setFollowingFile] = useState<File | null>(null);
  const [followersData, setFollowersData] = useState<ProcessedUser[]>([]);
  const [followingData, setFollowingData] = useState<ProcessedUser[]>([]);
  const [isDataValid, setIsDataValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('followers');
  const [hiddenUsersByTab, setHiddenUsersByTab] = useState<Record<TabType, Set<string>>>({
    followers: new Set(),
    following: new Set(),
    mutuals: new Set(),
    'non-followers': new Set(),
    'non-following': new Set()
  });
  const [isFollowersValid, setIsFollowersValid] = useState(true);
  const [isFollowingValid, setIsFollowingValid] = useState(true);
  const [autoDeleteOnClick, setAutoDeleteOnClick] = useState(false);

  const validateAndProcessFiles = useCallback(async () => {
    if (!followersFile || !followingFile) {
      setIsDataValid(false);
      return;
    }

    const errors: string[] = [];
    let processedFollowers: ProcessedUser[] = [];
    let processedFollowing: ProcessedUser[] = [];
    let followersValid = true;
    let followingValid = true;

    try {
      const followersText = await followersFile.text();
      const followersJson = JSON.parse(followersText);
      
      if (!validateFollowersData(followersJson)) {
        errors.push('Followers file does not match the expected format');
        followersValid = false;
      } else {
        processedFollowers = processUsers(followersJson);
      }
    } catch {
      errors.push('Invalid JSON format in followers file');
      followersValid = false;
    }

    try {
      const followingText = await followingFile.text();
      const followingJson = JSON.parse(followingText);
      
      if (!validateFollowingData(followingJson)) {
        errors.push('Following file does not match the expected format');
        followingValid = false;
      } else {
        processedFollowing = processUsers(followingJson.relationships_following);
      }
    } catch {
      errors.push('Invalid JSON format in following file');
      followingValid = false;
    }

    setIsFollowersValid(followersValid);
    setIsFollowingValid(followingValid);
    setValidationErrors(errors);
    
    if (errors.length === 0) {
      setFollowersData(processedFollowers);
      setFollowingData(processedFollowing);
      setIsDataValid(true);
      setHiddenUsersByTab({
        'followers': new Set(),
        'following': new Set(),
        'mutuals': new Set(),
        'non-followers': new Set(),
        'non-following': new Set(),
      });

      track('data_upload_success', {
        timestamp: new Date().toISOString()
      });
    } else {
      setIsDataValid(false);
    }
  }, [followersFile, followingFile]);

  React.useEffect(() => {
    validateAndProcessFiles();
  }, [validateAndProcessFiles]);

  const handleFollowersFileSelect = (file: File | null) => {
    setFollowersFile(file);
  };

  const handleFollowingFileSelect = (file: File | null) => {
    setFollowingFile(file);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleHideUser = (username: string) => {
    setHiddenUsersByTab(prev => ({
      ...prev,
      [activeTab]: new Set([...prev[activeTab], username])
    }));
  };

  const handleLinkClick = (username: string) => {
    track('profile_click', {
      timestamp: new Date().toISOString()
    });

    if (autoDeleteOnClick) {
      handleHideUser(username);
    }
  };

  const mutuals = isDataValid ? calculateMutuals(followersData, followingData) : [];
  const nonFollowers = isDataValid ? calculateNonFollowers(followersData, followingData) : [];
  const nonFollowing = isDataValid ? calculateNonFollowing(followersData, followingData) : [];

  const counts = {
    followers: followersData.length,
    following: followingData.length,
    mutuals: mutuals.length,
    nonFollowers: nonFollowers.length,
    nonFollowing: nonFollowing.length,
  };

  const getCurrentList = (): ProcessedUser[] => {
    switch (activeTab) {
      case 'followers': return followersData;
      case 'following': return followingData;
      case 'mutuals': return mutuals;
      case 'non-followers': return nonFollowers;
      case 'non-following': return nonFollowing;
      default: return [];
    }
  };

  const getTabTitle = (): string => {
    switch (activeTab) {
      case 'followers': return 'Your Followers';
      case 'following': return 'People You Follow';
      case 'mutuals': return 'Mutual Followers';
      case 'non-followers': return 'You Don\'t Follow Back';
      case 'non-following': return 'People Who Don\'t Follow You Back';
      default: return '';
    }
  };

  return (
    <>
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      
      <header className="main-container__title">
        <h1>Instagram Unfollowers Analyzer</h1>
      </header>
      
      <p className="main-container__subtitle">
        Upload your Instagram data exports to analyze your followers and followings. 
        Discover who doesn&apos;t follow you back, mutual connections, and more insights about your Instagram network.
      </p>

      <Tutorial />

      {!isDataValid && (
        <section className="file-inputs" aria-label="File upload section">
          <div className="file-inputs__container">
            <FileInput
              label="Followers JSON"
              placeholder="Upload your followers_1.json file"
              onFileSelect={handleFollowersFileSelect}
              isValid={isFollowersValid}
            />
            
            <FileInput
              label="Following JSON"
              placeholder="Upload your following.json file"
              onFileSelect={handleFollowingFileSelect}
              isValid={isFollowingValid}
            />
          </div>
        </section>
      )}

      {validationErrors.length > 0 && (
        <aside className="validation-errors" role="alert">
          <h3>Validation Errors:</h3>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </aside>
      )}

      {isDataValid && (
        <main>
          <section className="settings" aria-label="User settings">
            <div className="settings__container">
              <h3 className="settings__title">⚙️ Settings</h3>
              <div className="settings__option">
                <label className="settings__checkbox">
                  <input 
                    type="checkbox" 
                    checked={autoDeleteOnClick}
                    onChange={(e) => setAutoDeleteOnClick(e.target.checked)}
                  />
                  <span className="settings__checkbox-custom"></span>
                  <span className="settings__label">Auto-hide users after clicking their profile link</span>
                </label>
                <p className="settings__description">
                  When enabled, users will be automatically hidden from the list after you click on their Instagram profile link.
                </p>
              </div>
              <div className="settings__data-info">
                <p className="settings__data-text">
                  📊 Data loaded successfully! Found {counts.followers} followers and {counts.following} following.
                </p>
                <button 
                  className="settings__reload-btn"
                  onClick={() => {
                    setIsDataValid(false);
                    setFollowersFile(null);
                    setFollowingFile(null);
                    setHiddenUsersByTab({
                      followers: new Set(),
                      following: new Set(),
                      mutuals: new Set(),
                      'non-followers': new Set(),
                      'non-following': new Set()
                    });
                    setValidationErrors([]);
                  }}
                >
                  📁 Load New Files
                </button>
              </div>
            </div>
          </section>

          <Tabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
            counts={counts}
          />
          
          <UserList
            users={getCurrentList()}
            hiddenUsers={hiddenUsersByTab[activeTab]}
            onHideUser={handleHideUser}
            onLinkClick={handleLinkClick}
            title={getTabTitle()}
          />
        </main>
      )}
      
      <Footer />
    </>
  );
}
