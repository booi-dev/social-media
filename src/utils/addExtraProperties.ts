import {
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
  format,
} from "date-fns";

import { TweetType } from "../types";

export type EnhancedTweetType = TweetType & {
  createOn: Date;
  timeElapse: string;
};

const addExtraProperties = (targetTweet: TweetType) => {
  //   console.log(targetTweet);
  const timeElapseInHour = differenceInHours(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const timeElapseInMin = differenceInMinutes(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const timeElapseInSeconds = differenceInSeconds(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const getElapse = () => {
    let elapse: string;
    if (timeElapseInHour >= 24) elapse = format(targetTweet.timespan, "d-MMM");
    else if (timeElapseInHour >= 1) elapse = `${timeElapseInHour}h`;
    else if (timeElapseInMin >= 1) elapse = `${timeElapseInMin}m`;
    else elapse = `${timeElapseInSeconds}s`;

    return elapse;
  };

  return {
    ...targetTweet,
    createOn: new Date(targetTweet.timespan),
    timeElapse: getElapse(),
  };
};

export default addExtraProperties;
