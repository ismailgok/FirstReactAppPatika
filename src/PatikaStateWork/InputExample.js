import { useState } from 'react';

function InputExample() {
    // const [name, setName] = useState("ismail");
    // const [surname, setSurname] = useState("Gök");

    // const onChangeName = (event) => {
    //     setName(event.target.value)
    // }

    // const onChangeSurname = (e) => {
    //     setSurname(e.target.value)
    // }
    const [form, setForm] = useState({name:"", surname:""})


    const onChangeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    return <div>
        {/* Name */}
        <br />
        {/* <input value={name} onChange={(event) => setName(event.target.value)}/>
        <br /> */}

        {/* <input value={name} onChange={onChangeName} />
        <br />
        {name}
        <br />
        <br />

        Surname
        <br />
        <input value={surname} onChange={onChangeSurname} />
        <br />
        {surname}
        <br />
        <br />
        <br />
        <h1>{name} {surname}</h1> */}

        <input name="name" value={form.name} onChange={onChangeForm}/>
        <input name="surname" value={form.surname} onChange={onChangeForm}/>

        <br />
        {form.name} {form.surname}
    </div>;
}

export default InputExample;
