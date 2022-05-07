import React, { useId } from 'react'
import style from './Counters.module.sass'

const counters = {
    minutes: 7,
    workouts: 1,
    kgs: 5
}

const Counters = () => {
    let id = useId()
    return (
        <div className={style.wrapper}>
            {Object.entries(counters).map(item =>
                <div key={id} className={style.count}>
                    <div className={style.heading}>{item[0]}</div>
                    <div className={style.number}>{item[1]}</div>
                </div>
            )}
        </div>
    )
}

export default Counters