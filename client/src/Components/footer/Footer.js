import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

export default function Footer() {
  return (
    <div className='d-flex flex-column footer-container'>
      <footer className='footer container-fluid '>
        <div>
          <a href='https://rs.school/js/'>
            <img
              className='mr-2'
              src='https://rs.school/images/rs_school_js.svg'
              alt='Logo RS-school'
              width='80'
            />
          </a>
          <span>&copy; 2021</span>
        </div>
        <div className='link_box ml-auto'>
          <a href='https://github.com/VadimVelikanets'>Vadim</a>
          <a href='https://github.com/olgamartinchik' className='ml-3'>
            Olga
          </a>
          <a href='https://github.com/ebces' className='ml-3'>
            Pavel
          </a>
        </div>
      </footer>
    </div>
  );
}
