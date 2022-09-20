import React from 'react';
import style from './DigitalClock.module.css';

export type DigitalClockPropsType = {
    date: Date
}

const getTwoDigitString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClock = (props: DigitalClockPropsType) => {
    return (
        /*    <div className={style.wrapper}>
                <div className={style.display}><
                    span>{getTwoDigitString(props.date.getHours())}</span>
                    :
                    <span>{getTwoDigitString(props.date.getMinutes())}</span>
                    :
                    <span>{getTwoDigitString(props.date.getSeconds())}</span></div>
            </div>*/
        <div className={style.wrapper}>
            <div className={style.display}>
                <div className={style.time}>
                    {
                        getTwoDigitString(props.date.getHours())
                        + ':' + getTwoDigitString(props.date.getMinutes())
                        + ':' + getTwoDigitString(props.date.getSeconds())
                    }
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    )
}