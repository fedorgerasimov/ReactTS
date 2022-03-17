import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")
    return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {props.collapsed === false && <AccordionBody/>}
             {/* { !props.collapsed && <AccordionBody/>}*/}
            </div>
        )

}
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
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3> ---{props.title}--- </h3>
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

export default Accordion;