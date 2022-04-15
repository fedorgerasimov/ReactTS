import React, {useState} from 'react';
import {SelectStories} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: SelectStories,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <div>
            <SelectStories onChange={setValue}
                           value={value}
                           items={[
                               {value: '1', title: 'Minsk'},
                               {value: '2', title: 'Moscow'},
                               {value: '3', title: 'Brest'}
                           ]}/>
        </div>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return(
        <div>
            <SelectStories onChange={setValue}
                           value={value}
                           items={[
                               {value: '1', title: 'Minsk'},
                               {value: '2', title: 'Moscow'},
                               {value: '3', title: 'Brest'}
                           ]}/>
        </div>
    )
}
