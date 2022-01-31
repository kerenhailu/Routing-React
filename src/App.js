import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.Component';
import Orders from './Components/Orders/Orders.Component';
import Menu from './Components/Menu/Menu.Component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Orders" element={<Orders/>}/>
          <Route exact path="/Menu" element={<Menu/>}/>
        </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
