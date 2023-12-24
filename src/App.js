// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import PasswordGenerator from "./components/PasswordSection";
// import CopyToClipboard from "./components/Copy"

function App() {
  return (
    <div className="App flex flex-col align-middle justify-center box-border relative h-screen bg-black">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <PasswordGenerator />
    </div>
  );
}

export default App;
