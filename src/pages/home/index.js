import React from "react";
import { useEffect, useState } from "react";
import "../../components/itemCount";
import ItemCount from "../../components/itemCount";
import "../../App.css";

const Home = () => {
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");

  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);

  const onHandleClick = () => {
    console.log("Was clicked");
    setTitle("Hello World");
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timestamp = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
    
    setTime(timestamp);
    setClicks((previousClick) => previousClick + 1);
  }; 

  console.log(clicks, time);

  

  useEffect(() => {
    setTitle("Hello!");
  }, []); 

  useEffect(() => {
    if (clicks > 2) {
      setSubtitle("Superaste los 2 clicks:  ");
    }
  }, [clicks]); 

  return (
    <>
      <header className="App-header">
        <div className="img-home">
          <img src="./fondo4.png" className="img-product" alt="Wheelchair_image" />
          <img src="./fle.png" className="App-back-logo" alt="Wheelchair_image" />
          <img src="./sillaup.png" className="App-logo" alt="logo" />
          <a className="App-link" href="https://www.siruom.com/" target="_blank" rel="noopener noreferrer">
            <button className="ButtonPpal btn-home" onClick={onHandleClick} text="Click Me">
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
