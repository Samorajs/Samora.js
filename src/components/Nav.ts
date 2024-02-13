import { h } from "../../node_modules/snabbdom/build/h";
import { NavProps } from "../@types/NavType";
import { normalizeStyleAttr } from "../helpers/string";

export const Nav = ({
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
}: NavProps) => {
  return h(
    "nav",
    {
      attrs: {
        id,
        class: className,
        style: style ? normalizeStyleAttr(style) : "",
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
