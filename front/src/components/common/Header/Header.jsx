import style from './Header.module.sass'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const Header = () => {
    return (
        <header className={style.header}>
            <button type="button" className={style.headerBtn}>
                <PersonSharpIcon sx={{ fontSize: 52 }} />
            </button>
            <button type="button">
                <MenuSharpIcon className={style.headerBtn} sx={{ fontSize: 52 }} />
            </button>

        </header>
    )
}

export default Header