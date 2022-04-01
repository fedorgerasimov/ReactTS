import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
   defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}



export const UnControlledRating = (props: RatingPropsType) => {
    console.log("UnControlledRating rendering")
    let [value, setValue] = useState( props.defaultValue ? props.defaultValue : 0) // создали локальный стейт, присвоили начальное значение
    return (                                        // установил значение 0 => выделенные 0 звездочек
        <div>
            <Star selected={value>0} setValue={setValue} value={1}/>
            <Star selected={value>1} setValue={setValue} value={2}/>
            <Star selected={value>2} setValue={setValue} value={3}/>
            <Star selected={value>3} setValue={setValue} value={4}/>
            <Star selected={value>4} setValue={setValue} value={5}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    value: 1| 2| 3| 4| 5
    setValue: (value: number)=> void
}

function Star(props: StartPropsType) {
    return <span onClick={()=> props.setValue(props.value)}>
        {props.selected ? <b>star </b> : "star "}
    </span> }
    /*// рефакторинг кода
    return props.selected ? <span><b>star </b></span> : <span>star </span>

    if (props.selected === true) {        // !(props.selected
        return <span><b>star </b></span>   //  <span><star </span>
    } else {
        return <span>star </span>         // <span><b>star </b></span>
    }
}*/

