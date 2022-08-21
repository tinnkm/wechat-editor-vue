import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { HeadRenderParam, RenderFunc, Theme } from "../theme";

export class HeadingRenderFunc extends RenderFunc {
  render(param: HeadRenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<h${param.level} style="${super.style(
      "h" + param.level,
      wxRenderOptions?.themeHelper.getTheme()
    )}">${param.text}</h${param.level}>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "heading";
  }
}
