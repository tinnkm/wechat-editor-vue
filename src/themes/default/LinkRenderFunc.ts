import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { LinkRenderParam, RenderFunc, Theme } from "../theme";

export class LinkRenderFunc extends RenderFunc {
  render(param: LinkRenderParam, wxRenderOptions?: WxRenderOptions): string {
    if (param.href?.indexOf("https://mp.weixin.qq.com") === 0) {
      return `<a href="${param.href}" title="${
        param.title || param.text
      }" style="${super.style(
        "wx_link",
        wxRenderOptions?.themeHelper.getTheme()
      )}">${param.text}</a>`;
    } else if (param.href === param.text) {
      return param.text;
    } else {
      return `<a href="${param.href}" title="${
        param.title || param.text
      }" style="${super.style(
        "link",
        wxRenderOptions?.themeHelper.getTheme()
      )}">${param.text}</a>`;
    }
  }
  supported(tag: keyof Theme): boolean {
    return tag === "link";
  }
}
