// type ReTweetType = {
//   byUid: string;
//   reTweetTid: string;
// };

type ActionType = {
  byUid: string;
  tweetId: string;
};

type TweetActionType = {
  action: "normal" | "reply" | "retweet" | "mention";
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
  tweetAction?: TweetActionType;
};

// twitter type.
// seperate tweets collection for each accounts.
// createBy: reference to the id of the twitter
// tweetKind - 'retweet', 'reply', 'thread',
//
