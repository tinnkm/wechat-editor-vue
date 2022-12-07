import { STYLE_LABELS } from "./Constant";
import juice from "juice";
import { marked } from "marked";
import { defaultThemeHelper, ThemeHelper } from "@/themes/default/DefaultTheme";
import hljs from "highlight.js";
import { WxRender } from "@/components/wechat-editor/render/render";

export const solveHtml = (element: HTMLElement): string => {
  let styles = "";
  STYLE_LABELS.forEach((style) => {
    styles += document.getElementById(style)?.innerText;
  });
  let res = "";
  try {
    res = juice.inlineContent(element.innerHTML, styles, {
      inlinePseudoElements: true,
      preserveImportant: true,
    });
  } catch (e) {
    console.error("请检查 CSS 文件是否编写正确！");
  }

  return res;
};

export const parserMarkdown = (
  source: string,
  themeHelper: ThemeHelper = defaultThemeHelper
) => {
  themeHelper.rendered = true;
  themeHelper.reRender = false;
  return marked(source, {
    renderer: new WxRender({
      themeHelper,
      highlight: (code: string, lang: string) => {
        console.log(hljs.listLanguages());
        return hljs
          .highlight(code, { language: lang }, true)
          .value.replace(/\n/g, "<br/>") // 换行用br表示
          .replace(/\s/g, "&nbsp;") // 用nbsp替换空格
          .replace(/span&nbsp;/g, "span "); // span标签修复;
      },
    }),
  });
};
