import declensionNumbers from './declensionNumbers';

export default function declensionMinutes(number: number) {
  const words: string[] = ['минуту', 'минуты', 'минут'];

  return declensionNumbers(number, words);
}
