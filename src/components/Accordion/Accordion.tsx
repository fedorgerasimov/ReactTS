import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
}

export const Accordion =(props: AccordionPropsType) => {
    console.log("UnControlledAccordion rendering")
    return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}
                />
                {props.collapsed === false && <AccordionBody/>}
             {/* { !props.collapsed && <AccordionBody/>}*/}
            </div>
        )

}
/*переписали логику Accordion
function Accordion2(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}*/

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={(e) =>props.onChange()}> ---{props.title}--- </h3>
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

