import React from "react";
import s from './Select.module.css'
import {Container, Grid, Select} from "@mui/material";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
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

export function SelectStories(props: SelectPropsType) {
    const selectedItem = props.items.find(el => el.value === props.value)
    return (
        <div>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Brest</option>
            </select>
            <div className={s.select}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={s.items}>
                    {props.items.map(el => <div key={el.value}>{el.title}</div>)}
                </div>
            </div>
        </div>
    )}
