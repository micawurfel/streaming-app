import React from 'react'
import { useAuthContext } from '../context/authContext'
import Form from '../components/Auth/Form'

export default function Register() {
  const { handleRegister } = useAuthContext()

  return (
    <>
      <Form event={handleRegister} title="Register" />
    </>
  )
}
