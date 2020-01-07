import React, {Component} from 'react'
import Loty from './components/loty/Loty'
import LotyPoWylocieWMI from './components/loty/LotyPoWylocieWMI'
import LotyPoWylocieCRL from './components/loty/LotyPoWylocieCRL'
import LotyPoWylocieLUZ from './components/loty/LotyPoWylocieLUZ'
import LotyPoPrzylocieLBA from './components/loty/LotyPoPrzylocieLBA'
import LotyPoPrzylocieCRL from './components/loty/LotyPoPrzylocieCRL'
import LotyPoPrzylocieANR from './components/loty/LotyPoPrzylocieANR'
import LotyPoPrzylocieRMI from './components/loty/LotyPoPrzylocieRMI'
import LotyPoPrzylocieWMI from './components/loty/LotyPoPrzylocieWMI'
import DodajPasazera from './components/rejestracja/DodajPasazera'
import DodajBagaz from './components/rejestracja/DodajBagaz'
import LotyPoPrzylocieWylocie from './components/loty/LotyPoPrzylocieWylocie'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'; 


class App extends Component {



  render(){

      return (
        <div className="App">
            <Router>
            <div className="BottomMenu">
               <ul className="nav">
                    <li>
                    <Link to="/App" >Main page</Link>
                    <h>     </h>
                    <Link to="/Loty" >Wszystkie</Link>
                    <h>     </h>
                    <Link to="/LotyPoPrzylocieWylocie" >Szukaj połączeń</Link>
                    <h>     </h>
                    <Link to='/LotyPoWylocieWMI' >Z Warszawy</Link>
                    <h>     </h>
                    <Link to='/LotyPoWylocieCRL' >Z Brukseli</Link> 
                    <h>     </h>
                    <Link to='/LotyPoWylocieLUZ' >Z Lublina</Link> 
                    <h>     </h>
                    <Link to='/LotyPoPrzylocieLBA' >Do LBA</Link> 
                    <h>     </h>
                    <Link to='/LotyPoPrzylocieCRL' >Do CRL</Link> 
                    <h>     </h>
                    <Link to='/LotyPoPrzylocieWMI' >Do WMI</Link> 
                    <h>     </h>
                    <Link to='/LotyPoPrzylocieANR' >Do ANR</Link> 
                    <h>     </h>
                    <Link to='/LotyPoPrzylocieRMI' >Do RMI</Link> 


                    </li>
                  </ul>
                  
                <Route extact path="/." component={App} />
                <Route extact path="/Loty" component={Loty} />
                <Route extact path="/LotyPoPrzylocieWylocie" component={LotyPoPrzylocieWylocie} />
                <Route extact path="/LotyPoWylocieWMI" component={LotyPoWylocieWMI} />
                <Route extact path="/LotyPoWylocieCRL" component={LotyPoWylocieCRL} />       
                <Route extact path="/LotyPoWylocieLUZ" component={LotyPoWylocieLUZ} />   
                <Route extact path="/LotyPoPrzylocieCRL" component={LotyPoPrzylocieCRL} />   
                <Route extact path="/LotyPoPrzylocieLBA" component={LotyPoPrzylocieLBA} />          
                <Route extact path="/LotyPoPrzylocieWMI" component={LotyPoPrzylocieWMI} />   
                <Route extact path="/LotyPoPrzylocieANR" component={LotyPoPrzylocieANR} />    
                <Route extact path="/LotyPoPrzylocieRMI" component={LotyPoPrzylocieRMI} />       
              </div>
            </Router>

            <Router>
            <div className="BottomMenu">
               <ul className="nav">
                    <li>
                    <h>     </h>
                    <Link to="/DodajPasazera" >Zarejestruj sie</Link>
                    <Link to="/DodajBagaz" >Dodaj bagaz</Link>
                 </li>
                  </ul>
                  
                
                <Route extact path="/DodajPasazera" component={DodajPasazera} /> 
                <Route extact path="/DodajBagaz" component={DodajBagaz} /> 
              </div>
            </Router>
        </div>
      );
  }
}

export default App;
