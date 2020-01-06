import React, {Component} from 'react'
import Loty from './components/Loty'
import LotyPoWylocie from './components/LotyPoWylocie'
import SzukajPoWylocie from './components/SzukajPoWylocie'

class App extends Component {



  render(){

      return (
        <div className="App">
          <Loty />
          <LotyPoWylocie/>

          <SzukajPoWylocie />

        </div>
      );
  }
}

export default App;
