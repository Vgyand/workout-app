import Button from "../../common/ui/Button/Button"
import Counters from "../../common/ui/Counters/Counters"
import style from './Home.module.sass'
import Layout from '../../common/Layout'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <Layout height="100%">
            <Button text="new" type={'main'} callback={() => navigate("../new-workout")} />
            <h1 className={style.heading}>EXCERCISE</h1>
            <Counters />
        </Layout>
    )
}

export default Home