import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { ListItemRenderParam, RenderFunc, Theme } from "../theme";

export class ListItemRenderFunc extends RenderFunc {
  render(
    param: ListItemRenderParam,
    wxRenderOptions?: WxRenderOptions
  ): string {
    return `<span style="${super.style(
      "listitem",
      wxRenderOptions?.theme
    )}"><span style="margin-right: 10px;"><%s/></span>${param.text}</span>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "listitem";
  }
}
