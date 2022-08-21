import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderParam, Theme, RenderFunc } from "../theme";

export class BlockquoteRenderFunc extends RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    const style = super.style(
      "blockquote",
      wxRenderOptions?.themeHelper.getTheme()
    );
    const blockquote__p = super.style(
      "blockquote__p",
      wxRenderOptions?.themeHelper.getTheme()
    );
    param.text = param.text?.replace(/<p.*?>/, `<p style="${blockquote__p}">`);
    return `<blockquote style="${style}">${param.text}</blockquote>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "blockquote";
  }
}
