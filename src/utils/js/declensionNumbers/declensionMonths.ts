import declensionNumbers from './declensionNumbers';

export default function declensionMonth(number: number) {
  const words: string[] = ['месяц', 'месяца', 'месяцев'];

  return declensionNumbers(number, words);
}