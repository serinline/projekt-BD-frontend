import React, {useState} from 'react';
import '../../style/style.css'

function NowaRezerwacja(){

    const [id_pasazer, setIdPasazer] = useState(0);
    const [id_lot, setIdLot] = useState(0);
    const [miejsce, setMiejsce] = useState('');

    const [wolneMsc, setWolneMsc] = useState([]);

    const [id_rez, setIdRez] = useState([])

    const [samolot, setSamolot] = useState([])
    const [zaloga, setZaloga] = useState([])

    function handleIdPasazerChange(event){
        setIdPasazer(event.target.value);
    }
    function handleIdLotChange(event){
        setIdLot(event.target.value);
    }
    function handleMiejsceChange(event){
        setMiejsce(event.target.value);
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

        fetch(`http://localhost:8090/miejsca/${miejsce}/${id_lot}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            miejsce,
            id_lot
        }),
        });          
    }


    function getIdRez(event){
        event.preventDefault();
        fetch(`http://localhost:8090/rezerwacja/id`)
        .then(res => {
          console.log(res);
          return res.json()}) //result
        .then(json => {
            setIdRez(json);
        });
    }
    
    function getDaneSamolot(event){
        event.preventDefault();

        //samolot
        fetch(`http://localhost:8090/samolot/${id_rez}`, {
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
            setSamolot(json)
        });

        // //zaloga
        // fetch(`http://localhost:8090/zaloga/${id_rez}`, {
        //     method: "GET",
        //     dataType: "JSON",
        //     headers: {
        //       "Content-Type": "application/json; charset=utf-8",
        //     }
        //   })
        // .then(res => { 
        //     return res.json()
        // }) //result
        // .then(json => {
        //     setZaloga(json)
        // });
    }

    function getDaneZaloga(event){
        event.preventDefault();

        // //samolot
        // fetch(`http://localhost:8090/samolot/${id_rez}`, {
        //     method: "GET",
        //     dataType: "JSON",
        //     headers: {
        //       "Content-Type": "application/json; charset=utf-8",
        //     }
        //   })
        // .then(res => { 
        //     return res.json()
        // }) //result
        // .then(json => {
        //     setSamolot(json)
        // });

        //zaloga
        fetch(`http://localhost:8090/zaloga/${id_rez}`, {
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
            setZaloga(json)
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


              <div className="label1"><button onClick={getIdRez}>Pobierz ID swojej rezerwacji</button></div>
              <ItemListerIdRezerwacji id_rez={id_rez} />

  
              <div className="label2"><button onClick={getDaneSamolot}>Model samolotu</button></div>
              <div className="label2"><button onClick={getDaneZaloga}>Załoga samolotu</button></div>

              <ItemListerZaloga zaloga={zaloga} />
              <ItemListerSamolot samolot={samolot} />
              
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

const ItemListerIdRezerwacji = props => <h2> {props.id_rez} </h2>;


const ItemListerZaloga = props => <div>
        { props.zaloga.map(one => (
            <div id="lista-lotow" key={one.id_pracownik}>
                <div className = "title2">Imię: { one.imie } </div>
                <div className = "title2">Nazwisko: { one.nazwisko } </div>
                <div className = "title2">Obywatelstwo: { one.obywatelstwo } </div>
                <div className = "title2">Stanowisko: { one.stanowisko } </div>
          </div>
))}
</div> 


const ItemListerSamolot = props => <div>
{ props.samolot.map(one => (
            <div id="lista-lotow" key={one.id_pracownik}>
                <div className = "title2">Marka: { one.marka } </div>
                <div className = "title2">Model: { one.model } </div>
          </div>
))}
</div> 

export default NowaRezerwacja;