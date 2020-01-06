import React, {Component} from 'react';

class DodajPasazera extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('http://localhost:8090/pasazer', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data
          }),
        });
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="imie">Imię: </label>
            <input id="imie" name="imie" type="text" />
    
            <label htmlFor="nazwisko">Nazwisko: </label>
            <input id="nazwisko" name="nazwisko" type="text" />
    
            <label htmlFor="pesel">Pesel:</label>
            <input id="pesel" name="pesel" type="number" />

            <label htmlFor="obywatelstwo">Obywatelstwo:</label>
            <input id="obywatelstwo" name="obywatelstwo" type="text" />
    
            <button>Potwierdź zapis</button>
          </form>
        );
      }
    
}

export default DodajPasazera;