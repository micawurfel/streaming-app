import React from 'react'
import { useAuthContext } from '../../context/authContext'
import styles from './Form.module.scss'

export default function Form(props) {
  const { handleEmailChange, handlePasswordChange } = useAuthContext()

  return (
    <>
      <form
        className={styles.form}
        onSubmit={props.event}
      >
        <h1 className={styles.title}>{props.title}</h1>

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder='john@gmail.com'
          className={styles.input}
          onChange={handleEmailChange}
        />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder='********'
          className={styles.input}
          onChange={handlePasswordChange}
        />

        <button className={styles.button}>{props.title}</button>
      </form>
    </>
  )
}
