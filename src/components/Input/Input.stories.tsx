import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'
import {OnOff} from "../OnOff/OnOff";

export default {
    title: 'Input',
    component: OnOff, // По-другому не работает. Storybook нужна хоть-какая нибудь компонента
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInputValue}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={onChangeCheckbox}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const selectChangeValue = (event:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue} onChange={selectChangeValue}>
        <option>none</option>
        <option value="1">JS</option>
        <option value="2">HTML</option>
        <option value="3">CSS</option>
        <option value="4">REACT</option>
    </select>
}