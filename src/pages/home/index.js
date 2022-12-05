import React from "react";
import "../../components/itemCount";
import "../../App.css";

const Home = () => {


  return (
    <>
      <header className="App-header">
        <div className="img-home">
          <img src="./fondo4.png" className="img-product" alt="Wheelchair_image" />
          <img src="./fle.png" className="App-back-logo" alt="Wheelchair_image" />
          <img src="./sillaup.png" className="App-logo" alt="logo" />
          <a className="App-link" href="https://www.siruom.com/" target="_blank" rel="noopener noreferrer">
            <button className="ButtonPpal btn-home" text="Click Me">
              {" "}
              Learn more{" "}
            </button>
          </a>
        </div>


      </header>
    </>
  );
};

export default Home;
