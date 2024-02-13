export interface FormProps { 
    id?: any,
    method?: string,
    autocomplete?:string,
    novalidate?:boolean,
    enctype?:string,
    target?:"_blank" | "_self" | "_parent" | "_top",
    action?: string,
    className?: any, 
    style?: any, 
    onclick?: any, 
    ondblclick?: any, 
    onmousedown?: any, 
    onmousemove?: any, 
    onmouseout?: any, 
    onmouseover?: any, 
    onmouseup?: any, 
    onkeydown?: any, 
    onkeypress?: any, 
    onsubmit?: any
    onkeyup?: any, 
    children?: any,
    [key: string]: any
}


export interface FormLabelProps { 
    id?: any,
    anchorTo: string,
    className?: any, 
    style?: any, 
    onclick?: any, 
    ondblclick?: any, 
    onmousedown?: any, 
    onmousemove?: any, 
    onmouseout?: any, 
    onmouseover?: any, 
    onmouseup?: any, 
    onkeydown?: any, 
    onkeypress?: any, 
    onkeyup?: any, 
    children?: any,
    [key: string]: any
}


export interface FormInputProps { 
    type?: "text" | "number" | "password" | "email" | "hidden" | "image"  | "reset" | "search" | "submit" | "button" | "tel" | "url" 
    id?: any,
    hint?: string,
    value?:any,
    name?: string,
    required?:boolean,
    className?: any, 
    style?: any, 
    onclick?: any, 
    ondblclick?: any, 
    onmousedown?: any, 
    onmousemove?: any, 
    onmouseout?: any, 
    onmouseover?: any, 
    onmouseup?: any, 
    onkeydown?: any, 
    onkeypress?: any, 
    onkeyup?: any, 
    children?: any,
    [key: string]: any
}


export interface FormSpecialInputProps { 
    id?: any,
    hint?: string,
    value?:any,
    name?: string,
    required?:boolean,
    className?: any, 
    style?: any, 
    onclick?: any, 
    ondblclick?: any, 
    onmousedown?: any, 
    onmousemove?: any, 
    onmouseout?: any, 
    onmouseover?: any, 
    onmouseup?: any, 
    onkeydown?: any, 
    onkeypress?: any, 
    onkeyup?: any, 
    children?: any,
    [key: string]: any
}