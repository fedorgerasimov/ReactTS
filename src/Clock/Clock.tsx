import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

type ClockType = 'analog' | 'digital'

type PropsType = {
    mode: ClockType
}

const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const intervalId =  setInterval(() => {
           console.log("tick")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const clock = (mode : ClockType) => {
        if (mode === 'analog') {
             return <AnalogClock date={date}/>
        }
        if (mode === 'digital') {
            return <DigitalClock date={date}/>
        }
    }

    return (
        <>
            {clock(props.mode)}
        </>
    );
};

export default Clock