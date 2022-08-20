import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, RenderParam, Theme } from "../theme";

export class StrongRenderFunc extends RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<strong style="${super.style("strong", wxRenderOptions?.theme)}">${
      param.text
    }</strong>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "strong";
  }
}
