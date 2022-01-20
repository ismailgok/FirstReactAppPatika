import logo from './logo.svg';
import './App.css';
import User from './User';

const friends = [

  {
    name:"Ayşe"
  },
  {
    name:"Fatma"
  },
  {
    name:"Ahmet"
  },
  {
    name:"Mehmet"
  }


];

function App() {
  return (
    <div className="App">
      <User 
      name="İsmail"
      surname="Gök"
      age={25}
      friends={friends}
      
      />
    </div>
  );
}

export default App;
