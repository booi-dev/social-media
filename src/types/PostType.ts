// import { HashTagType } from "./HashtagType";

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
  hashtags: { tagId: string; tagName: string }[];
  likes: string[];
  reposts: ActionType[];
  replies: ActionType[];
  mentions: ActionType[];
  postType: PostTypeType;
};
