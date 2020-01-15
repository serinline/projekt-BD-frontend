import React, {useState} from 'react';

import '../../style/loty.css'
import ListaLotow from './ListaLotow'


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

        fetch(`https://bd-project.herokuapp.com/lot/${wylot}/${przylot}`, {
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


            <ListaLotow />

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
    {/* {props.loty.lenght === 0 && <div> Nie znaleziono lotów </div>} */}
    </div> 


export default SzukajLotow;