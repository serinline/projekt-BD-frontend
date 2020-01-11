import React, {useState} from 'react';
import '../../style/style.css'

function AdminPanel(){

    const [pasazer, setPasazer] = useState(0)
    const [bagaz, setBagaz] = useState(0)
    const [pracownicy, setPracownicy] = useState([])

    function usunPasazera(event){
        event.preventDefault();


        fetch(`http://localhost:8090/usun/pasazer/${pasazer}`, {
            method: "DELETE",
            dataType: "JSON",
          })
        // .then(res => { 
        //     res.json()
       //}) 
    }

    function usunBagaz(event){
        event.preventDefault();
        fetch(`http://localhost:8090/usun/bagaz/${bagaz}`, {
            method: "DELETE",
            dataType: "JSON",
          })
        // .then(res => { 
        //     return res.json()
        //}) 
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
    }) //result
    .then(json => {
        setPracownicy(json)
    });

    }

    return(
        <div>

            <div className="label1">
                <div className="title1">Usuń pasażera z bazy:</div>
                    <form onSubmit={usunPasazera}>
                        <label htmlFor="pasazer">ID do usunięcia: </label>
                        <input id="pasazer" type="text" value={pasazer} autoComplete="off"
                            onChange={handlePasazerChange}/>
                        <button>Potwierdź</button>
                    </form>

                <div className="title1">Usuń bagaż z bazy:</div>
                    <form onSubmit={usunBagaz}>
                        <label htmlFor="bagaz">ID do usunięcia: </label>
                        <input id="bagaz" type="text" value={bagaz} autoComplete="off"
                            onChange={handleBagazChange}/>
                        <button>Potwierdź</button>
                    </form>

            </div>

            <div className="label2">

                <button onClick={getPracownikow}>Wyświetl pracowników</button>
                <ItemListerPracownicy pracownicy={pracownicy}/>
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


export default AdminPanel;