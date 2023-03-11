import {
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
  format,
} from "date-fns";

function getTimeElapse(timespan: number) {
  let elapse: string;

  const timeElapseInHour = differenceInHours(new Date(), new Date(timespan));
  const timeElapseInMin = differenceInMinutes(new Date(), new Date(timespan));
  const timeElapseInSeconds = differenceInSeconds(
    new Date(),
    new Date(timespan)
  );

  if (timeElapseInHour >= 24) elapse = format(timespan, "d-MMM");
  else if (timeElapseInHour >= 1) elapse = `${timeElapseInHour}h`;
  else if (timeElapseInMin >= 1) elapse = `${timeElapseInMin}m`;
  else elapse = `${timeElapseInSeconds}s`;

  return elapse;
}

export default getTimeElapse;
