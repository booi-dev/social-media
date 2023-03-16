type ReTweetType = {
  byUid: string;
  reTweetTid: string;
};

type ReplyType = {
  byUid: string;
  replyTid: string;
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
  reTweets: ReTweetType[];
  replies: ReplyType[];
  tweetAction?: TweetActionType;
};

// twitter type.
// seperate tweets collection for each accounts.
// createBy: reference to the id of the twitter
// tweetKind - 'retweet', 'reply', 'thread',
//
