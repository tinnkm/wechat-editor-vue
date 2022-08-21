import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, TableRenderParam, Theme } from "../theme";

export class TableRenderFunc extends RenderFunc {
  render(param: TableRenderParam, wxRenderOptions?: WxRenderOptions): string {
    return `<table style="${super.style(
      "table",
      wxRenderOptions?.themeHelper.getTheme()
    )}"><thead style="${super.style(
      "thead",
      wxRenderOptions?.themeHelper.getTheme()
    )}">${param.header}</thead><tbody>${param.body}</tbody></table>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "table";
  }
}
