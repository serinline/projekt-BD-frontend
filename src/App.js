import React, {Component} from 'react'
import DodajPasazera from './components/rejestracja/DodajPasazera'
import DodajBagaz from './components/rejestracja/DodajBagaz'
import SzukajLotow from './components/loty/SzukajLotow'
import MainPage from './components/MainPage'
import NowaRezerwacja from './components/rezerwacja/NowaRezerwacja'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'; 

import './App.css'
import header from './images/header.png'

class App extends Component {
  render(){

      return (
        <div className="App">

            <div className="Header">
              <img src={header} width="650"/>
            </div>

            <Router>
            <div className="BottomMenu">
               <ul className="nav">
                    <li>
                    <h>     </h>
                    <Link to="/MainPage" >Instrukcja rezerwacji</Link>
                    <Link to="/SzukajLotow" >Szukaj lotów</Link>
                    <Link to="/DodajPasazera" >Zarejestruj się</Link>
                    <Link to="/NowaRezerwacja" >Rezerwacje</Link>
                    <Link to="/DodajBagaz" >Dodaj bagaż</Link>
                 </li>
                  </ul>
                  
                  <Route extact path="/MainPage" component={MainPage} />
                  <Route extact path="/SzukajLotow" component={SzukajLotow} />
                  <Route extact path="/DodajPasazera" component={DodajPasazera} /> 
                  <Route extact path="/NowaRezerwacja" component={NowaRezerwacja} />
                  <Route extact path="/DodajBagaz" component={DodajBagaz} /> 
              </div>
            </Router>



            
        </div>
      );
  }
}

export default App;
