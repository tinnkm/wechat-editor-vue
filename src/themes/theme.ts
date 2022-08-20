import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { keysOf } from "element-plus/es/utils";
import { CSSProperties } from "vue";
import { FootNoteInfo } from "./default/extensions/FootNode";
export interface Theme {
  code: CSSProperties;
  blockquote: CSSProperties;
  blockquote__p: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  h6: CSSProperties;
  hr: CSSProperties;
  list: CSSProperties;
  list__ordered: CSSProperties;
  listitem: CSSProperties;
  checkbox: CSSProperties;
  paragraph: CSSProperties;
  table: CSSProperties;
  thead: CSSProperties;
  tablerow: CSSProperties;
  tablecell: CSSProperties;
  strong: CSSProperties;
  em: CSSProperties;
  codespan: CSSProperties;
  br: CSSProperties;
  del: CSSProperties;
  link: CSSProperties;
  wx_link: CSSProperties;
  footnote: CSSProperties;
  image: CSSProperties;
  figure: CSSProperties;
  figcaption: CSSProperties;
  text: CSSProperties;
  [key: string]: CSSProperties;
}
export type Tag = keyof Theme;

export interface RenderParam {
  text?: string;
}

export interface CodeRenderParam extends RenderParam {
  language: string | undefined;
  isEscaped: boolean;
}

export interface HeadRenderParam extends RenderParam {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  raw: string;
  slugger: unknown;
}

export interface ListRenderParam extends RenderParam {
  ordered: boolean;
  start: number;
}
export interface ListItemRenderParam extends RenderParam {
  task: boolean;
  checked: boolean;
}
export interface CheckboxRenderParam extends RenderParam {
  checked: boolean;
}
export interface TableRenderParam extends RenderParam {
  header: string;
  body: string;
}
export interface TableCellRenderParam extends RenderParam {
  flags: {
    header: boolean;
    align: "center" | "left" | "right" | null;
  };
}

export interface LinkRenderParam extends RenderParam {
  href: string | null;
  title: string | null;
}

export interface FootNodeRenderParam extends RenderParam {
  href: string | null;
  title: string | null;
}

export interface ImageRenderParam extends RenderParam {
  href: string | null;
  title: string | null;
}

export interface FootNoteRenderParam extends RenderParam {
  footnotes: Array<FootNoteInfo>;
}

export abstract class RenderFunc {
  abstract render(text: RenderParam, wxRenderOptions?: WxRenderOptions): string;
  abstract supported(tags: Tag): boolean;
  style(key: Tag, theme: Theme | undefined): string {
    if (!theme) {
      return "";
    }
    return Object.keys(theme[key])
      .map((k) => {
        const t = k as keyof CSSProperties;
        return k + ":" + theme[key][t];
      })
      .join(";");
  }
}

export interface ThemeRender {
  theme: Theme;
  renders: Array<RenderFunc>;
}
