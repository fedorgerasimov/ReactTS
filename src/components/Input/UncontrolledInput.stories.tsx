import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'
import Rating from '../Rating/Rating'

export default {
    title: 'UncontrolledInput',
    component: Rating, // По-другому не работает. Storybook нужна хоть-какая нибудь компонента
}

export const Uncontrolled = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const ChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value // передаём событие и сетаем в локальный стейт
        setValue(actualValue)
    }
    return <>
        <input onChange={ChangeInputValue}/> -{value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
    </>
}

export const ControlledInputWithFixedValue = () => <input value={'some news'}/>
