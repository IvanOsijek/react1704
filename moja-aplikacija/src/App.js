import logo from './logo.svg';
import './App.css';
// import person from "./components/utilities/Person";
import {sum, pi, imeAplikacije, person, oduzmi} from "./components/utilities"
// import {sum, num1, num2, pi, imeAplikacije} from "./components/utilities/Utility";
import randomstring from "randomstring";
import "./components/komponenta1.jsx"
function App() {
  var zbroj = sum(10, 12) * pi;
  var rndStr = randomstring.generate({length:8});
  /////
  var prva = "prvi tekst";
  var druga = "drugi tekst";
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {imeAplikacije}, {person.name}, {person.godine}, {zbroj}, {rndStr}, {oduzmi(5,3)}
        </p>
        {komponenta1}
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