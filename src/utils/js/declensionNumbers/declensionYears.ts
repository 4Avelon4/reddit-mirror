import declensionNumbers from './declensionNumbers';

export default function declensionYear(number: number) {
  const words: string[] = ['год', 'года', 'лет'];

  return declensionNumbers(number, words);
}