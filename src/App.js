import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
        <img src="http://1.bp.blogspot.com/-3Q2MZZgvDYY/UJNKs2YIKoI/AAAAAAAAixI/wPQcxuNCJuM/s1600/gatos%2By%2Bperros%2Bpng%2B(12).png" className="App-logo" alt="logo" />
                
        <p className="texto-big-index">
            Website in construction. See you soon...
        </p>
        <a
          className="App-link"
          href="https://www.siruom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to know Siruom
        </a>
      </header>
    
   
    </div>

    
    
  );
}

export default App;
