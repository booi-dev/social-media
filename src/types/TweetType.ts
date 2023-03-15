type ReTweetType = {
  byUid: string;
  tweet: string;
};

type ReplyType = {
  byUid: string;
  tweet: string;
};

type TweetKindType = {
  kind: "normal" | "reply" | "retweet" | "mention";
  referenceTid: string;
};

export type TweetType = {
  tid: string;
  tweet: string;
  timespan: number;
  createBy: string;
  hashtags: string[];
  likes: string[];
  reTweets: ReTweetType[];
  replies: ReplyType[];
  tweetKind?: TweetKindType;
};

// twitter type.
// seperate tweets collection for each accounts.
// createBy: reference to the id of the twitter
// tweetKind - 'retweet', 'reply', 'thread',
//
