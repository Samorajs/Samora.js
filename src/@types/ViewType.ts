export const ViewType: any =  {
    div:"div",
    aside: "aside",
    section: "section",
    article: "article"
}

export interface ViewProps { 
    type: "div" | "aside" | "section" | "article",
    id?: any,
    className?: any, 
    dir?: any, 
    lang?: any, 
    style?: any, 
    xmlLang?: any, 
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
