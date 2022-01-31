import logo from "./logo.svg";
import "./App.css";
import RouterApp from "./Components/RouterApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouterApp />
      </header>
    </div>
  );
}

export default App;
