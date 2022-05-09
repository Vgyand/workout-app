import style from './NewWorkout.module.sass'
import { useState } from 'react'
import Layout from '../../common/Layout'
import Field from '../../common/ui/Field/Field'
import Button from "../../common/ui/Button/Button"
import ReactSelect from 'react-select'
import { optionColor } from './optionColor'
const NewWorkout = () => {


    const [name, setName] = useState('')
    const [statusVision, setStatusVision] = useState('')

    const handleSubmit = () => {
        console.log('submit')
    }
    return (
        <Layout height="100%" >
            <div className={style.wrapper}>
                <h1>Create new workout</h1>
                <form action="" onSubmit={handleSubmit}>
                    <Field type='text' placeholder={'Name'} value={name} onChange={e => setName(e.target.value)} />
                    {/*select */}
                    <ReactSelect
                        classNamePrefix='select2-selection'
                        placeholder='Exercises...'
                        title='Exercises'
                        options={[
                            { value: 0, label: 'Push-ups' },
                            { value: 1, label: 'Pull-ups' }
                        ]}
                        value={statusVision}
                        onChange={setStatusVision}
                        theme={theme => optionColor(theme)}
                        isMulti={true}
                    />
                    <Button text='Create' callback={() => (console.log('cal'))} />
                </form>
            </div>
        </Layout >
    )
}

export default NewWorkout