import React from "react";
import { useEffect, useState, useContext  } from "react";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {useAuth} from "../../hooks/auth.hook";
import { useStore } from '../../redux/store';
import "./RegisterModalWindow.css";
import axios from 'axios';


function RegisterModalWindow(props) {
    const [state] = useStore();
    const { auth } = state;
    const {login, logout, userId, token, email} = useAuth()
    const message = useMessage()
    const {loading, request, errors, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        userName: '',
        password: '',
        photo: ''
    })
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const error ='';
    useEffect(() => {
        //  console.log(errors)
        message(errors)
        //  clearError()
    }, [errors, message])
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        setErrorMessage('')
    }
    const handlePhoto = (e) => {

        setForm({ ...form, photo: e.target.files[0] })
    }
    const registerHandler = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData();
            formData.append('email', form.email);
            formData.append('userName', form.userName);
            formData.append('password', form.password);
            formData.append('photo', form.photo);

            // const data = await request('/api/auth/register', 'POST', formData)
            //
            // message(data.message)
            axios.post('/api/auth/register', formData)
                .then(res => {
                    console.log(res);
                    setSuccessMessage('Your profile created!')
                    setErrorMessage('')
                       setTimeout(window.location.reload(), 1500)
                })
                .catch(err => {
                    console.log(err);
                    setErrorMessage('Incorrect register data or photo not upload!')
                });


        } catch (e) {
            console.log(e)
            setErrorMessage('Registration Error!')
        }
    }


  return (
    <form encType='multipart/form-data' onSubmit={registerHandler} className='registerModalWindow'>
      <div className='btnClose' onClick={props.closeModalRegister}>
        &times;
      </div>
      <p className='registerModalWindow__title'>Register</p>

        <input
            onChange={changeHandler}
            name="userName"
            className='registerModalWindow__input'
            placeholder='Name'
        ></input>
      <input
        onChange={changeHandler}
        name="email"
        type="email"
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
        <div className="file-wrapper">
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />
            <span>+ UPLOAD PHOTO</span>
        </div>

      <button type='submit' className='registerModalWindow__submit'>Register</button>
        <span className='success-message'>{successMessage}</span>
        <span className='error-message'>{errorMessage}</span>
    </form>
  );
}

export default RegisterModalWindow;
