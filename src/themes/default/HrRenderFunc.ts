import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, RenderParam, Theme } from "../theme";

export class HrRenderFunc extends RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<hr style="${super.style(
      "hr",
      wxRenderOptions?.themeHelper.getTheme()
    )}">`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "hr";
  }
}
