import styles from './Button.module.sass'

const Button = ({ text, callback, type = 'black' }) => {
    return (
        <div className={styles.wrapper}>
            <button onClick={callback} className={`${styles.button} ${styles[type]}`}>
                {text}
            </button>
        </div>

    )
}

export default Button