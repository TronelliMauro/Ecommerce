import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; /*Debo agregar para la navegacion */



/*firebase*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/cart.context';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU-qKTUjCrrkhaaF6fvrQaf-Tz7l1lr2I",
  authDomain: "ecommerce-edites.firebaseapp.com",
  projectId: "ecommerce-edites",
  storageBucket: "ecommerce-edites.appspot.com",
  messagingSenderId: "755845801177",
  appId: "1:755845801177:web:dca3a71a14d0c9cb834ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('app',app);

/*firebase finish*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
     <CartProvider> 
      <App />
    </CartProvider> 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
