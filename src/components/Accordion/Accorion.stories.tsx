import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion'

export default  {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback }/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false}
                                                     onChange={callback}
                                                     onClick={onClickCallback }
                                                     items={[{title: 'Jameson', value:1}, {title:'Bob', value:2}, {title:'Jane', value:3}]}/>


export const ModeChanging = () => {
    const [value, setValue] =useState<boolean>(true);
    return<Accordion titleValue={'Users'} collapsed={value} onChange={()=> setValue(!value)}
                     items={[{title: 'Jameson', value:1},
                         {title:'Bob', value:2},
                         {title:'Jane', value:3}]}
                     /*onClick={onClickCallback }*/
                     onClick={(value)=> {alert (`user with ${value} should go home`)}}
                     />
}

