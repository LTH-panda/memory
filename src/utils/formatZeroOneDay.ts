export default function formatZeroOneDay(hour: number, minutes: number) {
  const formatHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formatMins = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formatHour}:${formatMins}`;
}
