import { h } from "../../node_modules/snabbdom/build/h";
import { LinkProps } from "../@types/LinkType";
import { normalizeStyleAttr } from "../helpers/string";

export const Link = ({
  type,
  id,
  className,
  href,
  target,
  download,
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
}: LinkProps) => {
    
    customProps.target = target;
    customProps.download = download;

  return h(
    "a",
    {
      attrs: {
        id,
        class: className,
        href,
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