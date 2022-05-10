import Button from "../../common/ui/Button/Button"
import Counters from "../../common/ui/Counters/Counters"
import style from './Home.module.sass'
import Layout from '../../common/Layout'
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { $api } from "../../../api/api";
import { useAuth } from "../../../hooks/useAuth";


const Home = () => {
    const { isAuth } = useAuth()
    const navigate = useNavigate()
    const { data, isSuccess } = useQuery('home page counters', () =>
        $api({
            url: '/users/profile',
        }),
        {
            enabled: isAuth
        }
    )
    return (
        <Layout height="100%">
            <Button text="new" type={'main'} callback={() => navigate("../new-workout")} />
            <h1 className={style.heading}>EXCERCISE</h1>
            {(isSuccess && isAuth) && <Counters minutes={data.minutes} workouts={data.workouts} kgs={data.kgs} />}
        </Layout>
    )
}

export default Home