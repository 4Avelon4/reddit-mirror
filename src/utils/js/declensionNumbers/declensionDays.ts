import declensionNumbers from './declensionNumbers';

export default function declensionDays(number: number) {
  const words: string[] = ['день', 'дня', 'дней'];

  return declensionNumbers(number, words);
}
