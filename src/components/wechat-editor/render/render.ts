import { DefaultTheme } from "@/themes/default/default";
import { Theme } from "@/themes/theme";
import { Renderer, MarkedOptions } from "marked";
export class WxRenderOptions extends MarkedOptions {
  fonts?: string;
  fontSize?: number;
  theme: Theme = DefaultTheme;
}

type Tag = keyof Theme;

interface RenderFunc {
  render(text: string, options?: WxRenderOptions): string;
  supported(tag: Tag): boolean;
}

class WxRender<T = never> extends Renderer<T> {
  private wxRenderOptions: WxRenderOptions;
  constructor(wxRenderOptions: WxRenderOptions) {
    super(wxRenderOptions);
    this.wxRenderOptions = wxRenderOptions;
  }
  private merge(base: unknown, extend: unknown): unknown {
    return Object.assign({}, base, extend);
  }
  setOptions(wxRenderOptions: WxRenderOptions) {
    this.merge(this.wxRenderOptions, wxRenderOptions);
  }
  code(
    code: string,
    language: string | undefined,
    isEscaped: boolean
  ): string | T {
    code = code.replace(/</g, "&lt;");
    code = code.replace(/>/g, "&gt;");

    const lines = code.split("\n");
    const codeLines = [];
    const numbers = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      codeLines.push(
        `<code class="prettyprint"><span class="code-snippet_outer">${
          line || "<br>"
        }</span></code>`
      );
      numbers.push("<li></li>");
    }
    const lang = language || "";
    return (
      `<section class="code-snippet__fix code-snippet__js">` +
      `<ul class="code-snippet__line-index code-snippet__js">${numbers.join(
        ""
      )}</ul>` +
      `<pre class="code-snippet__js" data-lang="${lang}">` +
      codeLines.join("") +
      `</pre></section>`
    );
  }
  blockquote(quote: string): string | T {
    quote = quote.replace(/<p.*?>/, `<p ${getStyles("blockquote_p")}>`);
    return `<blockquote ${getStyles("blockquote")}>${quote}</blockquote>`;
  }
  html(html: string): string | T;
  heading(
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    raw: string,
    slugger: Slugger
  ): string | T;
  hr(): string | T;
  list(
    body: string,
    ordered: boolean,
    start: number
  ): string | T;
  listitem(: 
    text: string,
    task: boolean,
    checked: boolean
  ): string | T;
  checkbox( checked: boolean): string | T;
  paragraph( text: string): string | T;
  table(
    header: string,
    body: string
  ): string | T;
  tablerow(content: string): string | T;
  tablecell(
    content: string,
    flags: {
      header: boolean;
      align: "center" | "left" | "right" | null;
    }
  ): string | T;
  strong( text: string): string | T;
  em( text: string): string | T;
  codespan( code: string): string | T;
  br(): string | T;
  del( text: string): string | T;
  link(
    
    href: string | null,
    title: string | null,
    text: string
  ): string | T;
  image(
    
    href: string | null,
    title: string | null,
    text: string
  ): string | T;
  text( text: string): string | T;
}
