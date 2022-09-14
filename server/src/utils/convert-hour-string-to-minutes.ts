export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutosAmount = (hours * 60) + minutes;

  return minutosAmount;
}