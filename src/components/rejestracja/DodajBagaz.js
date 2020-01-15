import React, {useState} from 'react';
import '../../style/style.css'

function DodajBagaz(props){

    const [id_rezerwacja, setId] = useState(0);
    const [waga, setWaga] = useState(0);

    function handleIdChange(event) {
        setId(event.target.value);
    }
    function handleWagaChange(event) {
        setWaga(event.target.value);
    }

    function handleSubmit(){
    
           fetch('https://bd-project.herokuapp.com/bagaz', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id_rezerwacja,
                waga
              }),
            });





//to test if it works 
            fetch(`https://bd-project.herokuapp.com/rezerwacjaUpdate/${id_rezerwacja}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id_rezerwacja
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                            return response.json()
            })

    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id_rez">Numer ID Twojej rezerwacji: </label>
                <input id="id_rez" type="text" value={id_rezerwacja} autoComplete="off"
                    onChange={handleIdChange}/>

        
                <label htmlFor="waga">Waga bagażu: </label>
                <input id="waga" type="text" value={waga} autoComplete="off"
                    onChange={handleWagaChange}/>
        
                <button >Dodaj bagaż</button>
            </form>

        </div>
    )
}
export default DodajBagaz;

