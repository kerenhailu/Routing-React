import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.Component';
import Footer from './Footer/Footer.Component';
import Header from './Header/Header.Component';
import Home from './Home/Home.Component';
import Orders from './Orders/Orders.Component';
import Menu from './Menu/Menu.Component';
const RouterApp=()=>{
    return(<BrowserRouter>
        <Navbar/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Orders" element={<Orders/>}/>
          <Route exact path="/Menu" element={<Menu/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )}
export default RouterApp;