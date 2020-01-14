import React, {Component} from 'react'
import '../../style/mainPage.css'

class Instrukcja extends Component {
  render(){

      return (


            <div id="description">
                <div id = "desc-2">Jak zarezerwować lot:</div>
                <ul id="desc" >
                    <li>Wyszukaj interesujące Cię połączenie w zakładce 'Szukaj lotów'</li>
                    <li>Wpisz swoje dane w zakładce 'Zarejestruj się'</li>
                    <li>Potwierdź zapis i pobierz swoje ID.</li>
                    <li>Przejdź do zakładki 'Rezerwacje' i uzupełnij pola zgodnie z opisem. </li>
                    <li>W zakładce 'Dodaj bagaż' masz możliwość dodania bagażu nadanego. Brak dodania bagażu oznacza, że podróżujesz jedynie z bagażem podręcznym.</li>
                </ul>
            </div>
      );
  }
}

export default Instrukcja;
