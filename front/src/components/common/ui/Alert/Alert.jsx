import React from 'react'
import style from './Alert.module.sass'
import cn from 'classnames'

const Alert = ({ type = 'success', text }) => {
    return (
        <div className={cn(style.alert, {
            [style.error]: type === 'error',
            [style.warning]: type === 'warning',
            [style.info]: type === 'info'
        })}>
            {text}
        </div>
    )
}

export default Alert