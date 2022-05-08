import style from './Header.module.sass'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Hamburger from './Hamburger/Hamburger';


const Header = () => {
    return (
        <header className={style.header}>
            <button type="button" className={style.headerBtn}>
                <PersonSharpIcon sx={{ fontSize: 52 }} />
            </button>
            <Hamburger />
        </header>
    )
}

export default Header