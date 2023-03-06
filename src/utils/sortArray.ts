import { TweetType } from "../redux/slice/tweet";

const sortArray = ([...toBeSortArray]: TweetType[]) =>
  toBeSortArray.sort((a, b) => b.timespan - a.timespan);

export default sortArray;
