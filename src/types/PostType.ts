import { HashTagType } from "./HashtagType";

type ActionType = {
  byUid: string;
  postId: string;
};

type PostTypeType = {
  type: "normal" | "reply" | "repost" | "mention";
  originalPostId?: string | null;
};

export type PostType = {
  pid: string;
  post: string;
  timespan: number;
  createBy: string;
  hashtags: HashTagType[];
  likes: string[];
  reposts: ActionType[];
  replies: ActionType[];
  mentions: ActionType[];
  postType: PostTypeType;
};
