import React, {useState} from "react";



function UnControlledRating(props: any) {
    console.log("UnControlledRating rendering")
    let [value, setValue] = useState( 0) // создали локальный стейт, присвоили начальное значение
    return (                                        // установил значение 0 => выделенные 0 звездочек
        <div>
            <Star selected={value>0}/><button onClick={ ()=> setValue(1)}>1</button>
            <Star selected={value>1}/><button onClick={ ()=> setValue(2)}>2</button>
            <Star selected={value>2}/><button onClick={ ()=> setValue(3)}>3</button>
            <Star selected={value>3}/><button onClick={ ()=> setValue(4)}>4</button>
            <Star selected={value>4}/><button onClick={ ()=> setValue(5)}>5</button>
        </div>
    )
}


type StartPropsType = {
    selected: boolean
}


function Star(props: StartPropsType) {
    if (props.selected === true) {        // !(props.selected
        return <span><b>star </b></span>   //  <span><star </span>
    } else {
        return <span>star </span>         // <span><b>star </b></span>
    }
}

export default UnControlledRating;
