import declensionDays from "./declensionNumbers/declensionDays";
import declensionHours from "./declensionNumbers/declensionHours";
import declensionMinutes from "./declensionNumbers/declensionMinutes";
import declensionMonths from "./declensionNumbers/declensionMonths";
import declensionWeeks from "./declensionNumbers/declensionWeeks";
import declensionYears from "./declensionNumbers/declensionYears";

function roundDate(unitTime: number, denominator: number) {
  return Math.ceil(Math.abs(unitTime) / denominator);
}

export function createdPostComponent(date: Date) {
  const now = new Date();

  const seconds = roundDate(now.getTime() - date.getTime(), 1000);
  const minutes = roundDate(seconds, 60);
  const hours = roundDate(minutes, 60);
  const days = roundDate(hours, 24);
  const weeks = roundDate(days, 7);
  const months = roundDate(weeks, 4);
  const years = roundDate(months, 12);

  if (seconds < 60) {
    return `несколько секунд`;
  }

  if (minutes < 60) {
    return `${minutes} ${declensionMinutes(minutes)}`;
  }

  if (hours < 24) {
    return `${hours} ${declensionHours(hours)}`;
  }

  if (days < 7) {
    return `${days} ${declensionDays(days)}`;
  }

  if (weeks < 4) {
    return `${weeks} ${declensionWeeks(weeks)}`;
  }

  if (months < 12) {
    return `${months} ${declensionMonths(months)}`;
  }

  return `${years} ${declensionYears(years)}`;
}