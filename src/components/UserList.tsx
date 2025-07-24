import React from 'react';
import { ProcessedUser } from '@/types/instagram';

interface UserListProps {
  users: ProcessedUser[];
  hiddenUsers: Set<string>;
  onHideUser: (username: string) => void;
  onLinkClick?: (username: string) => void;
  title: string;
}

const UserList: React.FC<UserListProps> = ({ users, hiddenUsers, onHideUser, onLinkClick, title }) => {
  const visibleUsers = users.filter(user => !hiddenUsers.has(user.username));

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="user-list">
      <div className="user-list__header">
        <h2 className="user-list__title">{title}</h2>
        <span className="user-list__count">{visibleUsers.length} users</span>
      </div>
      
      {visibleUsers.length === 0 ? (
        <div className="user-list__empty">
          <p>No users to display</p>
        </div>
      ) : (
        <div className="user-list__container">
          {visibleUsers.map((user) => (
            <div key={user.username} className="user-list__item">
              <div className="user-list__info">
                <a 
                  href={user.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="user-list__username"
                  onClick={() => onLinkClick?.(user.username)}
                >
                  @{user.username}
                </a>
                <span className="user-list__date">
                  {formatDate(user.timestamp)}
                </span>
              </div>
              <button
                className="user-list__hide-btn"
                onClick={() => onHideUser(user.username)}
                title="Hide from list"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
