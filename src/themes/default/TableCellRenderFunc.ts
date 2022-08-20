import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, TableCellRenderParam, Theme } from "../theme";

export class TableCellRenderFunc extends RenderFunc {
  render(
    param: TableCellRenderParam,
    wxRenderOptions?: WxRenderOptions
  ): string {
    return `<td style="${super.style("tableCell", wxRenderOptions?.theme)}">${
      param.text
    }</td>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "tablecell";
  }
}
