import React, {useState} from 'react';
import '../../style/style.css'
import Select from "react-select";


function NowaRezerwacja(){

    const [id_pasazer, setIdPasazer] = useState(0);
    const [id_lot, setIdLot] = useState(0);
    const [loty, setLoty] = useState([])

    const [id_rez, setIdRez] = useState([])

    const [samolot, setSamolot] = useState([])

    function handleIdPasazerChange(event){
        setIdPasazer(event.target.value + 1);
    }
    function handleIdLotChange(event){
        setIdLot(event.target.value);
    }

    

    function handleSubmit(event){
        event.preventDefault();
        fetch('https://bd-project.herokuapp.com/rezerwacja', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_pasazer,
              id_lot
            }),
          });

          getIdRez();
 
    }

    function getLoty(event){
        event.preventDefault();
        fetch(`https://bd-project.herokuapp.com/lot`, {
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


    function getIdRez(){
        fetch(`https://bd-project.herokuapp.com/rezerwacja/id`)
        .then(res => {
          console.log(res);
          return res.json()}) 
        .then(json => {
            json = json + 1;
            console.log(json);
            setIdRez(json);
        });
    }
    
    function getDaneSamolot(event){
        event.preventDefault();


        fetch(`https://bd-project.herokuapp.com/samolot/${id_lot}`, {
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
            setSamolot(json)
        });

    }




    return (
        <div>
            <div className="label1">

                <form>
                      <button className="" name="wszystkie-loty" value="all" onClick={getLoty}>Wszystkie loty</button>
                  </form>
                  <select onChange={handleIdLotChange}>
                     {loty.map((lot) => <option key={lot.id_lot} value={lot.id_lot}> Id: {lot.id_lot} : {lot.lotnisko_wylot} : { lot.wylot } -> {lot.lotnisko_przylot } : { lot.przylot }</option>)}
                    </select>

                     <button onClick={getDaneSamolot}>Model samolotu</button>
                <ItemListerSamolot samolot={samolot} />

            </div>

            <div className="label2">

                <form onSubmit={handleSubmit}>
                {/* <label htmlFor="id_lot">Wprowadź ID wybranego lotu: </label>
                    <input id="id_lot" type="text" value={id_lot} autoComplete="off"
                        onChange={handleIdLotChange}/> */}

                    <label htmlFor="id_pasazer">Wprowadź swoje ID: </label>
                    <input id="id_pasazer" type="text" value={id_pasazer} autoComplete="off"
                        onChange={handleIdPasazerChange}/>

                    <button className="rezerwacja">Rezerwuj</button>
                </form>


                {/* <button className="rezerwacja" onClick={getIdRez}>Pobierz ID swojej rezerwacji</button> */}
                <ItemListerIdRezerwacji id_rez={id_rez} />

              
                </div>
            </div>
      )
}

const ItemListerIdRezerwacji = props => <h2> Numer Twojej rezerwacji: {props.id_rez} </h2>;

const ItemListerSamolot = props => <div>
{ props.samolot.map(one => (
            <div id="lista-lotow" key={one.id_pracownik}>
                <div className = "title2">Marka: { one.marka } </div>
                <div className = "title2">Model: { one.model } </div>
          </div>
))}
</div> 


export default NowaRezerwacja;