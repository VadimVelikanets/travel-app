import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components//footer/Footer";
import Header from "./Components/header/Header";
import { useAuth } from "./hooks/auth.hook";
import { BrowserRouter as Router } from "react-router-dom";
import { useStore } from "./redux/store";
import ScrollToTop from "./Components/scrollToTop/ScrollToTop";
function App() {
  const { login, logout, token, userId, email } = useAuth();
  const isAuth = !!token;
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("EN");
  const [state] = useStore();
  const [loading, setLoading] = useState(true);

  console.log(state);
  const changeLang = (lang) => {
    setLang(lang);
  };
  useEffect(() => {
    fetch("/api/country")
      .then((res) => res.json())
      .then(
        (result) => {
          setCountries(result);
          setLoading(false);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Header
        changeLang={changeLang}
        lang={lang}
        countries={countries}
        loading={loading}
      />
      <Footer />
    </Router>
  );
}

export default App;
