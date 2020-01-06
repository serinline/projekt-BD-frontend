import React, {Component} from 'react'

window.$miasto = ''

class LotyPoWylocie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loty: [],
            isLoaded: false,
            miasto: ''
          }
      }

    // miastoWMI(){
    //     miasto = 'WMI';
    // }

    // miastoCRL(){
    //     miasto = 'CRL';
    // }

    // miastoLUZ(){
    //     miasto = 'LUZ';
    // }


    componentDidMount() {

    var miasto = this.state;

    fetch(`http://localhost:8090/wylot/${miasto}`)
    .then(res => res.json()) //result
    .then(json => {
        this.setState({
            isLoaded: true,
            loty: json
        })
    });
    }

    
  
    render() {      
    var { isLoaded, loty } = this.state;

    if(!isLoaded){
      return <div> Wczytywanie... </div>
    }

    else {
          return(
              <div>


                   <ul>
                    { loty.map(lot => (
                        <li key={lot.id_lot}>
                            Wylot
                            Lotnisko: { lot.lotnisko_wylot } 
                            Data: { lot.wylot } 

                            Przylot
                            Lotnisko: { lot.lotnisko_przylot }
                            Data: { lot.przylot }
                        </li>
                    ))}
                </ul>
              </div>
          );
      }
    }
  
}

export default LotyPoWylocie;