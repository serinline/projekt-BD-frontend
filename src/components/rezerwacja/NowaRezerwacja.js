import React, {useState} from 'react';
import '../../style/style.css'

function NowaRezerwacja(){

    const [id_pasazer, setIdPasazer] = useState(0);
    const [id_lot, setIdLot] = useState(0);
    const [miejsce, setMiejsce] = useState('');

    const [wolneMsc, setWolneMsc] = useState([]);

    const [id_rez, setIdRez] = useState(0)

    function handleIdPasazerChange(event){
        setIdPasazer(event.target.value);
    }
    function handleIdLotChange(event){
        setIdLot(event.target.value);
    }
    function handleMiejsceChange(event){
        setMiejsce(event.target.value);
    }

    function getDane(event){
        event.preventDefault();
        fetch(`http://localhost:8090/rezerwacja/id`)
        .then(res => {
          console.log(res);
          return res.json()}) //result
        .then(json => {
            setIdRez(json);
        });
    
      }
  

    function getMiejsce(event){
        event.preventDefault();
        console.log(id_lot)
        fetch(`http://localhost:8090/miejsca/${id_lot}`, {
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
            setWolneMsc(json)
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:8090/rezerwacja', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_pasazer,
              id_lot,
              miejsce
            }),
          });

    }
    
    return (
        <div>

            <form onSubmit={getMiejsce}>

            <label htmlFor="id_lot">Wprowadź ID wybranego lotu: </label>
                <input id="id_lot" type="text" value={id_lot} autoComplete="off"
                    onChange={handleIdLotChange}/>
                <button>Sprawdź wolne miejsca</button>
            </form>
            <ItemListerMiejsca wolneMsc={wolneMsc}/>

  
            <form onSubmit={handleSubmit}>

                <label htmlFor="id_pasazer">Wprowadź swoje ID: </label>
                <input id="id_pasazer" type="text" value={id_pasazer} autoComplete="off"
                    onChange={handleIdPasazerChange}/>
        
                <label htmlFor="miejsce">Wpisz wybrane miejsce:</label>
                <input id="miejsce" type="text" value={miejsce} autoComplete="off"
                    onChange={handleMiejsceChange}/>
  
        
                <button>Rezerwuj</button>
              </form>

  
              <div className="label"><button onClick={getDane}>Więcej informacji</button></div>
              
            </div>
      )
}

const ItemListerMiejsca = props => <div>
{ props.wolneMsc.map(msc => (
            <div key={msc.miejsce}>
                <div className="miejsce">{ msc.miejsce }</div>
          </div>
))}
</div>;


export default NowaRezerwacja;