import React, {useState} from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//   } from 'react-router-dom'; 

import '../../style/loty.css'

// import LotyPoWylocieWMI from './LotyPoWylocieWMI'
// import LotyPoWylocieCRL from './LotyPoWylocieCRL'
// import LotyPoWylocieLUZ from './LotyPoWylocieLUZ'
// import LotyPoPrzylocieLBA from './LotyPoPrzylocieLBA'
// import LotyPoPrzylocieCRL from './LotyPoPrzylocieCRL'
// import LotyPoPrzylocieANR from './LotyPoPrzylocieANR'
// import LotyPoPrzylocieRMI from './LotyPoPrzylocieRMI'
// import LotyPoPrzylocieWMI from './LotyPoPrzylocieWMI'
// import Loty from './Loty'

import LotyPoWylocie from './LotyPoWylocie'
import LotyPoPrzylocie from './LotyPoPrzylocie'


function SzukajLotow (){


    const [wylot, setWylot] = useState('')
    const [przylot, setPrzylot] = useState('')
    const [loty, setLoty] = useState([])


    function handleWylotChange(event){
        setWylot(event.target.value);
    }

    function handlePrzylotChange(event){
        setPrzylot(event.target.value);
    }


    function handleSubmit(event){
        event.preventDefault();
        console.log(wylot, przylot)

        fetch(`http://localhost:8090/lot/${wylot}/${przylot}`, {
            method: "GET",
            dataType: "JSON",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          })
        .then(res => { 
            return res.json()
        }) //result
        .then(json => {
            setLoty(json)
        });
        }
    
    return (
        <div>
  
            <form onSubmit={handleSubmit}>
                <label htmlFor="wylot">Miejsce wylotu: </label>
                <input id="wylot" type="text" value={wylot} autoComplete="off"
                    onChange={handleWylotChange}/>
  
        
                <label htmlFor="przylot">Miejsce przylotu: </label>
                <input id="przylot" type="text" value={przylot} autoComplete="off"
                    onChange={handlePrzylotChange}/>
        
                <button>Szukaj połączenia</button>
              </form>

            <ItemListerLot loty={loty}/>


            <div className="flights-list-default">
                <div className="label">
                    <LotyPoWylocie />
                    </div>
                <div className="label">
                    <LotyPoPrzylocie />
                    </div>
            </div>




            

            {/* <Router>
            <ul className="flights-list">
                    <li>
                    <div className="label">
                    <Link to="/Loty" >Wszystkie loty</Link>
                    <Link to='/LotyPoWylocieWMI' >Z Warszawy (WMI)</Link>
                    <Link to='/LotyPoWylocieCRL' >Z Brukseli (CRL)</Link> 
                    <Link to='/LotyPoWylocieLUZ' >Z Lublina (LUZ)</Link> 
                    </div>

                    <div className="label">
                    <Link to='/LotyPoPrzylocieLBA' >Do Leeds (LBA)</Link> 
                    <Link to='/LotyPoPrzylocieCRL' >Do Brukseli (CRL)</Link> 
                    <Link to='/LotyPoPrzylocieWMI' >Do Warszawy (WMI)</Link> 
                    <Link to='/LotyPoPrzylocieANR' >Do Antwerpii (ANR)</Link> 
                    <Link to='/LotyPoPrzylocieRMI' >Do Rimini (RMI)</Link> 
                    </div>


                    </li>
                </ul>
                <Route extact path="/Loty" component={Loty} />
                <Route extact path="/LotyPoWylocieWMI" component={LotyPoWylocieWMI} />
                <Route extact path="/LotyPoWylocieCRL" component={LotyPoWylocieCRL} />       
                <Route extact path="/LotyPoWylocieLUZ" component={LotyPoWylocieLUZ} />   
                <Route extact path="/LotyPoPrzylocieCRL" component={LotyPoPrzylocieCRL} />   
                <Route extact path="/LotyPoPrzylocieLBA" component={LotyPoPrzylocieLBA} />          
                <Route extact path="/LotyPoPrzylocieWMI" component={LotyPoPrzylocieWMI} />   
                <Route extact path="/LotyPoPrzylocieANR" component={LotyPoPrzylocieANR} />    
                <Route extact path="/LotyPoPrzylocieRMI" component={LotyPoPrzylocieRMI} />       
            </Router> */}

        </div>

    )
  
}

const ItemListerLot = props =>  <div>
    { props.loty.map(lot => (
                <div id="lista-lotow" key={lot.id_lot}>
                <div className="title0">Nr lotu:  { lot.id_lot }</div>
                  <div className="label">
                    <div className="title1">Wylot</div>
                    <div className = "title2">Lotnisko: { lot.lotnisko_wylot } </div>
                    <div className = "title2">Data: { lot.wylot } </div>
                  </div>

                  <div className="label">
                    <div className="title1">Przylot</div>
                    <div className = "title2">Lotnisko: { lot.lotnisko_przylot } </div>
                    <div className = "title2">Data: { lot.przylot } </div>
                  </div>

              </div>
    ))}
    {props.loty.lenght === 0 && <div> Nie znaleziono lotów </div>}
    </div> 


export default SzukajLotow;