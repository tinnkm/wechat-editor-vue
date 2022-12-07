import { RenderFunc, RenderParam, Tag, Theme } from "../theme";
import { BlockquoteRenderFunc } from "./BlockquoteRenderFunc";
import { CodeRenderFunc } from "./CodeRenderFunc";
import { CodeSpanRenderFunc } from "./CodeSpanRenderFunc";
import { DefaultTheme } from "./Default";
import { EmRenderFunc } from "./EmRenderFunc";
import { FootNote } from "./extensions/FootNode";
import { FootNoteRenderFunc } from "./FootNoteRenderFunc";
import { HeadingRenderFunc } from "./HeadingRenderFunc";
import { HrRenderFunc } from "./HrRenderFunc";
import { ImageRenderFunc } from "./ImageRenderFunc";
import { LinkRenderFunc } from "./LinkRenderFunc";
import { ListItemRenderFunc } from "./ListItemRenderFunc";
import { ListRenderFunc } from "./ListRenderFunc";
import { ParagraphRenderFunc } from "./ParagraphRenderFunc";
import { StrongRenderFunc } from "./StrongRenderFunc";
import { TableCellRenderFunc } from "./TableCellRenderFunc";
import { TableRenderFunc } from "./TableRenderFunc";

export class DefaultThemeHelper {
  public readonly theme: Theme = DefaultTheme;
  public static readonly themeName = "default";
  public reRender = false;
  public rendered = false;
  public renderFuncs = [
    new BlockquoteRenderFunc(),
    new TableRenderFunc(),
    new CodeRenderFunc(),
    new ImageRenderFunc(),
    new LinkRenderFunc(),
    new HeadingRenderFunc(),
    new EmRenderFunc(),
    new FootNoteRenderFunc(),
    new ListRenderFunc(),
    new ParagraphRenderFunc(),
    new ListItemRenderFunc(),
    new StrongRenderFunc(),
    new TableCellRenderFunc(),
    new HrRenderFunc(),
    new CodeSpanRenderFunc(),
  ];

  public plugins = [new FootNote()];

  public getRenderFunc(tag: Tag): RenderFunc {
    return (
      this.renderFuncs.find((func) => func.supported(tag)) || {
        render: (param: RenderParam) => param.text || "",
        supported: () => false,
        style: () => "",
      }
    );
  }

  getTheme(): Theme {
    return this.theme;
  }
}

export type ThemeHelper = DefaultThemeHelper;

export const defaultThemeHelper = new DefaultThemeHelper();
