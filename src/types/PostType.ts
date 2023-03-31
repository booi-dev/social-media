import { HashTagType } from "./HashtagType";

type ActionType = {
  byUid: string;
  postId: string;
};

export type PostTypeType = {
  type: "normal" | "reply" | "repost" | "mention";
  originalPostId?: string | "";
};

export type PostType = {
  pid: string;
  post: string;
  timespan: number;
  createBy: string;
  createAt: Date;
  hashtags: HashTagType[];
  likes: string[];
  reposts: ActionType[];
  replies: ActionType[];
  mentions: ActionType[];
  postType: PostTypeType;
};
