import { h } from "../../node_modules/snabbdom/build/h";
import { DividerProps } from "../@types/DividerType";
import { normalizeStyleAttr } from "../helpers/string";

export const Divider = ({
  type,
  id,
  className,
  style,
  onclick,
}: DividerProps) => {
  return h(
    type,
    {
      attrs: style ? {
        id,
        class: className,
        style:  normalizeStyleAttr(style)
      }: {
        id,
        class: className,
      },
      on: {
        click: onclick
      },
    }
  );
};