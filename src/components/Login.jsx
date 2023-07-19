import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../context/authContext'

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const {login} = useAuth()
      const navigate = useNavigate()
    
      const handleChange = ({target : {name, value}}) => {
        setUser({...user, [name]:value})
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await login(user.email, user.password)
          navigate('/')
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <>
            <form action="" className="form bg-primary-subtle" onSubmit={handleSubmit}>
                <h1 className='h3'>LogIn</h1>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>

                <button className='btn btn-primary'>LogIn</button>
            </form>
        </>
    )
}
