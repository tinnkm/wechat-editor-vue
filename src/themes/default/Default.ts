import { Theme } from "../theme";

export const DefaultTheme: Theme = {
  common: {
    "text-align": "left",
    color: "#3f3f3f",
    "line-height": "1.75",
    "font-size": "14px",
    "font-family":
      "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  code: {
    "font-size": "80%",
    overflow: "auto",
    color: "#333",
    background: "rgb(247, 247, 247)",
    "border-radius": "2px",
    padding: "10px",
    "line-height": "1.5",
    border: "1px solid rgb(236,236,236)",
    margin: "20px 0",
  },
  blockquote: {
    "font-style": "normal",
    "border-left": "none",
    padding: "1em",
    "border-radius": "4px",
    color: "#FEEEED",
    background: "rgba(27,31,35,.05)",
    margin: "2em 8px",
  },
  blockquote__p: {
    margin: "1.5em 8px",
    "letter-spacing": "0.1em",
    color: "rgb(80, 80, 80)",
    "font-family":
      "PingFangSC-light, PingFangTC-light, Open Sans, Helvetica Neue, sans-serif",
    "font-size": "1em",
    display: "inline",
  },
  h1: {
    "font-size": "1.2em",
    "text-align": "center",
    "font-weight": "bold",
    display: "table",
    margin: "2em auto 1em auto",
    padding: "0 1em",
    "border-bottom": "1px solid rgb(248,57,41)",
  },
  h2: {
    "font-size": "1.2em",
    "text-align": "center",
    "font-weight": "bold",
    display: "table",
    margin: "4em auto 2em auto",
    padding: "0 1em",
    "border-bottom": "1px solid rgb(248,57,41)",
  },
  h3: {
    "font-weight": "bold",
    "font-size": "1.1em",
    margin: "2em 8px 0.75em 0",
    "padding-bottom": ".1em",
    // 'border-bottom': '1px solid #eaecef',
    "padding-left": "8px",
    "border-left": "4px solid rgb(248,57,41)",
  },
  h4: {
    "font-weight": "bold",
    "font-size": "1em",
    margin: "2em 8px 0.5em 8px",
  },
  h5: {
    "font-weight": "bold",
    "font-size": "0.9em",
    margin: "2em 8px 0.25em 8px",
  },
  h6: {
    "font-weight": "bold",
    "font-size": "0.8em",
    margin: "2em 8px 0em 8px",
  },
  hr: {
    "border-style": "solid",
    "border-width": "1px 0 0",
    "border-color": "rgba(0,0,0,0.1)",
    "-webkit-transform-origin": " 0 0",
    "-webkit-transform": "scale(1, 0.5)",
    "transform-origin": "0 0",
    transform: "scale(1, 0.5)",
  },
  list: {
    "margin-left": "0",
    "padding-left": "1em",
    "list-style": "circle",
  },
  list__ordered: {
    "margin-left": "0",
    "padding-left": "1em",
  },
  listitem: {
    "text-indent": "-1em",
    display: "block",
    margin: "0.5em 8px",
  },
  checkbox: {},
  paragraph: {
    margin: "1.5em 8px",
    "letter-spacing": "0.1em",
  },
  table: {
    "border-collapse": "collapse",
    "text-align": "center",
    margin: "1em 8px",
  },
  thead: {
    background: "rgba(0, 0, 0, 0.05)",
  },
  tablerow: {},
  tablecell: {
    "font-size": "80%",
    border: "1px solid #dfdfdf",
    padding: "0.25em 0.5em",
  },
  strong: {
    color: "#ff5f2e",
    "font-weight": "bold",
  },
  em: {
    margin: "1.5em 8px",
    "letter-spacing": "0.1em",
    "font-style": "italic",
  },
  codespan: {},
  br: {},
  del: {},
  link: {
    color: "#009926",
  },
  wx_link: {
    color: "#0080ff",
    "text-decoration": "none",
    "border-bottom": "1px solid #d1e9ff",
  },
  footnote: {
    margin: "0.5em 8px",
    "font-size": "80%",
  },
  image: {
    "border-radius": "4px",
    display: "block",
    margin: "0.5em auto",
    width: "100%",
  },
  figure: {
    margin: "1.5em 8px",
  },
  figcaption: {
    "text-align": "center",
    color: "#888",
    "font-size": "0.8em",
  },
  text: {},
};
