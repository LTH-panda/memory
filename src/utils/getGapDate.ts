import {sub} from 'date-fns';
import formatZeroOneDay from './formatZeroOneDay';

export default function getGapDate(base: Date, time: number) {
  const atDate = new Date(time);

  const gapToNow = sub(base, {
    years: atDate.getFullYear(),
    months: atDate.getMonth() - 1,
    days: atDate.getDate(),
    hours: atDate.getHours(),
    minutes: atDate.getMinutes(),
    seconds: atDate.getSeconds(),
  });

  const gapHours = gapToNow.getHours();

  if (gapHours < 24)
    return `+${formatZeroOneDay(gapHours, gapToNow.getMinutes())}`;

  return `+${gapToNow.getDate()}일`;
}
