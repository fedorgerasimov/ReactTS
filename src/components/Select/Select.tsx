import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'
import {Container, Grid, Select} from "@mui/material";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

//------------                 СОЗДАЛИ СВОЙ СЕЛЕКТ       ----------------
export function SelectStories(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value) //при наведении курсора будет подсвечиваться

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)   // !active - будет появляться и скрываться
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {  // стрелками можно выбирать из списка
        console.log('press')
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                        const expectantElementIndex = event.key === "ArrowDown"
                            ? props.items[i+1]
                            : props.items[i-1]
                    if (expectantElementIndex) { // если последнего (в конце нашего списка) элемента нет
                        props.onChange(expectantElementIndex.value)  // тогда делаем эту логику
                        break;
                    }
                }
            }
           if (!selectedItem) {
               props.onChange(props.items[0].value);
           }
        }

        if (event.key === "Enter" || event.key === "Escape") {   // при нажатии enter||escape список будет прятатьсяы
            setActive(false)
        }
    }

    return (
        <div>
            <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                {/* <div className={s.select + " " + (active ? s.active : "")}> добавили два класса что менять с помощью CSS*/}
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(el.value)
                            }} // навилась мышка и произойдёт действие, выделяется цветом
                            className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}
                        >{el.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
}

/*
export function SelectStories(props: SelectPropsType) {
    const selectedItem = props.items.find( el => el.value === props.value)
    return (
        <Container fixed>
            <Grid container justifyContent={'start'}>
                <div className={s.select}>
                    <Select labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="City"
                            size ='small'
                            style={{padding: "20px", maxWidth: "100px"}}
                    >
                        <option value="">Minsk</option>
                        <option value="">Moscow</option>
                        <option value="">Brest</option>
                    </Select>
                    <h3>{selectedItem && selectedItem.title}</h3>
                    {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                </div>
            </Grid>
        </Container>
    )
}
*/
