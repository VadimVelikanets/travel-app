import React from "react";
import "./../styles/GalleryHome.css";

export default function GalleryHome() {
  return (
    <>
      <div className="figure_box image_box col-md-6 col-xl-4">
        <img
          className="figure_image"
          src="https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-2-The-Louvre-e1492754751417.jpg"
          alt="country"
        />
        <div className="showplaces_title">
          <h3>Лувр (г. Париж)</h3>
        </div>
      </div>
    </>
  );
}
