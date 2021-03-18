import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Navbar, Container, Form, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "../../Pages/home/Home";
import Country from "../../Pages/country/Country";
import "./Header.css";
import LogInModalWindow from "../logInModalWindow/LogInModalWindow";
import RegisterModalWindow from "../registerModalWindow/RegisterModalWindow";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import SearchResult from "./../SearchResult";
import { useStore } from "../../redux/store";
import { changeLang } from "../../redux/mainReducer";
import { useAuth } from "../../hooks/auth.hook";
import { CSSTransition } from "react-transition-group";

function Header(props) {
  const [state] = useStore();
  const { auth } = state;
  const [, dispatch] = useStore();
  const [isOpenLogIn, setOpenLogIn] = useState(false);
  const [isOpenRegister, setOpenRegister] = useState(false);
  const { login, logout, userId, token, email } = useAuth();
  const location = useLocation();
  const [saveLang, setSaveLang] = useState("EN");
  const showModalLogIn = () => {
    setOpenLogIn({ isOpenLogIn: true });
    setOpenRegister(false);
  };

  const showModalRegister = () => {
    setOpenRegister({ isOpenRegister: true });
    setOpenLogIn(false);
  };
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
    window.location.reload();
  };

  //Модуль поиска
  const [searchValue, setSearchValue] = useState("");
  const [searchArray, setTheArray] = useState([]);

  const searchCountry = (e) => {
    setTheArray([]);
    const searchWord = e.target.value.trim();

    setSearchValue(searchWord);
    if(state.lang.value === 'EN'){
      props.countries
          .filter((country) =>
              country.lang.EN.country
                  .toLocaleLowerCase()
                  .includes(searchWord.toLocaleLowerCase())
          )
          .map((searchResult) =>
              setTheArray((searchArray) => [...searchArray, searchResult])
          );
    } else if(state.lang.value === 'RU'){

      props.countries
          .filter((country) =>
              country.lang.RU.country
                  .toLocaleLowerCase()
                  .includes(searchWord.toLocaleLowerCase())
          )
          .map((searchResult) =>
              setTheArray((searchArray) => [...searchArray, searchResult])
          );
    }
    else if(state.lang.value === 'DE'){

      props.countries
          .filter((country) =>
              country.lang.DE.country
                  .toLocaleLowerCase()
                  .includes(searchWord.toLocaleLowerCase())
          )
          .map((searchResult) =>
              setTheArray((searchArray) => [...searchArray, searchResult])
          );
    }
  };

  //очистка инпута
  const cleanInput = () => {
    setSearchValue("");
  };
  //Смена языка
  const changeLangHandler = (e) => {
    props.changeLang(e.target.value);
    dispatch(changeLang(e.target.value));
    localStorage.setItem("lang", JSON.stringify({ lang: e.target.value }));
  };
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setSaveLang(JSON.parse(localStorage.getItem("lang")).lang);
      dispatch(changeLang(JSON.parse(localStorage.getItem("lang")).lang));
    }
  }, []);
  return (
    <>
      <Navbar
        // fixed='top'
        collapseOnSelect
        expand='md'
        variant='light'
        className=' justify-content-between header'
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to='/' exact>
              <img
                width='100'
                // src="https://freepngimg.com/thumb/categories/3081.png"
                // src="https://static.wixstatic.com/media/2cd43b_a7e42622584e4cfd8e160f3778cdda1c~mv2.png/v1/fill/w_518,h_264,fp_0.50_0.50,lg_1,q_95/2cd43b_a7e42622584e4cfd8e160f3778cdda1c~mv2.png"
                // src="https://freepikpsd.com/wp-content/uploads/2019/10/traveling-png-2-Transparent-Images.png"
                // src="https://webstockreview.net/images/clipart-airplane-journey-2.png"
                // src="https://www.searchpng.com/wp-content/uploads/2019/02/Travel-Clip-art-PNG-image-715x715.png"
                // src="https://static.wixstatic.com/media/2cd43b_396110c4d1f344a1ab06c292ef67a195~mv2.png/v1/fill/w_358,h_358,fp_0.50_0.50,lg_1,q_95/2cd43b_396110c4d1f344a1ab06c292ef67a195~mv2.png"
                src='https://aviav.ru/wp-content/uploads/2016/09/plane-travel-flight-tourism-travel-icon-png-10-1-300x300.png'
                alt='logo'
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav' className=''>
            <Form
              inline
              className={`${
                location.pathname.includes("country") ? "unVisible" : ""
              } `}
            >
              <div className='input_country'>
                <div className='input_box'>
                  <FormControl
                    autoFocus
                    type='text'
                    placeholder={state.lang.enterCountry}
                    onChange={searchCountry}
                    className=' mr-sm-2 input'
                    value={searchValue}
                  />
                  <div className='btn_clean_form' onClick={cleanInput}>
                    <img
                      width='25'
                      src='http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png'
                    />
                  </div>
                </div>
              </div>
            </Form>
            {searchValue != "" ? (
              <SearchResult langValue={state.lang.value} searchArray={searchArray} />
            ) : (
              ""
            )}

            {/* <div className='btn_group_enter'>
              <Form.Control as='select' onChange={changeLangHandler}>
                <option>EN</option>
                <option>RU</option>
                <option>DE</option>
              </Form.Control>

              {!localStorage.getItem("userData") ? (
                <div>
                  <Button
                    variant='outline-warning'
                    className='ml-3 log_in'
                    onClick={showModalLogIn}
                  >
                    {state.lang.LogIn}
                  </Button>
                  <Button
                    variant='outline-danger'
                    className='ml-3 sing_up'
                    onClick={showModalRegister}
                  >
                    {state.lang.SingUp}
                  </Button>
                </div>
              ) : (
<<<<<<< HEAD
                <div className='header-user'>
======= */}
            {/* ""
              )} */}

            <div className='btn_group_enter'>
              <Form.Control as='select' onChange={changeLangHandler}>
                {state.lang.value === "EN" ? (
                  <option selected>EN</option>
                ) : (
                  <option>EN</option>
                )}
                {state.lang.value === "RU" ? (
                  <option selected>RU</option>
                ) : (
                  <option>RU</option>
                )}
                {state.lang.value === "DE" ? (
                  <option selected>DE</option>
                ) : (
                  <option>DE</option>
                )}
              </Form.Control>

              {!localStorage.getItem("userData") ? (
                <div className='btn_group_enter'>
                  <Button
                    variant='outline-warning'
                    className=' log_in'
                    onClick={showModalLogIn}
                  >
                    {state.lang.LogIn}
                  </Button>
                  <Button
                    variant='outline-danger'
                    className=' sing_up'
                    onClick={showModalRegister}
                  >
                    {state.lang.SingUp}
                  </Button>
                </div>
              ) : (
                <div className='header-user'>
                  <img
                    src={
                      "/uploads/" +
                      JSON.parse(localStorage.getItem("userData")).photo
                    }
                    width='30'
                    alt=''
                  />
                  {/* >>>>>>> 61873f97fa719b3feecd50ea89d01cbf266290b5 */}
                  <span>
                    {JSON.parse(localStorage.getItem("userData")).userName}
                  </span>
                  <a href='' onClick={logoutUser}>
                    {state.lang.LogOut}
                  </a>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        {/* <ScrollToTop /> */}
        <Route exact path='/'>
          <Home
            lang={props.lang}
            countries={props.countries}
            loading={props.loading}
          />
        </Route>

        <Route path='/country/'>
          <Country
            lang={props.lang}
            path={props.path}
            loading={props.loading}
          />
        </Route>
      </Switch>

      {isOpenLogIn && (
        <LogInModalWindow closeModalLigIn={() => setOpenLogIn(false)} />
      )}
      {isOpenRegister && (
        <RegisterModalWindow
          closeModalRegister={() => setOpenRegister(false)}
        />
      )}
    </>
  );
}
export default Header;
