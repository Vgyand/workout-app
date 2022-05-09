import style from './Field.module.sass'
import React from 'react'

const Field = ({ placeholder, value, onChange, type }) => {
    return (
        <input placeholder={placeholder} type={type} value={value} onChange={onChange} className={style.input} />
    )
}

export default Field