import { h } from "../../node_modules/snabbdom/build/h";
import { FooterProps } from "../@types/FooterType";
import { normalizeStyleAttr } from "../helpers/string";

export const Footer = ({
  id,
  className,
  style,
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
  ...customProps
}: FooterProps) => {
  return h(
    "footer",
    {
      attrs: {
        id,
        class: className,
        ...(style ? { style: normalizeStyleAttr(style) } : {}),
        ...customProps
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
