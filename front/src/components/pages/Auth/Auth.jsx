
import Button from '../../common/ui/Button/Button'
import React, { useState } from 'react'
import Layout from '../../common/Layout'
import Field from '../../common/ui/Field/Field'
import style from './Auth.module.sass'
import Alert from '../../common/ui/Alert/Alert'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import Loader from '../../common/ui/Loader'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const nav = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const [type, setType] = useState('auth')

    const { mutate: register, isLoading, error } = useMutation('Registration', () =>
        $api({
            url: '/users',
            type: 'POST',
            body: { email, password },
            auth: false,
        }), {
        onSuccess(data) {
            localStorage.setItem('token', data.token)
            console.log(data)
            setPass('')
            setEmail('')
            nav('/')

        }
    }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        if (type === 'auth') {

            console.log('auth')
        } else {
            register()
        }

    }

    return (
        <Layout>
            <div className={style.wrapper}>
                <h1 className={style.title}>Registration / Auth</h1>
                {error && <Alert type={'error'} text={error} />}
                {isLoading && <Loader />}
                <form onSubmit={handleSubmit}>
                    <Field type='email' placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)} />
                    <Field type='password' placeholder={'Password'} value={password} onChange={e => setPass(e.target.value)} />
                    <div className={style.wrapper_btn}>
                        <Button text='Sign In' callback={() => setType('auth')} />
                        <Button text='Sign Up' callback={() => setType('reg')} />
                    </div>
                </form>
            </div>


        </Layout >

    )
}

export default Auth