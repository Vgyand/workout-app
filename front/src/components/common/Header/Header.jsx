import style from './Header.module.sass'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Hamburger from './Hamburger/Hamburger';
import Back from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = ({ callback }) => {

    const location = useLocation()
    const nav = useNavigate()

    return (
        <header className={style.header}>

            {location.pathname !== '/' ?
                <button type="button" className={style.headerBtn} onClick={() => nav(-1)}>
                    <Back sx={{ fontSize: 52 }} />
                </button>
                :
                <button type="button" className={style.headerBtn} onClick={() => nav('../auth')}>
                    <PersonSharpIcon sx={{ fontSize: 52 }} />
                </button>
            }
            <Hamburger />
        </header>
    )
}

export default Header