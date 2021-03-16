import React from "react";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../../context/authContext";
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

export default function Header(props) {
  const [isOpenLogIn, setOpenLogIn] = useState(false);
  const [isOpenRegister, setOpenRegister] = useState(false);

  const auth = useContext(authContext);

  const showModalLogIn = () => {
    setOpenLogIn({ isOpenLogIn: true });
    setOpenRegister(false);
  };

  const showModalRegister = () => {
    setOpenRegister({ isOpenRegister: true });
    setOpenLogIn(false);
  };
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
    window.location.reload();
  };

  //Модуль поиска
  const [searchValue, setSearchValue] = useState("");
  const [searchArray, setTheArray] = useState([]);

  const searchCountry = (e) => {
    setTheArray([]);
    const searchWord = e.target.value;

    setSearchValue(searchWord);
    props.countries
      .filter((country) =>
        country.lang.EN.country
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
      )
      .map((searchResult) =>
        setTheArray((searchArray) => [...searchArray, searchResult])
      );
  };

  //очистка инпута
  const cleanInput = () => {
    setSearchValue("");
  };
  //Смена языка

  const changeLang = (e) => {
    props.changeLang(e.target.value);
    console.log("lang -", e.target.value);
  };

  // const headerView = () => {
  // let locationPath = useLocation();
  // console.log(locationPath);
  // return <span>Path : {location.pathname}</span>
  // };

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
          <Navbar.Brand href='/'>
            <img
              width='100'
              // src='https://static.wixstatic.com/media/2cd43b_a7e42622584e4cfd8e160f3778cdda1c~mv2.png/v1/fill/w_518,h_264,fp_0.50_0.50,lg_1,q_95/2cd43b_a7e42622584e4cfd8e160f3778cdda1c~mv2.png'
              // src='https://freepikpsd.com/wp-content/uploads/2019/10/traveling-png-2-Transparent-Images.png'
              // src='https://webstockreview.net/images/clipart-airplane-journey-2.png'
              // src='https://www.searchpng.com/wp-content/uploads/2019/02/Travel-Clip-art-PNG-image-715x715.png'
              // src='https://static.wixstatic.com/media/2cd43b_396110c4d1f344a1ab06c292ef67a195~mv2.png/v1/fill/w_358,h_358,fp_0.50_0.50,lg_1,q_95/2cd43b_396110c4d1f344a1ab06c292ef67a195~mv2.png'
              src='https://aviav.ru/wp-content/uploads/2016/09/plane-travel-flight-tourism-travel-icon-png-10-1-300x300.png'
              alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className=''>
            <Form
              inline
              className={`${
                window.location.pathname.includes("/country/")
                  ? "unVisible"
                  : ""
              } `}
            >
              <div className='input_country'>
                <div className='input_box'>
                  <FormControl
                    autoFocus
                    type='text'
                    placeholder='Enter country'
                    onChange={searchCountry}
                    className=' mr-sm-2 input'
                    value={searchValue}
                  />
                  <Button
                    variant='secondary'
                    className='btn_clean_form'
                    onClick={cleanInput}
                  >
                    &times;
                  </Button>
                </div>

                {/* <Button variant='warning' className='search'>
                  Search
                </Button> */}
              </div>
            </Form>
            {searchValue != "" ? (
              <SearchResult searchArray={searchArray} />
            ) : (
              ""
            )}

            <div className='btn_group_enter'>
              <Form.Control
                as='select'
                className='selecting_language ml-4 form-control'
                onChange={changeLang}
              >
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
                    Log In
                  </Button>
                  <Button
                    variant='outline-danger'
                    className='ml-3 sing_up'
                    onClick={showModalRegister}
                  >
                    Sing Up
                  </Button>
                </div>
              ) : (
                <div className='header-user'>
                  <span>
                    {JSON.parse(localStorage.getItem("userData")).email}
                  </span>
                  <a href='' onClick={logout}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Home} />
          <Route path='/country/' component={Country} /> */}
          <Route exact path='/'>
            <Home lang={props.lang} countries={props.countries} />
          </Route>
          <Route path='/country/'>
            <Country lang={props.lang} path={props.path} />
          </Route>
        </Switch>
      </Router>
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
