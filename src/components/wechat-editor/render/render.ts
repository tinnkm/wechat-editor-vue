import { defaultThemeHelper, ThemeHelper } from "@/themes/default/DefaultTheme";
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
} from "@/themes/theme";
import { Renderer, marked } from "marked";
export class WxRenderOptions {
  fonts?: string;
  fontSize?: number;
  themeHelper: ThemeHelper = defaultThemeHelper;
}

export class WxRender<T = never> extends Renderer<T> {
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
    return this.wxRenderOptions.themeHelper.getRenderFunc("code").render(
      {
        text: code,
        language,
        isEscaped,
      } as CodeRenderParam,
      this.wxRenderOptions
    );
  }
  blockquote(quote: string): string | T {
    return this.wxRenderOptions.themeHelper.getRenderFunc("blockquote").render(
      {
        text: quote,
      },
      this.wxRenderOptions
    );
  }
  html(html: string): string | T {
    return this.wxRenderOptions.themeHelper.getRenderFunc("html").render(
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
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("heading")
      .render(
        { text, level, raw, slugger } as HeadRenderParam,
        this.wxRenderOptions
      );
  }
  hr(): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("hr")
      .render({}, this.wxRenderOptions);
  }
  list(body: string, ordered: boolean, start: number): string | T {
    console.log("list 执行");
    console.log(body, ordered, start);
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("list")
      .render(
        { body, ordered, start } as ListRenderParam,
        this.wxRenderOptions
      );
  }
  listitem(text: string, task: boolean, checked: boolean): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("listitem")
      .render(
        { text, task, checked } as ListItemRenderParam,
        this.wxRenderOptions
      );
  }
  checkbox(checked: boolean): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("checkbox")
      .render({ checked } as CheckboxRenderParam, this.wxRenderOptions);
  }
  paragraph(text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("paragraph")
      .render({ text }, this.wxRenderOptions);
  }
  table(header: string, body: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("table")
      .render({ header, body } as TableRenderParam, this.wxRenderOptions);
  }
  tablerow(content: string): string | T {
    return this.wxRenderOptions.themeHelper
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
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("tablecell")
      .render({ content, flags } as TableCellRenderParam, this.wxRenderOptions);
  }
  strong(text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("strong")
      .render({ text }, this.wxRenderOptions);
  }
  em(text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("em")
      .render({ text }, this.wxRenderOptions);
  }
  codespan(code: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("codespan")
      .render({ text: code }, this.wxRenderOptions);
  }
  br(): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("br")
      .render({}, this.wxRenderOptions);
  }
  del(text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("del")
      .render({ text }, this.wxRenderOptions);
  }
  link(href: string | null, title: string | null, text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("link")
      .render({ href, title, text } as LinkRenderParam, this.wxRenderOptions);
  }
  image(href: string | null, title: string | null, text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("image")
      .render({ href, title, text } as ImageRenderParam, this.wxRenderOptions);
  }
  text(text: string): string | T {
    return this.wxRenderOptions.themeHelper
      .getRenderFunc("text")
      .render({ text }, this.wxRenderOptions);
  }
}
