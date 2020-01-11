import React, {useState} from 'react';
import '../../style/loty.css'


function ListaLotow (){


    const [miasto, setMiasto] = useState('')
    const [loty, setLoty] = useState([])


    function handleMiastoChange(event){
        setMiasto(event.target.value);

        

        event.preventDefault();
        fetch(`http://localhost:8090/przylot/${miasto}`, {
            method: "GET",
            dataType: "JSON",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            }
          })
        .then(res => { 
            return res.json()
        }) //result
        .then(json => {
            setLoty(json)
        });

    }

    function handleMiastoChange2(event){
      setMiasto(event.target.value);

      event.preventDefault();
      fetch(`http://localhost:8090/wylot/${miasto}`, {
          method: "GET",
          dataType: "JSON",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        })
      .then(res => { 
          return res.json()
      }) //result
      .then(json => {
          setLoty(json)
      });

  }

    function handleSubmit(event){
      event.preventDefault();
      fetch(`http://localhost:8090/lot`, {
          method: "GET",
          dataType: "JSON",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          }
        })
      .then(res => { 
          return res.json()
      }) //result
      .then(json => {
          setLoty(json)
      });
      }
    
    return (
        <div>

              <div className="flights-list-default">
                <div className="label">
                  <form>
                      <button className="link-to" name="wszystkie-loty" value="all" onClick={handleSubmit}>Wszystkie loty</button>
                      <button className="link-to" name="miasto-wylot" value="WMI" onClick={handleMiastoChange2}>Z Warszawy (WMI)</button>
                      <button className="link-to" name="miasto-wylot" value="CRL" onClick={handleMiastoChange2}>Z Brukseli (CRL)</button>
                      <button className="link-to" name="miasto-wylot" value="LUZ" onClick={handleMiastoChange2}>Z Lublina (LUZ)</button>
                  </form>
                </div> 
                <div className="label">
                  <form>
                      <button className="link-to" name="miasto-wylot" value="LBA" onClick={handleMiastoChange}>Do Leeds (LBA)</button>
                      <button className="link-to" name="miasto-wylot" value="CRL" onClick={handleMiastoChange}>Do Brukseli (CRL)</button>
                      <button className="link-to" name="miasto-wylot" value="WMI" onClick={handleMiastoChange}>Do Warszawy(WMI)</button>
                      <button className="link-to" name="miasto-wylot" value="ANR" onClick={handleMiastoChange}>Do Antwerpii (ANR)</button>
                      <button className="link-to" name="miasto-wylot" value="RMI" onClick={handleMiastoChange}>Do Rimini (RMI)</button>
                  </form>
                </div>
              </div>

            <ItemListerLot loty={loty}/>

        </div>

    )
  
}

const ItemListerLot = props =>  <div>
    { props.loty.map(lot => (
                <div id="lista-lotow" key={lot.id_lot}>
                <div className="title0">Nr lotu:  { lot.id_lot }</div>
                  <div className="label">
                    <div className="title1">Wylot</div>
                    <div className = "title2">Lotnisko: { lot.lotnisko_wylot } </div>
                    <div className = "title2">Data: { lot.wylot } </div>
                  </div>

                  <div className="label">
                    <div className="title1">Przylot</div>
                    <div className = "title2">Lotnisko: { lot.lotnisko_przylot } </div>
                    <div className = "title2">Data: { lot.przylot } </div>
                  </div>

              </div>
    ))}
    {/* {props.loty.lenght === 0 && <div> Nie znaleziono lotów </div>} */}
    </div> 


export default ListaLotow;