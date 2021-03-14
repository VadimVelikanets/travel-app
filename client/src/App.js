import React, {useEffect, useState} from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {useAuth} from './hooks/auth.hook'
import {authContext} from './context/authContext'
function App() {
    const {login, logout, token, userId, email} = useAuth()
    const isAuth = !!token
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const [lang, setLang] = useState('EN')

    const changeLang = (lang) =>{
        setLang(lang)

      }
    useEffect(() => {
        fetch("/api/country")
            .then(res => res.json())
            .then(
                (result) => {

                    setCountries(result)
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                   setLoaded(true)
                    setError(error)
                }
            )
    },[]);
  return (
    <>
        <authContext.Provider value={{
            login, logout, token, userId, isAuth, email
        }}>
          <Header changeLang={changeLang} lang={lang} countries={countries}/>
          <Footer />
        </authContext.Provider>
    </>
  );
}

export default App;
