import { VNode } from "../../node_modules/snabbdom/build/vnode";

export interface FooterProps {
    id?: any;
    className?: any;
    style?: any;
    onclick?: any | undefined;
    ondblclick?: any| undefined;
    onmousedown?: any;
    onmousemove?: any;
    onmouseout?: any;
    onmouseover?: any;
    onmouseup?: any;
    onkeydown?: any;
    onkeypress?: any;
    onkeyup?: any;
    children?:[];
    [key: string]: any
  }