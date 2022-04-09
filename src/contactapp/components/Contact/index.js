import {useState,useEffect} from 'react'
import List from './List/'
import Form from './Form'
function Contact() {

    const [contacts, setContacts] = useState([
        {
            id:1,
            fullname: "İsmail",
            phone_number:123456
            
        },
        {
            id:2,
            fullname: "Tayfun",
            phone_number:3456789 
        },
        {
            id:3,
            fullname: "Ahmet",
            phone_number:9876534  
        }
    ])
    useEffect(() => {
    console.log(contacts);
    },[contacts])
  return (
    <div>
        <h1>Contact App</h1>
       <List contacts={contacts} />
       <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contact