import { ViewType, ViewProps } from "../@types/ViewType";
import { h } from "../../node_modules/snabbdom/build/h";
import { normalizeStyleAttr } from "../helpers/string";
import { FormInputProps, FormLabelProps, FormProps, FormSpecialInputProps } from "../@types/FormType";

export const Form = ({
  id,
  action,
  autocomplete,
  enctype,
  method,
  novalidate,
  target,
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
  onsubmit,
  onkeyup,
  children,
  ...customAttrs
}: FormProps) => {

    customAttrs = { ...customAttrs, autocomplete, enctype, method, novalidate, target, action };

  return h(
    "form",
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
        onsubmit: onsubmit
      },
    },
    children
  );
};



export const Label = ({
    id,
    anchorTo,
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
    ...customAttrs
  }: FormLabelProps) => {
    customAttrs = {...customAttrs, for: anchorTo}

    return h(
      "label",
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


export const Field = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormInputProps) => {
    customAttrs = {...customAttrs, name, type: type ? type : "text", value, placeholder: hint, required}

    return h(
      "input",
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



export const Checkbox = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "checkbox", value, placeholder: hint, required}

    return h(
      "input",
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


export const RadioButton = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "radio", value, placeholder: hint, required}

    return h(
      "input",
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


export const DatePicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "date", value, placeholder: hint, required}

    return h(
      "input",
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



export const ColorPicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "color", value, placeholder: hint, required}

    return h(
      "input",
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


export const DateTimePicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "datetime-local", value, placeholder: hint, required}

    return h(
      "input",
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



export const MonthPicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "month", value, placeholder: hint, required}

    return h(
      "input",
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



export const FilePicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "file", value, placeholder: hint, required}

    return h(
      "input",
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



export const Slider = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "range", value, placeholder: hint, required}

    return h(
      "input",
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


export const WeekPicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "week", value, placeholder: hint, required}

    return h(
      "input",
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



export const TimePicker = ({
    id,
    name,
    type,
    value,
    hint,
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
    children,
    ...customAttrs
  }: FormSpecialInputProps) => {
    customAttrs = {...customAttrs, name, type: "time", value, placeholder: hint, required}

    return h(
      "input",
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