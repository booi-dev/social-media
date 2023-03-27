export type TypeStateType = {
  type: "normal" | "repost" | "reply" | "mention";
  originalPostId?: string;
};
