import { Plugin } from "./Plugin";
export interface FootNoteInfo {
  index: number;
  title: string;
  link: string;
}
export class FootNote implements Plugin {
  apply(): void {
    throw new Error("Method not implemented.");
  }
  private index = 0;
  private footnotes = [] as Array<FootNoteInfo>;

  addFootNote(title: string, link: string) {
    this.index += 1;
    this.footnotes.push({ index: this.index, title, link });
    return this.index;
  }
}
