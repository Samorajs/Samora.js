import { ViewType, ViewProps } from "../@types/ViewType";
import { h } from "snabbdom/build/h";
import { normalizeStyleAttr } from "../helpers/string";
import { TableColumnProps, TableProps } from "../@types/TableType";

export const Table = ({
  border,
  id,
  className,
  dir,
  lang,
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
  ...customAttrs
}: TableProps) => {
  customAttrs.border = border;

  return h(
   "table",
    {
      attrs: {
        id,
        class: className,
        dir,
        lang,
        ...(style ? { style: normalizeStyleAttr(style) } : {}),
        ...customAttrs,
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



export const TableRow = ({
    border,
    id,
    className,
    dir,
    lang,
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
    ...customAttrs
  }: TableProps) => {
    customAttrs.border = border;
  
    return h(
      "tr",
      {
        attrs: {
          id,
          class: className,
          dir,
          lang,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
          ...customAttrs,
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
  


export const TableColumn = ({
    type,
    border,
    id,
    className,
    dir,
    lang,
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
    ...customAttrs
  }: TableColumnProps) => {
    customAttrs.border = border;
  
    return h(
    type,
      {
        attrs: {
          id,
          class: className,
          dir,
          lang,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
          ...customAttrs,
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
  


export const TableBody = ({
    border,
    id,
    className,
    dir,
    lang,
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
    ...customAttrs
  }: TableProps) => {
    customAttrs.border = border;
  
    return h(
    "tbody",
      {
        attrs: {
          id,
          class: className,
          dir,
          lang,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
          ...customAttrs,
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
  

  export const TableHead = ({
    border,
    id,
    className,
    dir,
    lang,
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
    ...customAttrs
  }: TableProps) => {
    customAttrs.border = border;
  
    return h(
    "thead",
      {
        attrs: {
          id,
          class: className,
          dir,
          lang,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
          ...customAttrs,
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

  export const TableFoot = ({
    border,
    id,
    className,
    dir,
    lang,
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
    ...customAttrs
  }: TableProps) => {
    customAttrs.border = border;
  
    return h(
    "tfoot",
      {
        attrs: {
          id,
          class: className,
          dir,
          lang,
          ...(style ? { style: normalizeStyleAttr(style) } : {}),
          ...customAttrs,
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