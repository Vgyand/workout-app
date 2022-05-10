/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuClose from '@mui/icons-material/Close'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Hamburger.module.sass'
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter';
import { useAuth } from '../../../../hooks/useAuth';

const Hamburger = () => {

    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideAlerter(false)

    const { setIsAuth } = useAuth()
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuth(true)
        setIsComponentVisible(false)
    }
    return (
        <div className={style.wrapper} ref={ref}>
            <button type="button" onClick={() => setIsComponentVisible(!isComponentVisible)}>
                {!isComponentVisible ? <MenuSharpIcon className={style.headerBtn} sx={{ fontSize: 52 }} /> : <MenuClose className={style.headerBtn} sx={{ fontSize: 52 }} />}

            </button>
            <nav className={`${style.menu} ${isComponentVisible ? style.show : ''}`}>
                <ul>
                    <li>
                        <Link to='/'>Workouts</Link>
                    </li>
                    <li>
                        <Link to='/new-workout'>Create New</Link>
                    </li>
                    <li>
                        <Link to='/'>Profile</Link>
                    </li>
                    <li>
                        <a onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Hamburger