import React, {useMemo} from "react";
import {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData(){
    console.log("generateData")
    return 35535
}

export const Example1 = () => {
    console.log("Example1")

    //const initialValue= useMemo(generateData,[])
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {

        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}