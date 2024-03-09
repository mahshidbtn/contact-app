import React, { useState } from 'react'

function Contacts() {

const [contact,setContact] = useState({
    name:"",
    lastName:"",
    email:"",
    phone:""
})
 const changeHandler = event =>{
    const name = event.target.name;
    const value =event.target.value;

    setContact((contact)=>({...contact , [name] : value}))
 }

 const addHandler =() =>{
    console.log(contact)
 }

  return (
    <div>
        <div>
            <input type="text" name='name' value={contact.name} placeholder='Name' onChange={changeHandler}/>
            <input type="text" name='lastName' value={contact.lastName} placeholder='Last Name' onChange={changeHandler}/>
            <input type="email" name='email' value={contact.email} placeholder='Email' onChange={changeHandler}/>
            <input type="number" name='phone' value={contact.phone} placeholder='Phone' onChange={changeHandler}/>
            <button onClick={addHandler}>Add Contact</button>
        </div>
    </div>
  )
}

export default Contacts