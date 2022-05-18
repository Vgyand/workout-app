import style from './Header.module.sass'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Hamburger from './Hamburger/Hamburger';
import Back from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


const Header = () => {

    const location = useLocation()
    const nav = useNavigate()

    const { isAuth } = useAuth()


    return (
        <header className={style.header}>

            {location.pathname !== '/' ?
                <button type="button" className={style.headerBtn} onClick={() => nav(-1)}>
                    <Back sx={{ fontSize: 52 }} />
                </button>
                :
                <button type="button" className={style.headerBtn} onClick={() => nav(isAuth ? '../profile' : '../auth')}>
                    <PersonSharpIcon sx={{ fontSize: 52 }} />
                </button>
            }
            {isAuth ? 'auth' : 'not'}
            <Hamburger />
        </header>
    )
}

export default Header