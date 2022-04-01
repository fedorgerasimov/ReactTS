import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {AccordionTitle, UnControlledAccordion, AccordionPropsType} from './UnControlledAccordion'

export default  {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
}

const callback = action('uncontrolled accordion mode change')

export const MenuCollapsedMode = () => <UnControlledAccordion titleValue={'Menu'}  />
export const UsersUnCollapsedMode = () => <UnControlledAccordion titleValue={'Users'}/>


export const ModeChanging = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>
            { !collapsed && <AccordionBody/>}
        </div>
    )

}


