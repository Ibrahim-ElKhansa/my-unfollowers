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
    <section className="user-list" aria-labelledby="user-list-title">
      <header className="user-list__header">
        <h2 id="user-list-title" className="user-list__title">{title}</h2>
        <span className="user-list__count">{visibleUsers.length} users</span>
      </header>
      
      {visibleUsers.length === 0 ? (
        <div className="user-list__empty">
          <p>No users to display</p>
        </div>
      ) : (
        <ul className="user-list__container">
          {visibleUsers.map((user) => (
            <li key={user.username} className="user-list__item">
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
                <time className="user-list__date" dateTime={new Date(user.timestamp * 1000).toISOString()}>
                  {formatDate(user.timestamp)}
                </time>
              </div>
              <button
                className="user-list__hide-btn"
                onClick={() => onHideUser(user.username)}
                title="Hide from list"
                aria-label={`Hide ${user.username} from list`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserList;
