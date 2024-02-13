import { h } from "../../node_modules/snabbdom/build/h";
import { ListItemProps, ListProps } from "../@types/ListType";
import { normalizeStyleAttr } from "../helpers/string";

export const List = ({
  type,
  format,
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
}: ListProps) => {
  return h(
    type ? type : "ul",
    {
      attrs: {
        id,
        class: className,
        type: format,
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




export const ListItem = ({
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
  }: ListItemProps) => {
    return h(
      "li",
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
  
  