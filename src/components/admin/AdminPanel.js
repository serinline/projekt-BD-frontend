import React, {useState} from 'react';
import '../../style/style.css'

function AdminPanel(){

    const [pasazer, setPasazer] = useState(0)
    const [bagaz, setBagaz] = useState(0)
    const [pracownicy, setPracownicy] = useState([])

    const [ID, setID] = useState(0)
    const [zaloga, setZaloga] = useState([])
    const [pasazerowie, setPasazerowie] = useState([])

    function usunPasazera(event){
        event.preventDefault();


        fetch(`http://localhost:8090/usun/pasazer/${pasazer}`, {
            method: "DELETE",
            dataType: "JSON",
          })
    }

    function usunBagaz(event){
        event.preventDefault();
        fetch(`http://localhost:8090/usun/bagaz/${bagaz}`, {
            method: "DELETE",
            dataType: "JSON",
          })
    }

    function handlePasazerChange(event){
        setPasazer(event.target.value)
    }
    function handleBagazChange(event){
        setBagaz(event.target.value)
    }


    function getPracownikow(event){
        event.preventDefault();
        fetch(`http://localhost:8090/zaloga`, {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })
    .then(res => { 
        return res.json()
    }) 
    .then(json => {
        setPracownicy(json)
    });

    }

    function getPasazerow(event){
        event.preventDefault();
        fetch(`http://localhost:8090/pasazerowie`, {
        method: "GET",
        dataType: "JSON",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })
    .then(res => { 
        return res.json()
    }) 
    .then(json => {
        setPasazerowie(json)
    });

    }

    function getDaneZaloga(event){
        event.preventDefault();

        fetch(`http://localhost:8090/zaloga/${ID}`, {
            method: "GET",
            dataType: "JSON",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          })
        .then(res => { 
            return res.json()
        }) 
        .then(json => {
            setZaloga(json)
        });
    }

    function handleIDChange(event){
        event.preventDefault();
        setID(event.target.value)
    }


    return(
        <div>

            <div className="label1">
                <div className="title1">Usuń pasażera z bazy:</div>
                    <form onSubmit={usunPasazera}>
                        <label htmlFor="pasazer">ID do usunięcia: </label>
                        <input id="pasazer" type="number" value={pasazer} autoComplete="off"
                            onChange={handlePasazerChange}/>
                        <button>Potwierdź</button>
                    </form>

                <div className="title1">Usuń bagaż z bazy:</div>
                    <form onSubmit={usunBagaz}>
                        <label htmlFor="bagaz">ID do usunięcia: </label>
                        <input id="bagaz" type="number" value={bagaz} autoComplete="off"
                            onChange={handleBagazChange}/>
                        <button>Potwierdź</button>
                    </form>

                <button id='pracownicy-lista' onClick={getPasazerow}>Wyświetl wszystkich pasażerów</button>
                <ItemListerPasazerowie pasazerowie={pasazerowie}/>

            </div>

            <div className="label2">

                <button id='pracownicy-lista' onClick={getPracownikow}>Wyświetl wszystkich pracowników</button>
                <ItemListerPracownicy pracownicy={pracownicy}/>

                <form onSubmit={getDaneZaloga}>
                    <label className="title1" htmlFor="zaloga">Wybierz nr lotu aby wyświetlić załogę </label>
                        <input id="zaloga" type="number" value={ID} autoComplete="off"
                            onChange={handleIDChange}/>
                        <button>Wyświetl załogę</button>
                </form>
                <ItemListerZaloga zaloga={zaloga} /> 



            </div>
  
              
        </div>
      );
}

const ItemListerPracownicy = props =>  <div>
    { props.pracownicy.map(pracownik => (
                <div id="lista-pracownikow" key={pracownik.id_pracownik}>
                  <div className="label">
                    <div className="title1">ID: { pracownik.id_pracownik }</div>
                    <div className = "title2">Imie: { pracownik.imie } </div>
                    <div className = "title2">Nazwisko: { pracownik.nazwisko } </div>
                    <div className = "title2">Stanowisko: { pracownik.stanowisko } </div>
                    <div className = "title2">Obywatelstwo: { pracownik.obywatelstwo } </div>
                  </div>

              </div>
    ))}
    </div>;

const ItemListerZaloga = props => <div>
        { props.zaloga.map(one => (
            <div id="lista-pracownikow" key={one.id_pracownik}>
                  <div className="label">
                    <div className="title1">ID: { one.id_pracownik }</div>
                    <div className = "title2">Imie: { one.imie } </div>
                    <div className = "title2">Nazwisko: { one.nazwisko } </div>
                    <div className = "title2">Stanowisko: { one.stanowisko } </div>
                    <div className = "title2">Obywatelstwo: { one.obywatelstwo } </div>
                  </div>

          </div>
    ))}
    </div>;


const ItemListerPasazerowie = props => <div>
        { props.pasazerowie.map(pas => (
            <div id="lista-pracownikow" key={pas.id_pasazer}>
                  <div className="label">
                    <div className="title1">ID: { pas.id_pasazer }</div>
                    <div className = "title2">Imie: { pas.imie } </div>
                    <div className = "title2">Nazwisko: { pas.nazwisko } </div>
                    <div className = "title2">Pesel: { pas.pesel } </div>
                    <div className = "title2">Obywatelstwo: { pas.obywatelstwo } </div>
                  </div>

          </div>
    ))}
    </div>;


export default AdminPanel;