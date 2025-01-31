import React, {useState} from 'react';
import '../../style/style.css'

function AdminPanel(){

    const [pasazer, setPasazer] = useState(0)
    const [bagaz, setBagaz] = useState(0)
    const [pracownicy, setPracownicy] = useState([])

    const [ID, setID] = useState(0)
    const [zaloga, setZaloga] = useState([])
    const [pasazerowie, setPasazerowie] = useState([])

    const [rezerwacje, setRezerwacje] = useState([])

    const [bagaze, setBagaze] = useState([])

    function usunPasazera(event){
        event.preventDefault();
        fetch(`https://bd-project.herokuapp.com/usun/pasazer/${pasazer}`, {
            method: "DELETE",
            dataType: "JSON",
          })
    }

    function usunBagaz(event){
        event.preventDefault();
        fetch(`https://bd-project.herokuapp.com/usun/bagaz/${bagaz}`, {
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
        fetch(`https://bd-project.herokuapp.com/zaloga`, {
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
        fetch(`https://bd-project.herokuapp.com/pasazerowie`, {
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

    function getRezerwacje(event){
        event.preventDefault();
        fetch(`https://bd-project.herokuapp.com/rezerwacje`, {
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
        setRezerwacje(json)
    });

    }

    function getBagaze(event){
        event.preventDefault();
        fetch(`https://bd-project.herokuapp.com/bagaze`, {
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
        setBagaze(json)
    });

    }

    function getDaneZaloga(event){
        event.preventDefault();

        fetch(`https://bd-project.herokuapp.com/zaloga/${ID}`, {
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

                <button id='pracownicy-lista' onClick={getBagaze}>Wyświetl bagaże</button>
                <ItemListerBagaze bagaze={bagaze}/>

                <button id='pracownicy-lista' onClick={getRezerwacje}>Wyświetl rezerwacje</button>
                <ItemListerRezerwacje rezerwacje={rezerwacje}/>

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

const ItemListerBagaze = props =>  <div>
    { props.bagaze.map(bagaz => (
                <div id="lista-pracownikow" key={bagaz.id_bagaz}>
                  <div className="label">
                    <div className="title1">ID: { bagaz.id_bagaz }</div>
                    <div className = "title2">Rezerwacja: { bagaz.id_rezerwacja } </div>
                    <div className = "title2">Waga: { bagaz.waga } </div>
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


const ItemListerRezerwacje = props => <div>
        { props.rezerwacje.map(rez => (
            <div id="lista-rezeracji" key={rez.id_rezerwacja}>
                  <div className="label">
                    <div className="title1">ID: { rez.id_rezerwacja }</div>
                    <div className = "title2">Id pasażera: { rez.id_pasazer } </div>
                    <div className = "title2">Id lotu: { rez.id_lot } </div>
                  </div>

          </div>
    ))}
    </div>;


export default AdminPanel;