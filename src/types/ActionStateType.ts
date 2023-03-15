export type ActionStateType = {
  state: "normal" | "retweet" | "reply" | "mention";
  actionTweetTid?: string;
};
