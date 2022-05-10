import React, { useId } from 'react'
import style from './Counters.module.sass'


const Counters = ({ minutes,
    workouts,
    kgs }) => {
    let id = useId()
    return (
        <div className={style.wrapper}>

            <div className={style.count}>
                <div className={style.heading}>Minutes</div>
                <div className={style.number}>{minutes}</div>
            </div>
            <div className={style.count}>
                <div className={style.heading}>Workouts</div>
                <div className={style.number}>{workouts}</div>
            </div>
            <div className={style.count}>
                <div className={style.heading}>kgs</div>
                <div className={style.number}>{kgs}</div>
            </div>
        </div>
    )
}

export default Counters