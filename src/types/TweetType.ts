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
  likeBy: string[];
  retweeetBy: string[];
  replyBy: string[];
  tweetKind?: TweetKind;

  [key: string]: string | number | string[] | TweetKind | undefined;
};

// twitter type.
// seperate tweets collection for each accounts.
// createBy: reference to the id of the twitter
// tweetKind - 'retweet', 'reply', 'thread',
//
