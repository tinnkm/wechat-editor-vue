import { WxRenderOptions } from "@/components/wechat-editor/render/render";
import { RenderFunc, FootNoteRenderParam, Theme } from "../theme";

export class FootNoteRenderFunc extends RenderFunc {
  render(
    param: FootNoteRenderParam,
    wxRenderOptions?: WxRenderOptions
  ): string {
    const footnoteArray = param.footnotes.map(function (x) {
      if (x.link === x.title) {
        return `<code style="font-size: 90%; opacity: 0.6;">[${x.index}]</code>: <i>${x.title}</i><br/>`;
      }
      return `<code style="font-size: 90%; opacity: 0.6;">[${x.index}]</code> ${x.title}: <i>${x.link}</i><br/>`;
    });
    return `<h3 style="${super.style(
      "h3",
      wxRenderOptions?.themeHelper.getTheme()
    )}">References</h3><p style="${super.style(
      "footnote",
      wxRenderOptions?.themeHelper.getTheme()
    )}">${footnoteArray.join("\n")}</p>`;
  }

  supported(tag: keyof Theme): boolean {
    return tag === "footnote";
  }
}
