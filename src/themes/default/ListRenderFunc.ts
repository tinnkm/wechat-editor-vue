import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { ListRenderParam, RenderFunc, Theme } from "../theme";

export class ListRenderFunc extends RenderFunc {
  render(param: ListRenderParam, wxRenderOptions?: WxRenderOptions): string {
    const styleOrdered = super.style(
      "list__ordered",
      wxRenderOptions?.themeHelper.getTheme()
    );
    const style = super.style("list", wxRenderOptions?.themeHelper.getTheme());
    param.text = param.text?.replace(/<\/*p.*?>/g, "");
    const segments = param.text?.split(`<%s/>`) || [];
    if (!param.ordered) {
      param.text = segments.join("•");
      return `<p style="$${style}">${param.text}</p>`;
    }
    param.text = segments[0];
    for (let i = 1; i < segments.length; i++) {
      param.text = param.text + i + "." + segments[i];
    }
    return `<p style="$${styleOrdered}">${param.text}</p>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "list";
  }
}
