import React, {Component} from 'react'
import '../../style/mainPage.css'

class Instrukcja extends Component {
  render(){

      return (


            <div id="description">
                <div id = "desc-2">Jak zarezerwować lot:</div>
                <ul id="desc" >
                    <li>W zakładce 'Szukaj lotów' możesz przeszukiwać dostępne połączenia.</li>
                    <li>Wpisz swoje dane w zakładce 'Zarejestruj się'. Po wypełnieniu formularza wyświetlone zostanie Twoje ID. Zapamiętaj je.</li>
                    <li>Przejdź do zakładki 'Rezerwacje' i uzupełnij pola zgodnie z opisem. </li>
                    <li>W zakładce 'Dodaj bagaż' masz możliwość dodania bagażu nadanego. Brak dodania bagażu oznacza, że podróżujesz jedynie z bagażem podręcznym. Możesz dodać kilka bagaży do jednej rezerwacji.</li>
                </ul>
            </div>
      );
  }
}

export default Instrukcja;
