 import { h } from "../../node_modules/snabbdom/build/h";
import { TextProps } from "../@types/TextType";
import { normalizeStyleAttr } from "../helpers/string";

export const Text = ({
  type,
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
}: TextProps) => {
  return h(
    type,
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