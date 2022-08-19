import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { CodeRenderParam, RenderFunc, Theme } from "../theme";

export class CodeRenderFunc implements RenderFunc {
  render(param: CodeRenderParam, wxRenderOptions?: WxRenderOptions): string {
    param.text = param.text?.replace(/</g, "&lt;") || "";
    param.text = param.text?.replace(/>/g, "&gt;");

    const lines = param.text.split("\n");
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
    const lang = param.language || "";
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
  supported(tag: keyof Theme): boolean {
    return tag === "code";
  }
}
