import style from './NewExercise.module.sass'
import { useState } from 'react'
import Layout from '../../common/Layout'
import Field from '../../common/ui/Field/Field'
import Button from "../../common/ui/Button/Button"
import chest from '../../../images/uploads/exercises/chest.svg'
import shoulders from '../../../images/uploads/exercises/shoulders.svg'
import biceps from '../../../images/uploads/exercises/biceps.svg'
import legs from '../../../images/uploads/exercises/legs.svg'
import hit from '../../../images/uploads/exercises/hit.svg'
import cn from 'classnames'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import Alert from '../../common/ui/Alert/Alert'
import Loader from '../../common/ui/Loader'

const data = [
    chest, shoulders, biceps, legs, hit
]

const NewExercise = () => {


    const [name, setName] = useState('')
    const [times, setTimes] = useState()
    const [imageName, setImageName] = useState('')


    const {
        isSuccess,
        mutate,
        isLoading,
        error,
    } = useMutation(
        'Create new exercise',
        () =>
            $api({
                url: '/exercises',
                type: 'POST',
                body: { name, times },
            }),
        {
            onSuccess(data) {
                setName('')
                setTimes()
                setImageName('')
            },
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && times && imageName) mutate()
    }
    return (
        <Layout height="100%" >
            {error && <Alert type='error' text={error} />}
            {isSuccess && <Alert text={'vse zbs exersice sdelal bratuha'} />}
            {(isLoading) && <Loader />}
            <div className={style.wrapper}>
                <h1>Create new exercise</h1>
                <form action="" onSubmit={handleSubmit}>
                    <Field type='text' placeholder={'Name'} value={name} onChange={e => setName(e.target.value)} /><br />
                    <Field type='text' placeholder={'Times'} value={times} onChange={e => setTimes(e.target.value)} /><br />
                    <div className={style.images}>
                        {data.map((item, index) => (
                            <img className={cn({
                                [style.active]: imageName === item
                            })} key={index} src={item} alt="" onClick={() => setImageName(item)} />
                        ))}
                    </div>
                    <Button text='Create' callback={() => (console.log('cal'))} />

                </form>
            </div>
        </Layout >
    )
}

export default NewExercise