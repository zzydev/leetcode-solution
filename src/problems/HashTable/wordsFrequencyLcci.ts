export class WordsFrequency {
  map;
  constructor(book: string[]) {
    this.map = new Map<string, number>();
    for (const word of book) {
      this.map.set(word, (this.map.get(word) ?? 0) + 1);
    }
  }

  get(word: string): number {
    return this.map.get(word) ?? 0;
  }
}
