import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { CodeRenderParam, RenderFunc, Theme } from "../theme";

export class CodeSpanRenderFunc extends RenderFunc {
  render(param: CodeRenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<code style="${super.style("paragraph", wxRenderOptions?.theme)}">${
      param.text
    }</code>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "codespan";
  }
}
