import React,{useState} from 'react';
import 'firebase/auth'
import {useFirebaseApp} from 'reactfire';
import { Button } from '@material-ui/core';




export default function Login() {
  const [mail,setEmail]=useState('');
  const [contra,setPassword]=useState('');
  const firebase=useFirebaseApp();

  const submit = async()=>{
    while(mail==null && contra==null){

    } 
    firebase.auth().createUserWithEmailAndPassword(mail.trim(),contra);
  }
  const logOut=async()=>{
    await firebase.auth().signOut();
  }



  return (
    
   <div>
     <div>
       <label htmlFor="email">Correo Electronico</label>
       <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)}/>
       <label htmlFor="email">Contraseña</label>
       <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}/>
       <button onClick={submit}>Iniciar sesion</button>
       </div>
       </div>
  );
}