import cp1 from "./photos/WelcomePhoto1.jpg";
import cp2 from "./photos/WelcomePhoto4.jpg";
import cp3 from "./photos/WelcomePhoto6.jpg";

import { NavLink } from "react-router-dom";
import "./css/Heading.css";
function Home() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cp1} className="d-block w-100 cp" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cp2} className="d-block w-100 cp" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cp3} className="d-block w-100 cp" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
