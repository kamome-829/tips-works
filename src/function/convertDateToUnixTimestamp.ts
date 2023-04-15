import { Dayjs } from "dayjs";

export const convertDateToUnixTimestamp = (date: Dayjs) => {
  return date.unix();
};
