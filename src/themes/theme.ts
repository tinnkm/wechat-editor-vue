import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { CSSProperties } from "vue";
export interface Theme {
  code: CSSProperties;
  blockquote: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  h6: CSSProperties;
  hr: CSSProperties;
  list: CSSProperties;
  listitem: CSSProperties;
  checkbox: CSSProperties;
  paragraph: CSSProperties;
  table: CSSProperties;
  tablerow: CSSProperties;
  tablecell: CSSProperties;
  strong: CSSProperties;
  em: CSSProperties;
  codespan: CSSProperties;
  br: CSSProperties;
  del: CSSProperties;
  link: CSSProperties;
  image: CSSProperties;
  text: CSSProperties;
  [key: string]: CSSProperties;
}

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

export interface ImageRenderParam extends RenderParam {
  href: string | null;
  title: string | null;
}
export interface RenderFunc {
  render(text: RenderParam, wxRenderOptions?: WxRenderOptions): string;
  supported(tags: keyof Theme): boolean;
}

export interface ThemeRender {
  theme: Theme;
  renders: Array<RenderFunc>;
}
