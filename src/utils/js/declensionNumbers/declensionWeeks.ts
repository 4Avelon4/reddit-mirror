import declensionNumbers from './declensionNumbers';

export default function declensionWeeks(number: number) {
  const words: string[] = ['неделю', 'недели', 'недель'];

  return declensionNumbers(number, words);
}