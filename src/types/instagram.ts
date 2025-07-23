export interface StringListData {
  href: string;
  value: string;
  timestamp: number;
}

export interface InstagramUser {
  title: string;
  media_list_data: unknown[];
  string_list_data: StringListData[];
}

export type FollowersData = InstagramUser[];

export interface FollowingData {
  relationships_following: InstagramUser[];
}

export interface ProcessedUser {
  username: string;
  href: string;
  timestamp: number;
}

export type TabType = 'followers' | 'following' | 'mutuals' | 'non-followers' | 'non-following';
