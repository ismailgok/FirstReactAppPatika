
import { useState } from 'react';

function App(){

    const [name,setName] = useState("Ahmet");
    const [age, setAge] = useState(23);
    const [friends, setFriends] = useState(["Ahmet","Mehmet","Yusuf"]);
    const [address, setAddress] = useState({title:"Osmaniye", zip:80})

    return(

        <div className="App">

        <div>Merhaba {name}!</div>
        <br />
        <div>Yaşınız: {age}</div>
        <br/>
        <button onClick={() => setName("İsmail")}>İsmi Güncelle</button>
        
        <button onClick={() => setAge(25)}>Yaşı Güncelle</button>

        <br/>
        <br/>
        <h1>Friends</h1>

        {
            friends.map((friend,index) => <div key={index}> {friend} </div>)

        }
        
        <br />

        <button onClick={() => setFriends([...friends,"Ayşe"])}>new friend</button>
        <br />
        <br />

        <h2>Address</h2>
        <div>
            {address.title} - {address.zip}
        </div>

        <br />
        <button onClick={() => setAddress({...address,title:"Adana"})}>
            New City
        </button>
       </div>

    );


}



export default App;