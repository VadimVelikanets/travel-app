import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../styles/Country.css";
import { FormControl, Navbar, Container, Form, Button } from "react-bootstrap";

export default function Country() {
  return (
    <div>
      <main className='main'>
        <section>
          <Container>
            <p>Country</p>
            <img
              height='600'
              className='d-block w-100'
              src='https://klike.net/uploads/posts/2019-11/1574605275_11.jpg'
              alt='nature'
            />
          </Container>
        </section>
      </main>
    </div>
  );
}
