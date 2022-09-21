import {useEffect, useState} from "react";

export default {
    title: 'useEffectCleanUp',
}

export const ResetEffectExample = () => {

   const [counter, setCounter] = useState(1);
    console.log('Component rendered with ' + counter)

    useEffect(() => {
       console.log('Effect occurred')

        return () => {console.log('Reset Effect')} // если зависимость не пустая,
    }, [counter])                             // вначале происходит зачистка
    const increase = () => {setCounter(counter + 1)}

    return (

        <>
            Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
    )
}