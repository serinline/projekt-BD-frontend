import React, {Component} from 'react'


class Loty extends Component {

  constructor(props){
    super(props);
    this.state = {
      loty: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:8090/lot')
    .then(res => res.json()) //result
    .then(json => {
        this.setState({
          isLoaded: true,
          loty: json
        })
    });
  }


  render(){

    var { isLoaded, loty } = this.state;

    if(!isLoaded){
      return <div> Wczytywanie... </div>
    }

    else {

      return (
        <div className="Loty">

            { loty.map(lot => (
                <div key={lot.id_lot}>
                  <div class="title0">Nr lotu:  { lot.id_lot }</div>
                    <div class="title1">Wylot</div>
                    <div class = "title2">Lotnisko: { lot.lotnisko_wylot } </div>
                    <div class = "title2">Data: { lot.wylot } </div>

                    <div class="title1">Przylot</div>
                    <div class = "title2">Lotnisko: { lot.lotnisko_przylot } </div>
                    <div class = "title2">Data: { lot.przylot } </div>

                </div>
            ))}
          
        </div>
      );
    }
  }
}

export default Loty;
