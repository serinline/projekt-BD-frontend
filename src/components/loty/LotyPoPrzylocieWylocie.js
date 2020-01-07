import React, {useState} from 'react';

function LotyPoPrzylocieWylocie (props){


    const [wylot, setWylot] = useState('')
    const [przylot, setPrzylot] = useState('')

    function handleWylotChange(event){
        setWylot(event.target.value);
    }

    function handlePrzylotChange(event){
        setPrzylot(event.target.value);
    }


    function handleSubmit(){

        let loty = [];

        fetch(`http://localhost:8090/lot/${wylot}/${przylot}`)
        .then(res => res.json()) //result
        .then(json => {
            this.setState({
                //isLoaded: true,
                loty: json
            })
        });

        class extends React.Component {
            render(){
                return (
                <div>
                { loty.map(lot => (
                    <div key={lot.id_lot}>
                        <div className="title0">Nr lotu:  { lot.id_lot }</div>
                        <div className="title1">Wylot</div>
                        <div className = "title2">Lotnisko: { lot.lotnisko_wylot } </div>
                        <div className = "title2">Data: { lot.wylot }  </div>

                        <div className="title1">Przylot</div>
                        <div className = "title2">Lotnisko: { lot.lotnisko_przylot } </div>
                        <div className = "title2">Data: { lot.przylot } </div>
                    </div>
                ))}
                </div>
            )
        }
    
    return (
        <div>
  
            <form onSubmit={handleSubmit}>
                <label htmlFor="wylot">Miejsce wylotu: </label>
                <input id="wylot" type="text" value={wylot} autoComplete="off"
                    onChange={handleWylotChange}/>
  
        
                <label htmlFor="przylot">Miejsce przylotu: </label>
                <input id="przylot" type="text" value={przylot} autoComplete="off"
                    onChange={handlePrzylotChange}/>
        
                <button>Szukaj połączenia</button>
              </form>
              
            </div>
            )
  
}

export default LotyPoPrzylocieWylocie;