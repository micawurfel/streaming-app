import React from 'react'
import { useAuthContext } from '../context/authContext'
import Form from '../components/Auth/Form'
import ButtonAuth from '../components/Auth/ButtonAuth'

export default function Login() {
  const { handleLogin } = useAuthContext()

  return (
    <>
      <Form event={handleLogin} title="Log in" />
      <div>
        <p>Not have an account yet? <ButtonAuth to={'/register'} title="Register" /></p>
      </div>
    </>
  )
}
