export default function formatZeroOneDay({
  hour,
  minutes,
  seconds,
}: {
  hour: number;
  minutes: number;
  seconds: number;
}) {
  const formatHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formatMins = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formatHour}:${formatMins}:${formatSeconds}`;
}
