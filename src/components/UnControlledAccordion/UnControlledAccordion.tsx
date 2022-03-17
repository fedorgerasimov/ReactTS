import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log("UnControlledAccordion rendering")
    let [collapsed, setCollapsed] = useState(false)  // со старта не collapsed

   /* const collapsed = true*/

    return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={()=> setCollapsed( collapsed === false)} >TOGGLE</button>
                {collapsed === false && <AccordionBody/>}   {/* или заменить везде !collapsed */}
            </div>
        )

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

export default UnControlledAccordion;