import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, RenderParam, Theme } from "../theme";

export class EmRenderFunc extends RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<span  style="${super.style(
      "em",
      wxRenderOptions?.themeHelper.getTheme()
    )}">${param.text}</span>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "em";
  }
}
