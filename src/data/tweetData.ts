import { nanoid } from "@reduxjs/toolkit";
import { TweetType } from "../redux/slice/tweet";

// this is mock data

const tweetData: TweetType[] = [
  {
    id: nanoid(),
    tweet: "Batman is the greatest superhero",
    createDate: new Date(),
    reply: [],
    retweetCount: 0,
    likeCount: 0,
    likeBy: [],
    retweeetBy: [],
  },
  {
    id: nanoid(),
    tweet: "Spider is the most beloved superhero",
    createDate: new Date(),
    reply: [],
    retweetCount: 0,
    likeCount: 0,
    likeBy: [],
    retweeetBy: [],
  },
  {
    id: nanoid(),
    tweet: "Iron-man is the coolest superhero",
    createDate: new Date(),
    reply: [],
    retweetCount: 0,
    likeCount: 0,
    likeBy: [],
    retweeetBy: [],
  },
  {
    id: nanoid(),
    tweet: "Superman is the strongest superhero",
    createDate: new Date(),
    reply: [],
    retweetCount: 0,
    likeCount: 0,
    likeBy: [],
    retweeetBy: [],
  },
];

const getTweetData = () => tweetData;

export default getTweetData;
