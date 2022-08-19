import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { HeadRenderParam, RenderFunc, Theme } from "../theme";

export class HeadingRenderFunc implements RenderFunc {
  render(param: HeadRenderParam, wxRenderOptions?: WxRenderOptions): string {
    const style = JSON.stringify(wxRenderOptions?.theme["h" + param.level]);
    return `<h${param.level} style="${style}">${param.text}</h${param.level}>`;
  }
  supported(tag: keyof Theme): boolean {
    return (
      tag === "h1" ||
      tag === "h2" ||
      tag === "h3" ||
      tag === "h4" ||
      tag === "h5" ||
      tag === "h6"
    );
  }
}
