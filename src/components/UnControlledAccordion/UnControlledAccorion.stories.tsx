import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {AccordionTitle, UnControlledAccordion, AccordionPropsType} from './UnControlledAccordion'

export default  {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
}

const callback = action('uncontrolled accordion mode change')

export const ModeChanging = () => {
    return<UnControlledAccordion titleValue={'Users'}/>
}


