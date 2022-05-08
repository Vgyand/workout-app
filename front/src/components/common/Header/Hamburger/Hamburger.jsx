import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MenuClose from '@mui/icons-material/Close'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Hamburger.module.sass'

const Hamburger = () => {
    const [show, setShow] = useState(false)

    const handleLogout = () => {
        console.log('logout')
    }
    return (
        <div className={style.wrapper}>
            <button type="button" onClick={() => setShow(!show)}>
                {show ? <MenuSharpIcon className={style.headerBtn} sx={{ fontSize: 52 }} /> : <MenuClose className={style.headerBtn} sx={{ fontSize: 52 }} />}

            </button>
            <nav className={`${style.menu} ${show ? style.show : ''}`}>
                <ul>
                    <li>
                        <Link to='/'>Workouts</Link>
                    </li>
                    <li>
                        <Link to='/'>Create New</Link>
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