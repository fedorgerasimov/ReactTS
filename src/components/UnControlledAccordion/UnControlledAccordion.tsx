import React, {useReducer, useState} from "react";

export type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}
const TOGGLE_CONSTANT = 'TOGGLE_CONSTANT'

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Bad action type')
    }
    return state
}

export const UnControlledAccordion = (props: AccordionPropsType) => {
    console.log("UnControlledAccordion rendering")
    //let [collapsed, setCollapsed] = useState<boolean>(false)  // со старта не collapsed
    let [collapsed, dispatch] = useReducer(reducer, false)
    /* const collapsed = true*/
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch(({type: TOGGLE_CONSTANT}))}/>
            {!collapsed && <AccordionBody/>} {/* или заменить везде collapsed === false */}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.onClick}> ---{props.title}--- </h3>
        </div>
    )
}

function AccordionBody(props: any) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;