export function convertToMilliseconds(hour = 0, minute = 0, second = 0) {
  const hourMillisecond = parseInt(hour) * 60 * 60 * 1000;
  const minuteMillisecond = parseInt(minute) * 60 * 1000;
  const secondMillisecond = parseInt(second) * 1000;

  return hourMillisecond + minuteMillisecond + secondMillisecond;
}

export default convertToMilliseconds;
