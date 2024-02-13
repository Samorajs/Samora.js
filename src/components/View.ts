import { ViewType, ViewProps } from "../@types/ViewType";
import { h } from "snabbdom/build/h";
import { normalizeStyleAttr } from "../helpers/string";

export const View = ({
  type,
  id,
  className,
  dir,
  lang,
  style,
  xmlLang,
  onclick,
  ondblclick,
  onmousedown,
  onmousemove,
  onmouseout,
  onmouseover,
  onmouseup,
  onkeydown,
  onkeypress,
  onkeyup,
  children,
  ...customAttrs
}: ViewProps) => {

  return h(
    ViewType[type],
    {
      attrs: {
        id,
        class: className,
        dir,
        lang,
        ...(style ? { style: normalizeStyleAttr(style) } : {}),
        "xml:lang": xmlLang,
        ...customAttrs
      },
      on: {
        click: onclick,
        dblclick: ondblclick,
        mousedown: onmousedown,
        mousemove: onmousemove,
        mouseout: onmouseout,
        mouseover: onmouseover,
        mouseup: onmouseup,
        keydown: onkeydown,
        keypress: onkeypress,
        keyup: onkeyup,
      },
    },
    children
  );
};
