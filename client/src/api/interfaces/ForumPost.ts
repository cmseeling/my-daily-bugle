export interface ForumPost {
  title: string;
  discussionUrl: string;
  targetUrl?: string;
  targetUrlDomain?: string;
  thumbnailUrl?: string;
  commentCount: number;
  score: number;
  engagement: number;
  timePosted: Date;
  tags: string[];
  isCrosspost: boolean;
}
