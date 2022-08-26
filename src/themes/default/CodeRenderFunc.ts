import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { CodeRenderParam, RenderFunc, Theme } from "../theme";

export class CodeRenderFunc extends RenderFunc {
  private escapeTest = /[&<>"']/;
  private escapeReplace = /[&<>"']/g;
  private escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  private escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  private escapeReplacements: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  private getEscapeReplacement = (ch: string) => this.escapeReplacements[ch];

  private escape(html: string, encode: boolean) {
    if (encode) {
      if (this.escapeTest.test(html)) {
        return html.replace(this.escapeReplace, this.getEscapeReplacement);
      }
    } else {
      if (this.escapeTestNoEncode.test(html)) {
        return html.replace(
          this.escapeReplaceNoEncode,
          this.getEscapeReplacement
        );
      }
    }

    return html;
  }
  render(param: CodeRenderParam, wxRenderOptions?: WxRenderOptions): string {
    const lang = (param.language || "").match(/\S*/)?.[0] || "";
    if (wxRenderOptions?.highlight) {
      const out = wxRenderOptions.highlight(param.text || "", lang);
      if (out != null && out !== param.text) {
        param.isEscaped = true;
        param.text = out;
      }
    }
    param.text = param.text?.replace(/\n$/, "") + "\n";

    if (!lang) {
      return (
        "<pre><code>" +
        (param.isEscaped ? param.text : this.escape(param.text, true)) +
        "</code></pre>\n"
      );
    }

    return (
      '<pre><code class="hljs language-' +
      this.escape(lang, true) +
      '">' +
      (param.isEscaped ? param.text : this.escape(param.text, true)) +
      "</code></pre>\n"
    );
  }
  supported(tag: keyof Theme): boolean {
    return tag === "code";
  }
}
