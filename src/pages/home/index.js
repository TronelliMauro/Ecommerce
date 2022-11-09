import React from "react";
import { useEffect, useState } from 'react';

const Home = () => {

    const [subtitle, setSubtitle]= useState('');
    const [title, setTitle]= useState('');
  
    const [clicks, setClicks]= useState(0);
    const [time, setTime]= useState(0);
  
    
    const onHandleClick = () => {
      console.log('Was clicked')
      setTitle('Hello World')
      const date = new Date();
      const day = date.getDay();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const timestamp = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
      /*console.log(timestamp);*/
      setTime(timestamp); 
      setClicks(previousClick=> previousClick + 1);
      
    }   /*agregado clase 5*/
  
    
    console.log(clicks, time)
  
    /*clase 6 agragado*/
  
    useEffect(()=> {
      setTitle('Hello!');
    }, []) /* Cuando se monta */
  
     
    useEffect(()=> {
      if(clicks>2) {
        setSubtitle('Superaste los 2 clicks:  ');
      };
    }, [clicks])  /* Cuando se realiza un cambio */



    return (
        <div>
           
        <header className="App-header">
        <img src="./dog5.png" className="App-logo" alt="logo" />

        <p className="texto-big-index">
            Website in construction. See you soon...
        </p>
        
        <p className="texto-big-index">
          {subtitle}
          {clicks} {time}
        </p>

        <p className="texto-big-index">    
          {title}                      
        </p>            

        <button className="ButtonPpal" onClick={onHandleClick} text= 'Click Me'> Click Here </button>

        <a className="App-link" href="https://www.siruom.com/" target="_blank" rel="noopener noreferrer">
          Click to know about Siruom
        </a> 

       
      </header>

        </div>
    )
}


export default Home;