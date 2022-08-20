export interface FootNoteInfo {
  index: number;
  title: string;
  link: string;
}
export class FootNote {
  private index = 0;
  private footnotes = [] as Array<FootNoteInfo>;

  addFootNote(title: string, link: string) {
    this.index += 1;
    this.footnotes.push({ index: this.index, title, link });
    return this.index;
  }
}
