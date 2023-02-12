import logo from './logo.svg';
import './App.css';
import { Analytics } from 'aws-amplify';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Analytics.record('App component mounted');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload with AWS amplify.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
