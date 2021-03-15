import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {useAuth} from './hooks/auth.hook'
import {authContext} from './context/authContext'
function App() {
    const {login, logout, token, userId, email} = useAuth()
    const isAuth = !!token
  return (
    <>
        <authContext.Provider value={{
            login, logout, token, userId, isAuth, email
        }}>
          <Header />
          <Footer />
        </authContext.Provider>
    </>
  );
}

export default App;
