import React, {useState} from 'react';
import '../../style/style.css'

function DodajPasazera(){

    const [pasazer, setPasazer] = useState([]);
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [pesel, setPesel] = useState(0);
    const [obywatelstwo, setObywatelstwo] = useState('');

    function handleImieChange(event) {
        setImie(event.target.value);
    }
    function handleNazwiskoChange(event) {
        setNazwisko(event.target.value);
    }
    function handlePeselChange(event) {
        setPesel(event.target.value);
    }
    function handleObywatelstwoChange(event) {
        setObywatelstwo(event.target.value);
    }

    function getDane(){

      fetch(`https://bd-project.herokuapp.com/pasazer/id`)
      .then(res => {
        console.log(res);
        return res.json()}) //result
      .then(json => {
          setPasazer(json);
      });
  
    }

    function handleSubmit(event){
      event.preventDefault();
    
      var value = fetch('https://bd-project.herokuapp.com/pasazer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imie,
          nazwisko,
          pesel,
          obywatelstwo
        }),
      });
      console.log(value);
      if (value > 0 ){
        getDane();
      } 

    }

    


    return (
      <div>

          <form onSubmit={handleSubmit}>
              <label htmlFor="imie">Imię: </label>
              <input id="imie" type="text" value={imie} autoComplete="off"
                  onChange={handleImieChange}/>

      
              <label htmlFor="nazwisko">Nazwisko: </label>
              <input id="nazwisko" type="text" value={nazwisko} autoComplete="off"
                  onChange={handleNazwiskoChange}/>
      
              <label htmlFor="pesel">Pesel:</label>
              <input id="pesel" type="text" value={pesel} autoComplete="off"
                  onChange={handlePeselChange}/>

              <label htmlFor="obywatelstwo">Obywatelstwo:</label>
              <input id="obywatelstwo" type="text" value={obywatelstwo} autoComplete="off"
                  onChange={handleObywatelstwoChange}/>
      
              <button>Potwierdź zapis</button>
            </form>

            <ItemListerPasazer pasazer={pasazer}/>

            
          </div>
    )
}

const ItemListerPasazer = props => <h2> Twój identyfikator: {props.pasazer++} </h2>;


export default DodajPasazera;

