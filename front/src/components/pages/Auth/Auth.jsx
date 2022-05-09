import Button from '../../common/ui/Button/Button'
import React, { useState } from 'react'
import Layout from '../../common/Layout'
import Field from '../../common/ui/Field/Field'
import style from './Auth.module.sass'
import Alert from '../../common/ui/Alert/Alert'

const Auth = () => {
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('auth')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (type === 'auth') {
            console.log('auth')
        } else {
            console.log('reg')
        }

    }

    return (
        <Layout>
            <div className={style.wrapper}>
                <h1 className={style.title}>Registration / Auth</h1>
                {true && <Alert type={'error'} text={'suc'} />}
                <form onSubmit={handleSubmit}>
                    <Field type='email' placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)} />
                    <Field type='password' placeholder={'Password'} value={pass} onChange={e => setPass(e.target.value)} />
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