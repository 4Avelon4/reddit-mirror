import declensionNumbers from './declensionNumbers';

export default function declensionHours(number: number) {
  const words: string[] = ['час', 'часа', 'часов'];

  return declensionNumbers(number, words);
}
