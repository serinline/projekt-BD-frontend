import React, {useState, Component} from 'react';


function NowaRezerwacja(props){

    const [id_pasazer, setIdPasazer] = useState(0);
    const [id_lot, setIdLot] = useState(0);
    const [miejsce, setMiejsce] = useState('');

    function handleIdPasazerChange(event){
        setIdPasazer(event.target.value);
    }
    function handleIdLotChange(event){
        setIdLot(event.target.value);
    }
    function handleMiejsceChange(event){
        setMiejsce(event.target.value);
    }

    function getDane(){}

    function getMiejsce(){}
    
    return (
        <div>
            <button onClick={getMiejsce}>Pokaż dostępne miejsca</button>
  
            <form onSubmit={handleSubmit}>

                <label htmlFor="id_pasazer">Wprowadź swoje ID: </label>
                <input id="id_pasazer" type="text" value={id_pasazer} autoComplete="off"
                    onChange={handleIdPasazerChange}/>
  
        
                <label htmlFor="id_lot">Wprowadź ID wybranego lotu: </label>
                <input id="id_lot" type="text" value={id_lot} autoComplete="off"
                    onChange={handleIdLotChange}/>
        
                <label htmlFor="miejsce">Wpisz wybrane miejsce:</label>
                <input id="miejsce" type="text" value={miejsce} autoComplete="off"
                    onChange={handleMiejsceChange}/>
  
        
                <button>Rezerwuj</button>
              </form>
  
              <button onClick={getDane}>Więcej informacji</button>
              
            </div>
      )
}