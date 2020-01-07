import React, {useState, Component} from 'react';

function LotyPoPrzylocieWylocie (props){

    this.state = {
        loty: [],
        isLoaded: false,
      }


    const [wylot, setWylot] = useState('')
    const [przylot, setPrzylot] = useState('')

    function handleWylotChange(event){
        setWylot(event.target.value);
    }

    function handlePrzylotChange(event){
        setPrzylot(event.target.value);
    }


    function handleSubmit(){
        fetch(`http://localhost:8090/lot/${wylot}/${przylot}`)
        .then(res => res.json()) //result
        .then(json => {
            this.setState({
                isLoaded: true,
                loty: json
            })
        });

            return (
                <div>
                { loty.map(lot => (
                    <div key={lot.id_lot}>
                        <div class="title0">Nr lotu:  { lot.id_lot }</div>
                        <div class="title1">Wylot</div>
                        <div class = "title2">Lotnisko: { lot.lotnisko_wylot } </div>
                        <div class = "title2">Data: { lot.wylot }  </div>

                        <div class="title1">Przylot</div>
                        <div class = "title2">Lotnisko: { lot.lotnisko_przylot } </div>
                        <div class = "title2">Data: { lot.przylot } </div>
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