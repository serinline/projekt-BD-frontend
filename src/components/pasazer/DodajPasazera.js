import React, {useState, Component} from 'react';

// class DodajPasazera extends Component {
    
//     constructor() {
//         super();
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
//     const [imie, setImie] = useState('');
    
//       handleSubmit(event) {
//         event.preventDefault();
        
//         fetch('http://localhost:8090/pasazer', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             data
//           }),
//         });
//       }
    
//       render() {
//         return (
            
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="imie">Imię: </label>
//             <input id="imie" name="imie" type="text" />
    
//             <label htmlFor="nazwisko">Nazwisko: </label>
//             <input id="nazwisko" name="nazwisko" type="text" />
    
//             <label htmlFor="pesel">Pesel:</label>
//             <input id="pesel" name="pesel" type="number" />

//             <label htmlFor="obywatelstwo">Obywatelstwo:</label>
//             <input id="obywatelstwo" name="obywatelstwo" type="text" />
    
//             <button>Potwierdź zapis</button>
//           </form>
//         );
//       }
    
// }

// export default DodajPasazera;

function DodajPasazera(props){
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

    function handleSubmit(){
    
           fetch('http://localhost:8090/pasazer', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                imie: {imie},
                nazwisko: {nazwisko},
                pesel: {pesel},
                obywatelstwo: {obywatelstwo}
              }),
            });
    }


    return (

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
    )
}
export default DodajPasazera;

