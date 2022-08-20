import { defaultThemeHelper } from "@/themes/default/DefaultTheme";
import {
  CheckboxRenderParam,
  CodeRenderParam,
  HeadRenderParam,
  ImageRenderParam,
  LinkRenderParam,
  ListItemRenderParam,
  ListRenderParam,
  TableCellRenderParam,
  TableRenderParam,
  Theme,
} from "@/themes/theme";
import { Renderer, MarkedOptions } from "marked";
export class WxRenderOptions extends MarkedOptions {
  fonts?: string;
  fontSize?: number;
  theme: Theme = defaultThemeHelper.getTheme();
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
    return defaultThemeHelper.getRenderFunc("code").render(
      {
        text: code,
        language,
        isEscaped,
      } as CodeRenderParam,
      this.wxRenderOptions
    );
  }
  blockquote(quote: string): string | T {
    return defaultThemeHelper.getRenderFunc("blockquote").render(
      {
        text: quote,
      },
      this.wxRenderOptions
    );
  }
  html(html: string): string | T {
    return defaultThemeHelper.getRenderFunc("html").render(
      {
        text: html,
      },
      this.wxRenderOptions
    );
  }
  heading(
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    raw: string,
    slugger: unknown
  ): string | T {
    return defaultThemeHelper
      .getRenderFunc("heading")
      .render(
        { text, level, raw, slugger } as HeadRenderParam,
        this.wxRenderOptions
      );
  }
  hr(): string | T {
    return defaultThemeHelper
      .getRenderFunc("hr")
      .render({}, this.wxRenderOptions);
  }
  list(body: string, ordered: boolean, start: number): string | T {
    return defaultThemeHelper
      .getRenderFunc("list")
      .render(
        { body, ordered, start } as ListRenderParam,
        this.wxRenderOptions
      );
  }
  listitem(text: string, task: boolean, checked: boolean): string | T {
    return defaultThemeHelper
      .getRenderFunc("listitem")
      .render(
        { text, task, checked } as ListItemRenderParam,
        this.wxRenderOptions
      );
  }
  checkbox(checked: boolean): string | T {
    return defaultThemeHelper
      .getRenderFunc("checkbox")
      .render({ checked } as CheckboxRenderParam, this.wxRenderOptions);
  }
  paragraph(text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("paragraph")
      .render({ text }, this.wxRenderOptions);
  }
  table(header: string, body: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("table")
      .render({ header, body } as TableRenderParam, this.wxRenderOptions);
  }
  tablerow(content: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("tablerow")
      .render({ text: content }, this.wxRenderOptions);
  }
  tablecell(
    content: string,
    flags: {
      header: boolean;
      align: "center" | "left" | "right" | null;
    }
  ): string | T {
    return defaultThemeHelper
      .getRenderFunc("tablecell")
      .render({ content, flags } as TableCellRenderParam, this.wxRenderOptions);
  }
  strong(text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("strong")
      .render({ text }, this.wxRenderOptions);
  }
  em(text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("em")
      .render({ text }, this.wxRenderOptions);
  }
  codespan(code: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("codespan")
      .render({ text: code }, this.wxRenderOptions);
  }
  br(): string | T {
    return defaultThemeHelper
      .getRenderFunc("br")
      .render({}, this.wxRenderOptions);
  }
  del(text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("del")
      .render({ text }, this.wxRenderOptions);
  }
  link(href: string | null, title: string | null, text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("link")
      .render({ href, title, text } as LinkRenderParam, this.wxRenderOptions);
  }
  image(href: string | null, title: string | null, text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("image")
      .render({ href, title, text } as ImageRenderParam, this.wxRenderOptions);
  }
  text(text: string): string | T {
    return defaultThemeHelper
      .getRenderFunc("text")
      .render({ text }, this.wxRenderOptions);
  }
}
