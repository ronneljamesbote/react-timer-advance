function _formatTime(unitOfTime) {
  return unitOfTime < 10
    ? `0${unitOfTime}`.substring(0, 2)
    : unitOfTime.toString().substring(0, 2);
}

export function getTimeFormatted(timeInMilliseconds) {
  // Get hours
  const hours = _formatTime(Math.floor(timeInMilliseconds / (60 * 60 * 1000)));
  const timeHours = timeInMilliseconds % (60 * 60 * 1000);

  // Get minutes
  const minutes = _formatTime(Math.floor(timeHours / (60 * 1000)));
  const timeMinutes = timeHours % (60 * 1000);

  // Get seconds
  const seconds = _formatTime(Math.floor(timeMinutes / 1000));

  // Get milliseconds
  const milliseconds = _formatTime(timeMinutes % 1000);

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export default getTimeFormatted;
