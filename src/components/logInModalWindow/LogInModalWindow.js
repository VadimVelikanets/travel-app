import { useEffect, useState } from "react";
import "./LogInModalWindow.css";

function LogInModalWindow(props) {
  return (
    <div className='logInModalWindow'>
      <div className='btnClose' onClick={props.closeModalLigIn}>
        &times;
      </div>
      <p className='logInModalWindow__title'>Enter</p>
      <input className='logInModalWindow__input' placeholder='Name'></input>
      <input className='logInModalWindow__input' placeholder='Password'></input>
      <button className='logInModalWindow__submit'>LogIn</button>
    </div>
  );
}

export default LogInModalWindow;
