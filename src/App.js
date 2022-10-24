import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
        <img src="./dog5.png" className="App-logo" alt="logo" />
        <p className="texto-big-index">
            Website in construction. See you soon...
        </p>
        <a
          className="App-link"
          href="https://www.siruom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to know about Siruom
        </a>
      </header>
    
   
    </div>

    
    
  );
}

export default App;
