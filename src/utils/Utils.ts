import axios from "axios";
export const addStyleLabel = (styleLabels: Array<string>) => {
  const add = (name: string) => {
    const style = document.createElement("style");
    style.id = name;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
  };
  styleLabels.forEach((name) => add(name));
};

export const changeTheme = (themeTag: string, theme: string) => {
  axios.get(`./theme/${themeTag}/${theme}.css`).then((res) => {
    replaceStyle(themeTag, res.data);
  });
};

export const replaceStyle = (id: string, css: string) => {
  const style = document.getElementById(id);
  if (style) {
    try {
      style.innerHTML = css;
    } catch (e) {
      console.log(e);
      style.style.cssText = css;
    }
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
  }
};

export const merge = (base: unknown, extend: unknown): unknown => {
  return Object.assign({}, base, extend);
};
