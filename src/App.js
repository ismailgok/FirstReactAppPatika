
import { useState } from 'react';

function App(){

    const [name,setName] = useState("Ahmet");
    const [age, setAge] = useState(23) 

    return(

        <div className="App">

        <div>Merhaba {name}!</div>
        <br />
        <div>Yaşınız: {age}</div>
        <br/>
        <button onClick={() => setName("İsmail")}>İsmi Güncelle</button>
        
        <button onClick={() => setAge(25)}>Yaşı Güncelle</button>
       </div>


    );


}



export default App;