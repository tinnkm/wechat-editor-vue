import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, RenderParam, Theme } from "../theme";

export class ParagraphRenderFunc implements RenderFunc {
  render(param: RenderParam, wxRenderOptions?: WxRenderOptions): string {
    const style = JSON.stringify(wxRenderOptions?.theme.paragraph);
    return `<p style="${style}">${param.text}</p>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "paragraph";
  }
}
