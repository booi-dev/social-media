import {
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
} from "date-fns";

import { TweetType } from "../redux/slice/tweet";

export type EnhancedTweetType = TweetType & {
  createOn: Date;
  timeSince: string;
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

  const decideElapse = () => {
    let decidedElapse: string;

    if (timeElapseInHour >= 1) decidedElapse = `${timeElapseInHour}h`;
    else if (timeElapseInMin >= 1) decidedElapse = `${timeElapseInMin}m`;
    else decidedElapse = `${timeElapseInSeconds}s`;

    return decidedElapse;
  };

  return {
    ...targetTweet,
    createOn: new Date(targetTweet.timespan),
    timeSince: decideElapse(),
  };
};

export default addExtraProperties;
