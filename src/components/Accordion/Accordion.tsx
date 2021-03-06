import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any)=> void
}

export const Accordion =(props: AccordionPropsType) => {
    console.log("UnControlledAccordion rendering")
    return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}
                />
                {props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return(
        <ul>
            {props.items.map((el, index) => <li onClick={() => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    )
}

