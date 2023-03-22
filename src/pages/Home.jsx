import React from "react";
import bg from './../../public/assets/bg1.jpg'
import {Helmet} from "react-helmet";
import Products from "../component/home/Products";
const Home = () => {
  
  return (
    <>
    <Helmet>
          <title>Home page</title>
    </Helmet>
      <div className="hero">
        <div className="card bg-dark text-white border-0  position-relative">
          <img src={bg} className="card-img" alt="Background Imga" height={500} />
          <div className="card-img-overlay  d-flex align-items-center justify-content-end text-end">
            <div className="container" >
            <h5 className="card-title display-3 mb-0">NEW SEASON ARRIVALS </h5>
            <p className="card-text lead fs-2">
              CLICK OUT ALL THE TRENDS
            </p>

            </div>
          </div>
        </div>
      </div>
      <Products/>
    </>
  );
};

export default Home;
