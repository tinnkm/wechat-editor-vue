import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { ImageRenderParam, RenderFunc, Theme } from "../theme";

export class ImageRenderFunc extends RenderFunc {
  render(param: ImageRenderParam, wxRenderOptions?: WxRenderOptions): string {
    // todo: 图片解析之后自动上传到微信公众号平台，并返回图片链接
    let subText = "";
    if (param.text) {
      subText = `<figcaption style="${super.style(
        "figcaption",
        wxRenderOptions?.themeHelper.getTheme()
      )}"}>${param.text}</figcaption>`;
    }
    const figureStyle = super.style(
      "figure",
      wxRenderOptions?.themeHelper.getTheme()
    );
    const imageStyle = super.style(
      "image",
      wxRenderOptions?.themeHelper.getTheme()
    );
    return `<figure style="${figureStyle}"><img style="${imageStyle}" src="${param.href}" title="${param.title}" alt="${param.text}"/>${subText}</figure>`;
  }
  supported(tag: keyof Theme): boolean {
    return tag === "image";
  }
}
