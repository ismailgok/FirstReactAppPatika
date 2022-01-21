import logo from './logo.svg';
import './App.css';
import User from './User';

const friends = ["Fatma","Ahmet","Mehmet","Ali"];

function App() {
  return (
    <div className="App">
      <User 
      name="İsmail"
      surname="Gök"
      age="25"
      friends={friends}
      isLoggedIn={true}
      address={{
        title:"Etiler/İstanbul",
        zip:34500,
      }}
      />
    </div>
  );
}

export default App;
