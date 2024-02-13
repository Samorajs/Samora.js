import { ViewType, ViewProps } from "../@types/ViewType";
import { h } from "../../node_modules/snabbdom/build/h";
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
  customAttrs = {...customAttrs, border};

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



export const Row = ({
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
    customAttrs = {...customAttrs, border};
  
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
  


export const Col = ({
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
    customAttrs = {...customAttrs, border};
  
    return h(
    type ? type : "td",
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
  


export const TBody = ({
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
    customAttrs = {...customAttrs, border};
  
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
  

  export const THead = ({
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
    customAttrs = {...customAttrs, border};
  
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

  export const TFoot = ({
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
    customAttrs = {...customAttrs, border};
  
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