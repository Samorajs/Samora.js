import { h } from "../../node_modules/snabbdom/build/h";
import { ButtonProps } from "../@types/ButtonType";
import { normalizeStyleAttr } from "../helpers/string";

export const Button = ({
    id,
    name,
    required,
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
    onhover,
    children,
    ...customAttrs
  }: ButtonProps) => {
    customAttrs = {...customAttrs, name}

    return h(
      "button",
      {
        attrs: {
          id,
          class: className,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
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