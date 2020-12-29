import React from 'react'

import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'


import './style.scss'

export default function SignInAndSignUp() {
    return (
        <div className="auth-page">
            <LoginForm />
            <RegisterForm/>
        </div>
    )
}
