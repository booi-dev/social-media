export type ActionStateType = {
  state: "normal" | "retweet" | "reply" | "mention";
  actionTweetId?: string;
};
