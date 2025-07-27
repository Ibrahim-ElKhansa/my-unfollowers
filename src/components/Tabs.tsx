import React, { FC } from "react";
import { TabType } from "@/types/instagram";

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  counts: {
    followers: number;
    following: number;
    mutuals: number;
    nonFollowers: number;
    nonFollowing: number;
  };
}

const Tabs: FC<TabsProps> = ({ activeTab, onTabChange, counts }) => {
  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: "followers", label: "Followers", count: counts.followers },
    { id: "following", label: "Following", count: counts.following },
    { id: "mutuals", label: "Mutuals", count: counts.mutuals },
    { id: "non-followers", label: "You Don't Follow Back", count: counts.nonFollowers },
    { id: "non-following", label: "Don't Follow Back", count: counts.nonFollowing },
  ];

  return (
    <nav className="tabs" role="tablist" aria-label="Data categories">
      <div className="tabs__container">
        {tabs.map((tab) => (
          <button 
            key={tab.id} 
            className={`tabs__tab ${activeTab === tab.id ? "tabs__tab--active" : ""}`} 
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            <span className="tabs__label">{tab.label}</span>
            <span className="tabs__count">({tab.count})</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Tabs;
