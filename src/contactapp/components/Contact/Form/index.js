import {useEffect, useState} from 'react'

function Form({addContact,contacts}) {
    const initialForm = {fullname:"",phone_number:""};
    const [form, setForm] = useState(initialForm)
    const onChangeForm = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    useEffect(() => {
    setForm(initialForm)
    },[contacts])
    const onSubmit = (e) => {
        if(form.fullname === "" || form.phone_number === ""){
            return false;
        }
        e.preventDefault();
        addContact([...contacts,form])
        console.log(form);
    }   
  return (
    <div>
    <div>
        <input name="fullname" value={form.fullname} placeholder="Full Name" onChange={onChangeForm} />
    </div>
    <div>
        <input name="phone_number" value={form.phone_number}  placeholder="Phone Number" onChange={onChangeForm} />
    </div>
    <div>
        <button onClick={onSubmit}>Gönder</button>
    </div>

    </div>
  )
}

export default Form