import React from "react";
import { useEffect, useState } from "react";
import "./RegisterModalWindow.css";

function RegisterModalWindow(props) {
  return (
    <div className="registerModalWindow">
      <div className="btnClose" onClick={props.closeModalRegister}>
        &times;
      </div>
      <p className="registerModalWindow__title">Register</p>
      <input className="registerModalWindow__input" placeholder="Name"></input>
      <input
        className="registerModalWindow__input"
        placeholder="E-mail"
      ></input>
      <input
        className="registerModalWindow__input"
        placeholder="Password"
      ></input>
      <button className="registerModalWindow__submit">Register</button>
    </div>
  );
}

export default RegisterModalWindow;
