import { VNode } from "../../node_modules/snabbdom/build/vnode";

export interface NavProps {
    id?: any;
    className?: any;
    style?: any;
    onclick?: any;
    ondblclick?: any;
    onmousedown?: any;
    onmousemove?: any;
    onmouseout?: any;
    onmouseover?: any;
    onmouseup?: any;
    onkeydown?: any;
    onkeypress?: any;
    onkeyup?: any;
    children?: VNode[];
    [key: string]: any
  }