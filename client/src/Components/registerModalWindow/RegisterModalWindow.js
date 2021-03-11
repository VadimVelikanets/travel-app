import React from "react";
import { useEffect, useState, useContext  } from "react";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {useAuth} from "../../hooks/auth.hook";
import {authContext} from '../../context/authContext'
import "./RegisterModalWindow.css";



function RegisterModalWindow(props) {
    const auth = useContext(authContext)
    const {login, logout, userId, token, email} = useAuth()
    const message = useMessage()
    const {loading, request, errors, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const error ='';
    useEffect(() => {
        //  console.log(errors)
        message(errors)
        //  clearError()
    }, [errors, message])
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
            console.log(e)
            // alert(e)
        }
    }


  return (
    <div className='registerModalWindow'>
      <div className='btnClose' onClick={props.closeModalRegister}>
        &times;
      </div>
      <p className='registerModalWindow__title'>Register</p>
      {/*<input className='registerModalWindow__input' placeholder='Name'></input>*/}
      <input
        onChange={changeHandler}
        name="email"
        className='registerModalWindow__input'
        placeholder='E-mail'
      ></input>
      <input
        onChange={changeHandler}
        name="password"
        type="password"
        className='registerModalWindow__input'
        placeholder='Password'
      ></input>
      <button onClick={registerHandler} className='registerModalWindow__submit'>Register</button>
    </div>
  );
}

export default RegisterModalWindow;
