import style from './Header.module.sass'

const Header = () => {
    return (
        <header className={style.header}>
            <button type="button">
                <img src="" alt="authIcon" />
            </button>
            <button type="button">
                <img src="" alt="menuIcon" />
            </button>

        </header>
    )
}

export default Header