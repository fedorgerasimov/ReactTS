import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string
}

export const UnControlledAccordion = (props: AccordionPropsType) => {
    console.log("UnControlledAccordion rendering")
    let [collapsed, setCollapsed] = useState<boolean>(false)  // со старта не collapsed

   /* const collapsed = true*/
    return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
                {/*  удалил старую функцию, так как без callback
                <button onClick={()=> setCollapsed( collapsed === false)} >TOGGLE</button>*/}
                { !collapsed && <AccordionBody/>}   {/* или заменить везде collapsed === false */}
            </div>
        )

}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}
export const  AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.onClick}> ---{props.title}--- </h3>
        </div>
    )
}

function AccordionBody(props: any) {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;