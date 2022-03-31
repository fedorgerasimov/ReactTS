import React, {useState} from "react";

type PropsType = {
    onChange: (on:boolean) => void
}

export const UnControlledOnOff =(props: PropsType) => {

    let[on, setOn] = useState(false)  // изолировали компоненту, сделали локальный стейт

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: /*props.*/on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: /*props.*/on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: /*props.*/on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            {/*вынес функцию наверх
            <div style={offStyle} onClick={ ()=> {setOn(false); props.onChange(false)}}>Off</div>*/}
            <div style={indicatorStyle}></div>
        </div>
    )
}



