import React from 'react'
import Header from './Header/Header'
import style from './Layout.module.sass'

const Layout = ({ children }) => {
    return (
        <div className={style.wrapper}>
            <Header />
            {children}
        </div >
    )
}

export default Layout