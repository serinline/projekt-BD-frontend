import React, {Component} from 'react';
//import Remarkable from 'react-remarkable';
import Text from './Text'


class SzukajPoWylocie extends Component {
    state = { text: "" };
    //state = { value: "" };

    //handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    // handleChange (event) {
    //     this.setState({text1: event.target.value});
    // }

    onButtonClickWMI = () => {
      this.setState({ text: "WMI" });
    }
    onButtonClickCRL = () => {
      this.setState({ text: "CRL" });
    }
    onButtonClickLUZ = () => {
        this.setState({ text: "LUZ" });
      }
    
    handleSubmit(event) {
        alert(this.state.text);
        event.preventDefault();
    } 

    // getRawMarkup() {
    //     const md = new Remarkable();
    //     return { __html: md.render(this.state.value) };
    // }
    
    
  
    render() {
      return (
        <div className="textmain">
        <form onSubmit={this.handleSubmit}>

        {/* <label>
            <p>What's your name?</p>
            <input type="value" text1={this.state.value}  onChange={this.handleChange}/>
        </label>  */}
        <Text staticText="Wybierz miejsce wylotu"
          clickText={this.state.text} />
        <button onClick={this.onButtonClickWMI}>WMI (Warszawa - Modlin) </button> 
        <button onClick={this.onButtonClickCRL}>CRL (Bruksela - Charleroi)</button>
        <button onClick={this.onButtonClickLUZ}>LUZ (Lublin) </button>
        
        
        </form>
        </div>
      );
    }
}
  
export default SzukajPoWylocie;
