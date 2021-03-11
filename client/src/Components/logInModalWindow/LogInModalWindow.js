import React from "react";
import { useEffect, useState, useContext  } from "react";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {useAuth} from "../../hooks/auth.hook";
import {authContext} from '../../context/authContext'
import "./LogInModalWindow.css";

function LogInModalWindow(props) {
    const auth = useContext(authContext)
    const {login, logout, userId, token, email} = useAuth()
    const message = useMessage()
    const {loading, request, errors, clearError} = useHttp()
    const [errorMessage, setErrorMessage] = useState('')
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const error ='';
    useEffect(() => {
        message(errors)
    }, [errors, message])
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        setErrorMessage('')
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.email)
            window.location.reload();
        } catch (e) {
            console.log(e)
            setErrorMessage('Incorrect login data!')
            // alert(e)
        }
    }
  return (
    <div className='logInModalWindow'>
      <div className='btnClose' onClick={props.closeModalLigIn}>
        &times;
      </div>
      <p className='logInModalWindow__title'>Enter</p>
      <input onChange={changeHandler} name="email" type="email" className='logInModalWindow__input' placeholder='Email'></input>
      <input onChange={changeHandler} name="password" className='logInModalWindow__input' type="password" placeholder='Password'></input>
      <button onClick={loginHandler} className='logInModalWindow__submit'>LogIn</button>
      <span className='error-message'>{errorMessage}</span>
    </div>
  );
}

export default LogInModalWindow;
