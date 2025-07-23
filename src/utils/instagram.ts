import { FollowersData, FollowingData, ProcessedUser, InstagramUser } from '@/types/instagram';

export const validateFollowersData = (data: unknown): data is FollowersData => {
  if (!Array.isArray(data)) return false;
  
  return data.every((item: unknown) => {
    if (typeof item !== 'object' || item === null) return false;
    
    const user = item as Record<string, unknown>;
    return (
      typeof user.title === 'string' &&
      Array.isArray(user.media_list_data) &&
      Array.isArray(user.string_list_data) &&
      user.string_list_data.every((stringData: unknown) => {
        if (typeof stringData !== 'object' || stringData === null) return false;
        const data = stringData as Record<string, unknown>;
        return (
          typeof data.href === 'string' &&
          typeof data.value === 'string' &&
          typeof data.timestamp === 'number'
        );
      })
    );
  });
};

export const validateFollowingData = (data: unknown): data is FollowingData => {
  if (typeof data !== 'object' || data === null) return false;
  
  const followingData = data as Record<string, unknown>;
  if (!Array.isArray(followingData.relationships_following)) return false;
  
  return followingData.relationships_following.every((item: unknown) => {
    if (typeof item !== 'object' || item === null) return false;
    
    const user = item as Record<string, unknown>;
    return (
      typeof user.title === 'string' &&
      Array.isArray(user.media_list_data) &&
      Array.isArray(user.string_list_data) &&
      user.string_list_data.every((stringData: unknown) => {
        if (typeof stringData !== 'object' || stringData === null) return false;
        const data = stringData as Record<string, unknown>;
        return (
          typeof data.href === 'string' &&
          typeof data.value === 'string' &&
          typeof data.timestamp === 'number'
        );
      })
    );
  });
};

export const processUsers = (users: InstagramUser[]): ProcessedUser[] => {
  return users.flatMap(user => 
    user.string_list_data.map(data => ({
      username: data.value,
      href: data.href,
      timestamp: data.timestamp
    }))
  );
};

export const calculateMutuals = (followers: ProcessedUser[], following: ProcessedUser[]): ProcessedUser[] => {
  const followerUsernames = new Set(followers.map(f => f.username));
  return following.filter(user => followerUsernames.has(user.username));
};

export const calculateNonFollowers = (followers: ProcessedUser[], following: ProcessedUser[]): ProcessedUser[] => {
  const followingUsernames = new Set(following.map(f => f.username));
  return followers.filter(user => !followingUsernames.has(user.username));
};

export const calculateNonFollowing = (followers: ProcessedUser[], following: ProcessedUser[]): ProcessedUser[] => {
  const followerUsernames = new Set(followers.map(f => f.username));
  return following.filter(user => !followerUsernames.has(user.username));
};
