type TweetKind = {
  kind: string;
  reference: string;
};

export type TweetType = {
  tid: string;
  tweet: string;
  timespan: number;
  createBy: string;
  hashtags: string[];
  likeBy: [];
  retweeetBy: [];
  replyBy: [];
  tweetKind?: TweetKind;
};

// twitter type.
// seperate tweets collection for each accounts.
// createBy: reference to the id of the twitter
// tweetKind - 'retweet', 'reply', 'thread',
//
