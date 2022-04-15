import React from 'react';
import {SelectStories} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: SelectStories,
}

export const WithValue = () => <SelectStories onChange={action("Value changed")}
                                         value={"2"}
                                         items={[
                                             {value: '1', title: 'Minsk'},
                                             {value: '2', title: 'Moscow'},
                                             {value: '3', title: 'Brest'}
                                         ]}/>

export const WithOutValue = () => <SelectStories onChange={action("Value changed")}
                                          items={[
                                             {value: '1', title: 'Minsk'},
                                             {value: '2', title: 'Moscow'},
                                             {value: '3', title: 'Brest'}
                                         ]}/>