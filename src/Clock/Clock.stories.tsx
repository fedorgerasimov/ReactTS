import React from 'react';
import Clock from './Clock';


export default {
    title: 'Clock',
    component:Clock
}

export const ClockAnalog = () => {
    return <Clock mode={'analog'}/>
}
export const ClockDigital = () => {
    return <Clock mode={'digital'}/>
}