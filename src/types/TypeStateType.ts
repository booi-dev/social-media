export type TypeStateType = {
  type: "normal" | "retweet" | "reply" | "mention";
  originalTweetId?: string;
};
