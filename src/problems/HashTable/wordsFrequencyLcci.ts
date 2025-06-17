export class WordsFrequency {
  map;
  constructor(book: string[]) {
    this.map = new Map<string, number>();
    for (let i = 0; i < book.length; i++) {
      this.map.set(book[i], (this.map.get(book[i]) ?? 0) + 1);
    }
  }

  get(word: string): number {
    return this.map.get(word) ?? 0;
  }
}
