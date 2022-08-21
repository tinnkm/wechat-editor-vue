import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, RenderParam, Theme } from "../theme";

export class ParagraphRenderFunc extends RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<p style="${super.style(
      "paragraph",
      wxRenderOptions?.themeHelper.getTheme()
    )}">${param.text}</p>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "paragraph";
  }
}
