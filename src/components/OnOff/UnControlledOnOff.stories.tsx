import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UnControlledOnOff, PropsType} from "./UnControlledOnOff";
import {OnOff} from "./OnOff";

export default  {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOff={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'Hello'}/>

