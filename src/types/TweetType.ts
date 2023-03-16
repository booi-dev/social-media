type ActionType = {
  byUid: string;
  tweetId: string;
};

type TweetTypeType = {
  type: "normal" | "reply" | "retweet" | "mention";
  referenceTid: string | null;
};

export type TweetType = {
  tid: string;
  tweet: string;
  timespan: number;
  createBy: string;
  hashtags: string[];
  likes: string[];
  reTweets: ActionType[];
  replies: ActionType[];
  mentions: ActionType[];
  tweetType?: TweetTypeType;
};
