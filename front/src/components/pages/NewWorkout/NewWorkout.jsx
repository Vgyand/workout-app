import style from './NewWorkout.module.sass'
import { useState } from 'react'
import Layout from '../../common/Layout'
import Field from '../../common/ui/Field/Field'
import Button from "../../common/ui/Button/Button"
import ReactSelect from 'react-select'
import { optionColor } from './optionColor'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from "react-query";

import { $api } from '../../../api/api'
import Alert from '../../common/ui/Alert/Alert'
import Loader from '../../common/ui/Loader'
const NewWorkout = () => {


    const [name, setName] = useState('')
    const [exercisesCurrent, setExercisesCurrent] = useState([])


    const { data, isSuccess } = useQuery('home page counters', () =>
        $api({
            url: '/exercises',
        }),
        {
            refetchOnWindowFocus: false
        },
    )
    const {
        mutate,
        isLoading,
        error,
        isSuccess: isSuccessMutate
    } = useMutation(
        'Create new workout',
        ({ exIds }) =>
            $api({
                url: '/workouts',
                type: 'POST',
                body: { name, exerciseIds: exIds },
            }),
        {
            onSuccess() {
                setName('')
                setExercisesCurrent([])
            }
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const exIds = exercisesCurrent.map(ex => ex.value)
        mutate({
            exIds
        })
    }
    return (
        <Layout height="100%" >
            <div className={style.wrapper}>
                {error && <Alert type='error' text={error} />}
                {isSuccessMutate && <Alert text={'work sdelal'} />}
                {(isLoading) && <Loader />}
                <h1>Create new workout</h1>
                <form action="" onSubmit={handleSubmit}>
                    <Field type='text' placeholder={'Name'} value={name} onChange={e => setName(e.target.value)} /><br />
                    <Link className={style.addExercise} to='../new-exercise'>Add new exercise</Link>
                    {isSuccess && data &&
                        <ReactSelect
                            classNamePrefix='select2-selection'
                            placeholder='Exercises...'
                            title='Exercises'
                            options={data.map(ex => ({
                                value: ex._id,
                                label: ex.name,
                            }))}
                            value={exercisesCurrent}
                            onChange={setExercisesCurrent}
                            theme={theme => optionColor(theme)}
                            isMulti={true}
                        />
                    }
                    <Button text='Create' callback={() => (console.log('cal'))} />
                </form>
            </div>
        </Layout >
    )
}

export default NewWorkout