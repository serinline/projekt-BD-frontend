import React, {useState} from 'react';

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
    
           fetch('http://localhost:8090/bagaz', {
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
    }

    function updateRezerwacja(){
        fetch(`http://localhost:8090/rezerwacjaUpdate/${id_rezerwacja}`, {
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

        
                <label htmlFor="waga">Waga bagazu: </label>
                <input id="waga" type="text" value={waga} autoComplete="off"
                    onChange={handleWagaChange}/>
        
                <button>Dodaj bagaż</button>
            </form>

            <button onClick={updateRezerwacja}>Dodaj bagaż do swojej rezerwacji</button>

        </div>
    )
}
export default DodajBagaz;

