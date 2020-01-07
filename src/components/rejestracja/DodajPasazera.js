import React, {useState, Component} from 'react';

function DodajPasazera(props){


    this.state = {
        pasazer: [],
        isLoaded: false,
      }


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

      fetch(`http://localhost:8090/pasazer/pesel/${pesel}`)
      .then(res => res.json()) //result
      .then(json => {
          this.setState({
              isLoaded: true,
              pasazer: json
          })
      });

      return (
        <div>
            { pasazer.map(one => (
              <div key={one.id_pasazer}>
                  <div class="title1">Twoje id:  { one.id_pasazer }</div>
              </div>
            ))}
        </div>
      )
  
    }

    function handleSubmit(){
    
           fetch('http://localhost:8090/pasazer', {
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


            <button onClick={getDane}>Pobierz swoje id</button>
            
          </div>
    )
}
export default DodajPasazera;

