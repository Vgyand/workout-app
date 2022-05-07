import Button from "../../common/ui/Button/Button"
import Counters from "../../common/ui/Counters/Counters"
import style from './Home.module.sass'
import Layout from '../../common/Layout'

const Home = () => {
    return (
        <Layout height="100%">
            <Button text="new" type={'main'} callback={() => { }} />
            <h1 className={style.heading}>EXCERCISE</h1>
            <Counters />
        </Layout>
    )
}

export default Home