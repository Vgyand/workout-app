import React from 'react'
import Header from './Header/Header'
import style from './Layout.module.sass'

const Layout = ({ children }) => {
    return (
        <div className={style.wrapper} style={{
            backgroundColor: 'orange'
        }} >
            <Header />
            <div>
                {children}
            </div>
        </div >
    )
}

export default Layout